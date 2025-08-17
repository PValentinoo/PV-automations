# Centralized Personal Information Configuration

This document explains how personal information and contact details are now centralized in the PV Automation website.

## Overview

All personal information, contact details, and professional information has been moved to a centralized configuration file located at:
```
src/config/personalInfo.ts
```

## What's Centralized

### Personal Details
- **Name**: Philip Valentin Christiansen
- **Title**: Full-Stack Developer & Automatiseringsekspert
- **Company**: PV Automations

### Contact Information
- **Email**: philipchristiansen1@gmail.com
- **Phone**: +45 29 11 73 37
- **LinkedIn**: https://www.linkedin.com/in/philip-valentin/

### Background Information
- **Location**: Danmark
- **Languages**: Dansk, Engelsk, Russisk
- **Education**: HD uddannet
- **Experience**: 4+ års erfaring
- **Projects**: 50+ projekter leveret
- **Expertise**: Modersmål: Excel

### Work Experience
- **Industry**: revisionsbranchen
- **Focus**: digital transformation
- **Scope**: små startups til store virksomheder

### Profile Image
- **Source**: /Philip Valentin Christiansen_21038.jpg
- **Alt Text**: Philip Valentin Christiansen

### Copyright & Legal
- **Company**: PV Automation
- **Year**: 2025
- **Full Text**: © 2025 PV Automation

## Components Updated

The following components now use the centralized configuration:

1. **AboutSection.tsx** - Personal introduction and profile card
2. **ContactSection.tsx** - Contact information display
3. **Footer.tsx** - Footer contact details
4. **MaintenancePage.tsx** - Maintenance page contact info
5. **PrivacyPolicy.tsx** - Privacy policy contact details

## How to Use

### Import the Configuration
```typescript
import { personalInfo } from "@/config/personalInfo";
```

### Access Information
```typescript
// Direct access
personalInfo.name
personalInfo.email
personalInfo.phone

// Helper functions
import { getContactInfo, getPersonalDetails, getCopyrightInfo } from "@/config/personalInfo";
const contactInfo = getContactInfo();
const personalDetails = getPersonalDetails();
const copyrightInfo = getCopyrightInfo();
```

## Benefits

1. **Single Source of Truth**: All personal information is updated in one place
2. **Consistency**: Ensures all components display the same information
3. **Maintainability**: Easy to update contact details across the entire website
4. **Reusability**: Helper functions for common use cases
5. **Type Safety**: Full TypeScript support with proper typing

## Updating Information

To update any personal information:

1. Edit `src/config/personalInfo.ts`
2. All components will automatically use the updated information
3. No need to search and replace across multiple files

## Future Considerations

- Consider adding more helper functions for specific use cases
- Could extend to include social media links, portfolio items, etc.
- Might want to add environment-specific configurations for different deployments
