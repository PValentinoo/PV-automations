# PV Automations - Custom Solutions Consultation Website

This is a React-based website showcasing custom solutions consulting services. The website's purpose is to present the service's capabilities and encourage potential clients to book a consultation.

## Project Overview

Based on the PRD requirements, this website serves as the public face of a custom solutions consultancy. It highlights example projects, emphasizes innovation and approachability, and drives visitors to book a consultation.

## Features

- **Hero Section**: Prominent tagline "Selv små idéer kan skabe store forandringer – lad os tale sammen"
- **Examples/Portfolio**: Visual showcase of example custom solutions
- **Services**: Description of custom solutions offered
- **Contact Form**: Form to book consultations
- **Responsive Design**: Fully responsive on mobile and tablet
- **Danish Language**: All content in Danish as specified
- **Maintenance Mode**: Easy toggle to show maintenance page while working on the site

## Technology Stack

This project uses:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui components
- React Router for navigation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Maintenance Mode

The website includes a maintenance mode feature that allows you to easily display an "under maintenance" page while working on the site.

### Quick Toggle

**Windows (Batch):**
```bash
toggle-maintenance.bat
```

**Windows (PowerShell):**
```powershell
.\toggle-maintenance.ps1
```

### Manual Toggle

1. Edit the `.env` file
2. Set `VITE_MAINTENANCE_MODE=true` to enable maintenance mode
3. Set `VITE_MAINTENANCE_MODE=false` to disable maintenance mode
4. Restart your development server or redeploy

### Environment Variables

Create a `.env` file in the root directory with:
```env
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_RESEND_FROM_EMAIL=your_from_email@domain.com
VITE_RESEND_TO_EMAIL=your_to_email@domain.com
VITE_MAINTENANCE_MODE=false
```

**Note:** The project now supports both Resend API and n8n webhooks with automatic mobile fallback. See `EMAIL_SETUP.md` and `MOBILE_SETUP.md` for detailed configuration instructions.

## Development

The project structure follows a clean, organized approach:
- `/src/components/` - Reusable UI components
- `/src/pages/` - Page components
- `/src/lib/` - Utility functions
- `/src/hooks/` - Custom React hooks

## Deployment

This is a static site that can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Any web server

Build the project with `npm run build` and deploy the `dist` folder.

**Note:** When deploying, make sure to set the appropriate environment variables for your production environment, including the maintenance mode setting.
