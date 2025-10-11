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

  // Leadership Team Configuration
  // Add new team members here - they will automatically inherit consistent styling
  leadership: {
    teamMembers: [
      {
        name: "Ogunbajo Nathaniel",
        initials: "ON",
        role: "Founder / Chief Executive Officer (CEO)",
        tagline: "Visionary founder driving growth and innovation.",
        linkedin: "https://www.linkedin.com/in/ogunbajo-nathaniel",
        image: "", // Will show initials fallback
        bioLong: "Ogunbajo Nathaniel is the Founder and Chief Executive Officer of Volaris Global Limited. With a clear vision of building a world-class company that bridges innovation, investment, and sustainable growth, he is the driving force behind the strategic direction of the business. Nathaniel brings a unique blend of entrepreneurial instinct, creative problem solving, and long-term vision that positions Volaris as an emerging player on the global stage. He focuses on shaping investor relations, guiding overall company culture, and creating an environment where innovation thrives. His leadership centers on building scalable systems, attracting the right partnerships, and making Volaris a trusted platform for growth-minded ventures.",
      },
      {
        name: "Olaitan Hafis",
        initials: "OH",
        role: "Co-Founder / Strategic Partner",
        tagline: "Focused on operations, partnerships, and aligning execution.",
        linkedin: "https://www.linkedin.com/in/olayitan-hafis",
        image: "", // Will show initials fallback
        bioLong: "Olaitan Hafis is the Co-Founder and Strategic Partner at Volaris Global Limited. Hafis plays a central role in shaping the company's operational backbone and ensuring strategic objectives translate into actionable business outcomes. He is particularly focused on stakeholder engagement, building reliable structures for partnerships, and aligning operations with Volaris' long-term growth plans. With a strong emphasis on accountability, execution, and sustainable expansion, Hafis ensures that the company's day-to-day activities remain anchored in its vision. His perspective as a co-founder adds depth to the leadership team and reinforces Volaris' commitment to long-term investor confidence.",
      },
      {
        name: "Ugoji Nkechika Christian",
        initials: "UNC",
        role: "Mentor · Advisor · Technical Lead (MCP, MCT)",
        tagline: "Technical mentor and advisor — cloud architecture, developer workflows, and production readiness.",
        linkedin: "https://www.linkedin.com/in/ugoji-nkechika-christian",
        image: "/images/ugojichris.jpg", // Provided avatar
        bioLong: "Ugoji Nkechika Christian (MCP, MCT) is a seasoned technical leader and mentor who specializes in scalable architecture, cloud strategy, and developer productivity. He advises Volaris on technical roadmaps, infrastructure choices, and secure deployment practices, ensuring that engineering decisions align with long-term business goals. Ugoji is particularly skilled at turning strategic product thinking into reliable, maintainable systems that investors can trust.",
      },
      {
        name: "Akintunde Abimbola Agbonde",
        initials: "AA",
        role: "Head of Data",
        tagline: "Head of Data — analytics, governance, and ML-backed insights for investment decisions.",
        linkedin: "https://www.linkedin.com/in/akintunde-abimbola-agbonde",
        image: "/images/akintunde.jpg", // Provided avatar
        bioLong: "Akintunde Abimbola Agbonde leads Volaris' data capabilities. A seasoned data leader with deep experience in analytics, data governance, and ML-driven insight pipelines, Akintunde builds the systems that turn property and market data into investor-grade signals. He is focused on reliable data operations, reproducible models, and clear reporting that supports strategic decision-making and demonstrates measurable value to stakeholders.",
      },
      // Add new team members here - they will automatically get consistent styling
      // {
      //   name: "New Team Member",
      //   initials: "NT",
      //   role: "New Role",
      //   tagline: "New team member description.",
      //   linkedin: "https://linkedin.com/in/new-member",
      //   image: "/assets/new-member.jpg",
      //   bioLong: "Detailed bio for the new team member...",
      // },
    ],
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
