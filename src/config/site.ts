// Site Configuration
// Update these values to customize your site without touching the code

export const siteConfig = {
  // Company Information
  company: {
    name: "Volaris Global Limited",
    email: "info@volarisglobal.com", // Change this email address
    website: "https://volarisglobal.com",
  },

  // Social Media Links
  // Add your social media URLs here, or leave empty to hide them
  socials: {
    linkedin: "", // e.g., "https://linkedin.com/company/volaris-global-limited"
    facebook: "", // e.g., "https://facebook.com/volarisglobal"
    instagram: "", // e.g., "https://instagram.com/volarisglobal"
    twitter: "", // e.g., "https://twitter.com/volarisglobal"
  },

  // SEO Configuration
  seo: {
    title: "Volaris Global Limited",
    description: "Volaris Global Limited — Innovating Real Estate Visualization with AI-powered solutions.",
    keywords: "Volaris Global, AI real estate, property visualization, architecture AI, interior design AI",
    ogImage: "/assets/branding/volaris_full.png",
    ogUrl: "https://volarisglobal.com",
  },

  // Contact Information
  contact: {
    primaryEmail: "info@volarisglobal.com", // Main contact email
    investorEmail: "invest@volarisglobal.com", // Investor enquiries email
    phone: "", // Add phone number if needed
    address: "", // Add physical address if needed
  },

  // Navigation
  navigation: {
    logo: {
      full: "/assets/branding/volaris_full.png", // Desktop logo
      mark: "/assets/branding/volaris_mark.png", // Mobile logo
    },
  },
};

// Helper function to get social links that are configured
export const getConfiguredSocials = () => {
  return Object.entries(siteConfig.socials).filter(([_, url]) => url.trim() !== "");
};

// Helper function to check if a social platform is configured
export const isSocialConfigured = (platform: keyof typeof siteConfig.socials) => {
  return siteConfig.socials[platform].trim() !== "";
};
