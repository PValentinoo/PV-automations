# Pricing Configuration Guide

## Overview
The pricing section on your PV Automation website is fully configurable through the `src/config/pricing.ts` file. This allows you to easily update prices, descriptions, and other information without touching the component code.

## File Location
```
src/config/pricing.ts
```

## What You Can Edit

### 1. Pricing Tiers
Each pricing tier has the following editable properties:
- `id`: Unique identifier (don't change)
- `name`: Display name for the tier
- `hours`: Time range description
- `price`: Price in DKK
- `currency`: Currency (currently DKK)
- `perUnit`: Price unit (currently "i timen")
- `description`: Brief description of what's included

### 2. Additional Information
- `disclaimer`: General pricing disclaimer
- `exclusions`: What's not included
- `note`: Additional notes about pricing

### 3. Custom Pricing
- `message`: Message about custom pricing
- `cta`: Call-to-action text

## Example Configuration
```typescript
export const pricingConfig = {
  pricingTiers: [
    {
      id: "small",
      name: "Små projekter",
      hours: "Mindre end 37 timer",
      price: 1000,  // Change this to update price
      currency: "DKK",
      perUnit: "i timen",
      description: "For mindre automatiseringer og optimeringsprojekter"
    },
    // ... more tiers
  ],
  
  additionalInfo: {
    disclaimer: "Priserne er vejledende og kan variere fra projekt til projekt.",
    exclusions: "Alt konsultation og indledende samtaler medregnes ikke.",
    note: "Priser kan justeres baseret på projektets kompleksitet og omfang."
  }
};
```

## How to Update Prices
1. Open `src/config/pricing.ts`
2. Find the pricing tier you want to modify
3. Change the `price` value
4. Save the file
5. The website will automatically reflect the new prices

## Important Notes
- **Don't change the `id` fields** - these are used internally
- **Don't remove any properties** - the component expects all fields to exist
- **Prices are automatically formatted** with Danish locale (e.g., 1.000 DKK)
- **Changes take effect immediately** after saving and refreshing the page

## Current Pricing Structure
- **Små projekter**: 1.000 DKK/timen (mindre end 37 timer)
- **Mellem projekter**: 800 DKK/timen (37-70 timer)  
- **Store projekter**: 600 DKK/timen (over 70 timer)

## Need Help?
If you need to make more complex changes to the pricing display or layout, contact your developer as the component code may need to be modified.
