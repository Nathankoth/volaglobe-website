# Configuration Guide

This guide explains how to customize your Volaris Global website without touching the code.

## Quick Configuration

All customizable settings are located in `src/config/site.ts`. Simply edit this file to update:

- Email addresses
- Social media links
- Company information
- SEO settings

## Email Configuration

Update the email addresses in `src/config/site.ts`:

```typescript
contact: {
  primaryEmail: "info@volarisglobal.com",    // Main contact email
  investorEmail: "invest@volarisglobal.com", // Investor enquiries email
  phone: "",                                 // Add phone number if needed
  address: "",                              // Add physical address if needed
},
```

## Social Media Configuration

Add your social media URLs in `src/config/site.ts`:

```typescript
socials: {
  linkedin: "https://linkedin.com/company/volaris-global-limited",
  facebook: "https://facebook.com/volarisglobal",
  instagram: "https://instagram.com/volarisglobal", 
  twitter: "https://twitter.com/volarisglobal",
},
```

**Note:** Leave any social media URL empty (`""`) to hide that platform from the website.

## SEO Configuration

Update SEO settings in `src/config/site.ts`:

```typescript
seo: {
  title: "Volaris Global Limited",
  description: "Volaris Global Limited — Innovating Real Estate Visualization with AI-powered solutions.",
  keywords: "Volaris Global, AI real estate, property visualization, architecture AI, interior design AI",
  ogImage: "/assets/branding/volaris_full.png",
  ogUrl: "https://volarisglobal.com",
},
```

## Logo Configuration

Update logo paths in `src/config/site.ts`:

```typescript
navigation: {
  logo: {
    full: "/assets/branding/volaris_full.png", // Desktop logo
    mark: "/assets/branding/volaris_mark.png", // Mobile logo
  },
},
```

## Company Information

Update company details in `src/config/site.ts`:

```typescript
company: {
  name: "Volaris Global Limited",
  email: "info@volarisglobal.com",
  website: "https://volarisglobal.com",
},
```

## Leadership Team Configuration

Add or update team members in `src/config/site.ts`:

```typescript
leadership: {
  teamMembers: [
    {
      name: "Team Member Name",
      initials: "TM",
      role: "Their Role",
      tagline: "Brief description of their role.",
      linkedin: "https://linkedin.com/in/their-profile",
      image: "/assets/their-photo.jpg", // Add photo to src/assets/
      bioLong: "Detailed bio for the team member...",
    },
    // Add more team members here
  ],
},
```

**Adding New Team Members:**
1. Add their photo to `src/assets/` folder
2. Add their information to the `teamMembers` array in `src/config/site.ts`
3. They will automatically get consistent circular photo styling
4. No code changes needed - just configuration!

## After Making Changes

1. Save the `src/config/site.ts` file
2. The changes will automatically be reflected in:
   - Navigation bar
   - Footer
   - Contact sections
   - Social media links
   - Email links
   - Leadership team section

## Build and Deploy

After making configuration changes:

```bash
npm run build
```

The updated website will be ready for deployment to any hosting provider.

## Example: Adding LinkedIn

To add LinkedIn to your website:

1. Open `src/config/site.ts`
2. Find the `socials` section
3. Update the LinkedIn URL:
   ```typescript
   socials: {
     linkedin: "https://linkedin.com/company/your-company-name",
     // ... other socials
   },
   ```
4. Save the file
5. Build and deploy

The LinkedIn icon will automatically appear in the footer!

## Example: Changing Email Address

To change the main contact email:

1. Open `src/config/site.ts`
2. Update the contact section:
   ```typescript
   contact: {
     primaryEmail: "your-new-email@company.com",
     investorEmail: "investors@company.com",
     // ... other contact info
   },
   ```
3. Save the file
4. Build and deploy

All email links throughout the website will use the new address!

## Need Help?

If you need to make changes not covered in this guide, you can:

1. Edit the content in the component files in `src/components/`
2. Update styling in `src/index.css` or component files
3. Modify the layout in `src/pages/Index.tsx`

Remember to test your changes locally with `npm run dev` before deploying!
