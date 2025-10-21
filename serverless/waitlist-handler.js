// Serverless function for handling waitlist submissions
// Handles Supabase, Mailchimp, and Slack integrations

const { createClient } = require('@supabase/supabase-js');

// Environment variables
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// Initialize Supabase client with service role key
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'CORS preflight' })
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.email || !data.role) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: 'Email and role are required',
          success: false 
        })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: 'Invalid email format',
          success: false 
        })
      };
    }

    // Prepare data for Supabase
    const waitlistData = {
      email: data.email.toLowerCase().trim(),
      role: data.role,
      company: data.company || null,
      monthly_listings: data.monthlyListings || null,
      how_heard: data.howHeard || null,
      created_at: new Date().toISOString()
    };

    // Insert into Supabase
    const { data: supabaseResult, error: supabaseError } = await supabase
      .from('waitlist')
      .insert([waitlistData])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      
      // Check if it's a duplicate email error
      if (supabaseError.code === '23505') {
        return {
          statusCode: 409,
          headers: corsHeaders,
          body: JSON.stringify({ 
            error: 'Email already exists in waitlist',
            success: false 
          })
        };
      }
      
      throw new Error(`Supabase error: ${supabaseError.message}`);
    }

    console.log('Successfully inserted into Supabase:', supabaseResult);

    // Track success metrics
    const successMetrics = {
      supabase: true,
      mailchimp: false,
      slack: false
    };

    // Subscribe to Mailchimp (non-blocking)
    try {
      await subscribeToMailchimp(data.email, data.role, data.company);
      successMetrics.mailchimp = true;
      console.log('Successfully subscribed to Mailchimp');
    } catch (mailchimpError) {
      console.error('Mailchimp error:', mailchimpError);
      // Don't fail the request if Mailchimp fails
    }

    // Send Slack notification (non-blocking)
    try {
      await sendSlackNotification(data.email, data.role, data.company);
      successMetrics.slack = true;
      console.log('Successfully sent Slack notification');
    } catch (slackError) {
      console.error('Slack error:', slackError);
      // Don't fail the request if Slack fails
    }

    // Log external service failures for admin review
    if (!successMetrics.mailchimp || !successMetrics.slack) {
      console.warn('External service failures:', {
        mailchimp: !successMetrics.mailchimp,
        slack: !successMetrics.slack,
        email: data.email
      });
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ 
        success: true,
        message: 'Successfully joined waitlist',
        data: {
          id: supabaseResult[0]?.id,
          email: data.email,
          role: data.role
        }
      })
    };

  } catch (error) {
    console.error('Waitlist handler error:', error);
    
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ 
        error: 'Internal server error',
        success: false 
      })
    };
  }
};

// Mailchimp subscription function
async function subscribeToMailchimp(email, role, company) {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID) {
    throw new Error('Mailchimp credentials not configured');
  }

  const mailchimpData = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      ROLE: role,
      COMPANY: company || '',
      SIGNUP_DATE: new Date().toISOString().split('T')[0]
    },
    tags: ['waitlist', role]
  };

  const response = await fetch(`https://us1.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mailchimpData)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Mailchimp API error: ${errorData.detail || response.statusText}`);
  }

  return await response.json();
}

// Slack notification function
async function sendSlackNotification(email, role, company) {
  if (!SLACK_WEBHOOK_URL) {
    throw new Error('Slack webhook not configured');
  }

  const slackMessage = {
    text: '🎉 New waitlist signup!',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New D-Gate Waitlist Signup*\n\n*Email:* ${email}\n*Role:* ${role}\n*Company:* ${company || 'Not provided'}\n*Time:* ${new Date().toLocaleString()}`
        }
      }
    ]
  };

  const response = await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(slackMessage)
  });

  if (!response.ok) {
    throw new Error(`Slack webhook error: ${response.statusText}`);
  }

  return await response.text();
}
