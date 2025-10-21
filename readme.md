# D-Gate Waitlist Landing Page

A premium waitlist landing page for D-Gate (Vistaforge), built with the design system extracted from vf-alpha.vercel.app.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Supabase account
- Mailchimp account (optional)
- Slack workspace (optional)

### Installation

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd dgate-waitlist
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   MAILCHIMP_API_KEY=your_mailchimp_api_key
   MAILCHIMP_LIST_ID=your_list_id
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   ```

3. **Database Setup**
   ```bash
   # Run the SQL schema in your Supabase dashboard
   cat supabase_waitlist.sql
   ```

4. **Deploy**
   ```bash
   # For Vercel
   vercel deploy
   
   # For Netlify
   netlify deploy --prod
   ```

## 📁 Project Structure

```
├── index.html              # Main landing page
├── styles.css              # Extracted design tokens & styles
├── app.js                  # Client-side functionality
├── serverless/
│   └── waitlist-handler.js # Serverless function
├── supabase_waitlist.sql   # Database schema
├── mailchimp_subscribe.js  # Mailchimp integration
├── assets/
│   ├── branding/          # Logo and brand assets
│   ├── mockups/           # Mobile app mockups
│   └── icons/            # Role-specific icons
├── copy/                  # All text content
└── docs/                  # Documentation
```

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Run the SQL from `supabase_waitlist.sql`
3. Get your project URL and service role key
4. Add to environment variables

### Mailchimp Setup
1. Create a new audience in Mailchimp
2. Get your API key from Account > Extras > API keys
3. Get your audience ID from Audience > Settings > Audience name and defaults
4. Add to environment variables

### Slack Setup
1. Create a new Slack app
2. Enable Incoming Webhooks
3. Create a webhook URL
4. Add to environment variables

## 🧪 Testing

### Local Development
```bash
# Start local server
python -m http.server 8000
# or
npx serve .

# Test with ngrok for webhooks
ngrok http 8000
```

### Test Waitlist Submission
```bash
curl -X POST https://your-domain.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "role": "realtor",
    "company": "Test Company"
  }'
```

### Test Mailchimp Integration
```bash
curl -X POST https://your-domain.com/api/mailchimp-test \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "role": "realtor"
  }'
```

## 🎨 Design System

### Color Palette
- **Primary**: Gold gradient (#FFD700 to #D4AF37)
- **Background**: Light (#FFFFFF) / Dark (#0A0A0A)
- **Text**: Dark (#111111) / Light (#F5F5F5)
- **Accent**: Amber (#D4AF37)

### Typography
- **Headings**: Poppins (300, 400, 500, 600, 700)
- **Body**: Inter (300, 400, 500, 600, 700)

### Components
- Buttons with gradient effects
- Glass morphism cards
- Smooth animations
- Responsive grid layouts

## 📱 Features

### Waitlist Form
- Email validation
- Role selection
- Optional company info
- Real-time error handling
- Success confirmation

### Integrations
- **Supabase**: Data storage
- **Mailchimp**: Email marketing
- **Slack**: Team notifications
- **Analytics**: GA4/Plausible tracking

### Accessibility
- WCAG AA compliant
- Keyboard navigation
- Screen reader support
- High contrast mode
- Reduced motion support

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables

### Manual Deployment
1. Upload files to your web server
2. Configure serverless function
3. Set up environment variables
4. Test all integrations

## 🔍 Monitoring

### Analytics Events
- `page_view`: Page load
- `waitlist_signup`: Form submission
- `theme_toggle`: Premium theme switch
- `share_click`: Social sharing

### Error Tracking
- Form validation errors
- API integration failures
- User interaction issues

## 🛠️ Customization

### Adding New Roles
1. Update role options in HTML
2. Add role-specific benefits
3. Update Mailchimp interest mapping
4. Test form submission

### Styling Changes
1. Modify CSS variables in `:root`
2. Update component styles
3. Test across devices
4. Validate accessibility

### Content Updates
1. Edit files in `copy/` folder
2. Update HTML content
3. Test all sections
4. Validate SEO

## 📊 Analytics

### Key Metrics
- Waitlist conversion rate
- Role distribution
- Traffic sources
- User engagement

### Reports
- Daily signup counts
- Role-based analytics
- Geographic distribution
- Referral tracking

## 🔒 Security

### Data Protection
- HTTPS only
- Input validation
- SQL injection prevention
- XSS protection

### Privacy Compliance
- GDPR compliant
- CCPA compliant
- Data retention policies
- User consent tracking

## 🆘 Troubleshooting

### Common Issues

**Form not submitting**
- Check JavaScript console for errors
- Verify serverless function is deployed
- Test API endpoint directly

**Mailchimp not working**
- Verify API key format
- Check list ID is correct
- Test with Mailchimp API directly

**Slack notifications not sending**
- Verify webhook URL
- Check Slack app permissions
- Test webhook with curl

### Debug Mode
Enable debug logging by adding `?debug=true` to URL.

## 📞 Support

For technical support:
- Email: dev@dgate.com
- Slack: #dgate-support
- GitHub Issues: [Repository Issues]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the D-Gate team**
