export const pricingConfig = {
  // Pricing Tiers
  pricingTiers: [
    {
      id: "small",
      name: "Små projekter",
      hours: "Mindre end 24 timer",
      price: 1000,
      currency: "DKK",
      perUnit: "i timen",
      description: "For mindre automatiseringer og optimeringsprojekter"
    },
    {
      id: "medium", 
      name: "Mellem projekter",
      hours: "24-70 timer",
      price: 800,
      currency: "DKK",
      perUnit: "i timen",
      description: "For mellemstore projekter og integrationer"
    },
    {
      id: "large",
      name: "Store projekter", 
      hours: "Over 70 timer",
      price: 600,
      currency: "DKK",
      perUnit: "i timen",
      description: "For omfattende automatiseringer og enterprise løsninger"
    }
  ],

  // Additional Information
  additionalInfo: {
    disclaimer: "Priserne er vejledende og kan variere fra projekt til projekt.",
    exclusions: "Alt konsultation og indledende samtaler medregnes ikke.",
    note: "Priser kan justeres baseret på projektets kompleksitet og omfang."
  },

  // Contact for Custom Pricing
  customPricing: {
    available: true,
    message: "Kontakt mig her for et personligt tilbud",
    cta: "Få et personligt tilbud"
  }
};

// Helper functions
export const getPricingTiers = () => pricingConfig.pricingTiers;

export const getAdditionalInfo = () => pricingConfig.additionalInfo;

export const getCustomPricingInfo = () => pricingConfig.customPricing;

export const formatPrice = (price: number, currency: string) => {
  return `${price.toLocaleString('da-DK')} ${currency}`;
};
