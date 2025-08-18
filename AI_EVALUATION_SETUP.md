# AI Project Evaluation Tool Setup Guide

## Overview
This guide will help you set up the new AI project evaluation tool on your PV Automation website. The tool allows customers to submit project descriptions and receive AI-generated evaluations through an n8n workflow.

## What's Been Added

### 1. Website Component
- **New dedicated component**: `AIProjectEvaluation.tsx` - completely separate from AboutSection
- **New section**: Added to the main page flow after the About section
- **Form features**: Textarea for project descriptions, submit button with loading states and success/error messages
- **Professional design**: Elegant dark theme with Danish text
- **Sends data to n8n webhook**

### 2. N8N Workflow
- New workflow file: `n8n-workflow-ai-project-evaluation.json`
- Webhook endpoint: `/webhook-test/projektbot`
- Integrates with OpenAI for AI-powered project analysis
- Sends evaluation results via email

### 3. Environment Variables
- Added `VITE_N8N_AI_EVALUATION_WEBHOOK_URL` to `.env`

### 4. Page Integration
- Component added to `src/pages/Index.tsx` after AboutSection
- Creates logical flow: About → AI Evaluation → Contact

## Setup Steps

### Step 1: Import N8N Workflow
1. Open your n8n instance
2. Go to Workflows → Import from file
3. Select `n8n-workflow-ai-project-evaluation.json`
4. The workflow will be imported but inactive

### Step 2: Configure OpenAI Credentials
1. In the imported workflow, click on the "OpenAI Chat" node
2. Click on the credentials field
3. Create new OpenAI credentials with your API key
4. Save the credentials

### Step 3: Configure Email Node (Optional)
1. Add an email node after "Prepare Email" if you want to send evaluations
2. Configure with your email service (Gmail, SMTP, etc.)
3. Connect it between "Prepare Email" and "Success Response"

### Step 4: Activate Workflow
1. Click the "Activate" button in the workflow
2. Copy the webhook URL from the webhook node
3. Update the URL in your `.env` file if needed

### Step 5: Test the Tool
1. Go to your website and navigate to the AI Project Evaluation section
2. Fill out the project description form
3. Submit and check if the webhook receives the data
4. Verify that AI evaluation is generated and sent

## Component Structure

### File Organization
```
src/
├── components/
│   ├── AboutSection.tsx          # Original about section (restored)
│   ├── AIProjectEvaluation.tsx   # New AI evaluation tool
│   └── ...
├── pages/
│   └── Index.tsx                 # Main page with all sections
└── ...
```

### Section Flow
1. **HeroSection** - Main introduction
2. **ExamplesSection** - Showcase of work
3. **ServicesSection** - Services offered
4. **AboutSection** - About you and your company
5. **AIProjectEvaluation** - AI tool for project analysis ⭐ **NEW**
6. **ContactSection** - Contact information

## Workflow Features

### AI Analysis
- Uses GPT-4 for intelligent project evaluation
- Provides structured analysis in Danish
- Covers: project analysis, challenges, automation suggestions, ROI estimates

### Data Processing
- Extracts project description, timestamp, and source
- Generates professional AI prompts
- Handles errors gracefully

### Response Handling
- Returns success/error messages to the website
- Logs all submissions for review
- Can be extended with additional automation

## Customization Options

### Modify AI Prompt
Edit the "Prepare AI Prompt" node to change:
- Analysis structure
- Language (currently Danish)
- Specific focus areas
- Response length

### Add More Automation
Consider adding:
- Database storage of evaluations
- Slack/Teams notifications
- CRM integration
- Follow-up scheduling

### Email Templates
Customize the email format in "Prepare Email" node:
- Subject line format
- Email body structure
- Recipient lists

## Troubleshooting

### Common Issues
1. **Webhook not receiving data**: Check if workflow is active
2. **OpenAI errors**: Verify API key and credits
3. **Email not sending**: Check email node configuration
4. **Website errors**: Verify webhook URL in environment variables

### Testing
- Use n8n's built-in testing tools
- Check browser console for errors
- Monitor n8n execution logs
- Test with simple project descriptions first

## Security Considerations

### Data Privacy
- Project descriptions are processed by OpenAI
- Consider adding data retention policies
- Implement user consent if needed
- Review OpenAI's data usage policies

### Rate Limiting
- Consider adding rate limiting to prevent spam
- Monitor webhook usage
- Set appropriate OpenAI rate limits

## Support
If you encounter issues:
1. Check n8n execution logs
2. Verify all credentials are correct
3. Test webhook endpoints independently
4. Review browser console for frontend errors

---

**Note**: This tool is now completely separate from the About section and provides a dedicated space for AI-powered project evaluation. It's designed to provide value to potential customers while generating leads for your business. The AI evaluations can serve as conversation starters for follow-up consultations.
