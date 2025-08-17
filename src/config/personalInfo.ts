export const personalInfo = {
  // Personal Details
  name: "Philip Valentin Christiansen",
  title: "Full-Stack Developer & Automatiseringsekspert",
  company: "PV Automations",
  
  // Contact Information
  email: "philipchristiansen1@gmail.com",
  phone: "+45 29 11 73 37",
  linkedin: "https://www.linkedin.com/in/philip-valentin/",
  
  // Location & Background
  location: "Danmark",
  languages: ["Dansk", "Engelsk", "Russisk"],
  education: "HD uddannet",
  
  // Experience & Stats
  experience: "4", // års erfaring
  projectsDelivered: "50+ projekter leveret",
  excelExpertise: "Modersmål: Excel",
  
  // Profile Image
  profileImage: {
    src: "/Philip Valentin Christiansen_21038.jpg",
    alt: "Philip Valentin Christiansen"
  },
  
  // Work Experience Summary
  workExperience: {
    years: "4+ års erfaring",
    industry: "revisionsbranchen",
    focus: "digital transformation",
    expertise: "små startups til store virksomheder"
  },
  
  // Skills & Specializations
  specializations: [
    "Full-Stack Development",
    "Arbejdsgangsoptimering",
    "Moderne teknologi integration",
    "Skalerbare systemer",
    "Excel automatisering",
    "Digital transformation"
  ],
  
  // Copyright & Legal
  copyright: {
    year: "2025",
    fullText: "© 2025 PV Automations"
  }
};

// Helper functions for common use cases
export const getContactInfo = () => ({
  email: personalInfo.email,
  phone: personalInfo.phone,
  linkedin: personalInfo.linkedin
});

export const getPersonalDetails = () => ({
  name: personalInfo.name,
  title: personalInfo.title,
  company: personalInfo.company,
  location: personalInfo.location,
  experience: personalInfo.experience
});

export const getCopyrightInfo = () => ({
  year: personalInfo.copyright.year,
  fullText: personalInfo.copyright.fullText
});
