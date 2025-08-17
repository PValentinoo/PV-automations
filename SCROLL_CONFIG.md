# Scroll Offset Configuration

## Overview
This project now uses a centralized scroll offset configuration for all smooth scrolling functionality.

## How to Change the Scroll Offset

To change the scroll offset for all buttons, links, and navigation items, simply edit the value in:

```
src/config/scroll.ts
```

**Current value:** `-30`

**Previous value:** `-20`

## What This Affects

The scroll offset is automatically applied to all components that use smooth scrolling:

- **Footer component** - "Book konsultation" button and all "Hurtige links" (Eksempler, Ydelser, Om, Kontakt)
- **HeroSection component** - "Book en gratis konsultation" and "Se eksempler" buttons  
- **ServicesSection component** - "Kontakt mig i dag" button
- **Navigation component** - All navigation links and "Book konsultation" buttons

## How It Works

1. The `SCROLL_OFFSET` constant is defined in `src/config/scroll.ts`
2. All smooth scroll functions import this value as their default offset
3. Components no longer need to specify the offset manually
4. Changing one value updates the scroll behavior across the entire application

## Example

```typescript
// Before (hardcoded values)
onClick={() => smoothScrollToNative('kontakt', -20)}

// After (uses centralized config)
onClick={() => smoothScrollToNative('kontakt')}
```

## Benefits

- ✅ **Single source of truth** - Change one value to update everything
- ✅ **Consistent behavior** - All scroll actions use the same offset
- ✅ **Easy maintenance** - No need to search and replace multiple files
- ✅ **Better UX** - Consistent scroll positioning across the site
