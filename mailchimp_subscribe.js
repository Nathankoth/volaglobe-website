// Mailchimp subscription integration
// Standalone function for subscribing users to Mailchimp list

/**
 * Subscribe a user to Mailchimp list
 * @param {string} email - User's email address
 * @param {string} role - User's role (realtor, investor, etc.)
 * @param {string} company - User's company (optional)
 * @param {string} apiKey - Mailchimp API key
 * @param {string} listId - Mailchimp list ID
 * @returns {Promise<Object>} Mailchimp API response
 */
async function subscribeToMailchimp(email, role, company = '', apiKey, listId) {
  // Validate inputs
  if (!email || !role || !apiKey || !listId) {
    throw new Error('Missing required parameters: email, role, apiKey, listId');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }

  // Extract server prefix from API key (e.g., 'us1' from 'abc123-us1')
  const serverPrefix = apiKey.split('-')[1];
  if (!serverPrefix) {
    throw new Error('Invalid Mailchimp API key format');
  }

  const mailchimpData = {
    email_address: email.toLowerCase().trim(),
    status: 'subscribed',
    merge_fields: {
      ROLE: role,
      COMPANY: company || '',
      SIGNUP_DATE: new Date().toISOString().split('T')[0],
      SOURCE: 'waitlist'
    },
    tags: ['waitlist', role, 'd-gate'],
    interests: {
      // Map roles to interest categories
      [getInterestId(role)]: true
    }
  };

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mailchimpData)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      // Handle specific Mailchimp errors
      if (response.status === 400 && responseData.title === 'Member Exists') {
        throw new Error('Email already subscribed to list');
      }
      
      throw new Error(`Mailchimp API error: ${responseData.detail || responseData.title || response.statusText}`);
    }

    return {
      success: true,
      data: responseData,
      message: 'Successfully subscribed to Mailchimp'
    };

  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    throw error;
  }
}

/**
 * Get interest ID based on user role
 * @param {string} role - User role
 * @returns {string} Interest ID for Mailchimp
 */
function getInterestId(role) {
  const interestMap = {
    'realtor': 'realtor-updates',
    'investor': 'investor-updates', 
    'architect': 'architect-updates',
    'surveyor': 'surveyor-updates',
    'homebuyer': 'homebuyer-updates',
    'homeowner': 'homeowner-updates',
    'lawyer': 'lawyer-updates',
    'other': 'general-updates'
  };
  
  return interestMap[role] || 'general-updates';
}

/**
 * Update existing subscriber (if they already exist)
 * @param {string} email - User's email address
 * @param {string} role - User's role
 * @param {string} company - User's company
 * @param {string} apiKey - Mailchimp API key
 * @param {string} listId - Mailchimp list ID
 * @returns {Promise<Object>} Mailchimp API response
 */
async function updateMailchimpSubscriber(email, role, company = '', apiKey, listId) {
  const serverPrefix = apiKey.split('-')[1];
  const subscriberHash = require('crypto')
    .createHash('md5')
    .update(email.toLowerCase())
    .digest('hex');

  const updateData = {
    merge_fields: {
      ROLE: role,
      COMPANY: company || '',
      LAST_UPDATE: new Date().toISOString().split('T')[0]
    },
    tags: ['waitlist', role, 'd-gate']
  };

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`Mailchimp update error: ${responseData.detail || response.statusText}`);
    }

    return {
      success: true,
      data: responseData,
      message: 'Successfully updated Mailchimp subscriber'
    };

  } catch (error) {
    console.error('Mailchimp update error:', error);
    throw error;
  }
}

/**
 * Check if email exists in Mailchimp list
 * @param {string} email - User's email address
 * @param {string} apiKey - Mailchimp API key
 * @param {string} listId - Mailchimp list ID
 * @returns {Promise<boolean>} Whether email exists in list
 */
async function checkMailchimpSubscriber(email, apiKey, listId) {
  const serverPrefix = apiKey.split('-')[1];
  const subscriberHash = require('crypto')
    .createHash('md5')
    .update(email.toLowerCase())
    .digest('hex');

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    return response.ok;

  } catch (error) {
    console.error('Mailchimp check error:', error);
    return false;
  }
}

// Example usage:
/*
const result = await subscribeToMailchimp(
  'user@example.com',
  'realtor',
  'Real Estate Co',
  process.env.MAILCHIMP_API_KEY,
  process.env.MAILCHIMP_LIST_ID
);
console.log(result);
*/

module.exports = {
  subscribeToMailchimp,
  updateMailchimpSubscriber,
  checkMailchimpSubscriber
};
