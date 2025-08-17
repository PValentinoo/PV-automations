# N8N Webhook Setup Guide for PV Automation

This guide explains how to set up the n8n webhook integration for the PV Automation contact form.

## Prerequisites

- An n8n instance (local, cloud, or self-hosted)
- The webhook URL from your n8n workflow

## Configuration

### 1. Environment Variables

Update your `.env` file in the project root with your n8n webhook URL:

```env
VITE_N8N_WEBHOOK_URL=http://localhost:5678/webhook/pvautomations-contact
```

### 2. Example Webhook URLs

- **Local n8n**: `http://localhost:5678/webhook/pvautomations-contact`
- **n8n Cloud**: `https://your-workspace.n8n.cloud/webhook/pvautomations-contact`
- **Self-hosted**: `https://your-domain.com/webhook/pvautomations-contact`

## N8N Workflow Setup

### 1. Import the Workflow

1. Open your n8n instance
2. Go to **Workflows** → **Import from file**
3. Upload the `n8n-workflow-contact-form.json` file
4. Activate the workflow

### 2. Webhook Configuration

The workflow includes:
- **Webhook Node**: Receives POST requests at `/pvautomations-contact`
- **Extract Contact Data**: Processes the form submission
- **Prepare Email**: Formats the data for notifications
- **Success Response**: Sends confirmation back to the website

### 3. Contact Form Data Structure

The application sends the following JSON data to the webhook:

```json
{
  "name": "User's Name",
  "email": "user@example.com",
  "organization": "Company Name",
  "message": "Project description...",
  "timestamp": "2025-01-20T10:30:00.000Z",
  "source": "PV Automation Website"
}
```

## Customizing the Workflow

### 1. Add Email Notifications

To send email notifications when forms are submitted:

1. Add an **Email Send** node after "Prepare Email"
2. Configure with your email service (Gmail, SMTP, etc.)
3. Use the prepared email data:
   - **Subject**: `{{ $json.subject }}`
   - **Body**: `{{ $json.emailBody }}`
   - **To**: Your email address

### 2. Add Database Storage

To store submissions in a database:

1. Add a **Database** node (MySQL, PostgreSQL, etc.)
2. Insert the contact form data
3. Use the extracted data from "Extract Contact Data"

### 3. Add Slack/Discord Notifications

To send notifications to team channels:

1. Add a **Slack** or **Discord** node
2. Format the message using the prepared data
3. Send to your desired channel

### 4. Add CRM Integration

To create leads in your CRM:

1. Add your CRM's API node (HubSpot, Salesforce, etc.)
2. Use the contact form data to create new contacts/leads
3. Map the fields appropriately

## Testing

### 1. Local Development

1. Start your n8n instance:
   ```bash
   n8n start
   ```

2. Configure your webhook URL in `.env`:
   ```env
   VITE_N8N_WEBHOOK_URL=http://localhost:5678/webhook/pvautomations-contact
   ```

3. Start your PV Automation website:
   ```bash
   npm run dev
   ```

4. Test the contact form

### 2. Webhook Testing

Test the webhook endpoint using curl:

```bash
curl -X POST http://localhost:5678/webhook/pvautomations-contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "organization": "Test Company",
    "message": "This is a test message",
    "timestamp": "2025-01-20T10:30:00.000Z",
    "source": "PV Automation Website"
  }'
```

## Workflow Execution

When someone submits the contact form:

1. **Webhook receives** the POST request with form data
2. **Data is extracted** and formatted
3. **Email is prepared** with all contact information
4. **Success response** is sent back to the website
5. **Additional actions** can be triggered (emails, notifications, CRM updates, etc.)

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your n8n instance allows requests from your frontend domain
2. **Environment Variables**: Make sure the `.env` file has the correct variable name (`VITE_N8N_WEBHOOK_URL`)
3. **Workflow Activation**: Ensure the n8n workflow is activated
4. **Webhook Path**: Verify the webhook path matches in both n8n and your .env file

### Debug Mode

Enable debug logging by checking:
- **Browser console** for webhook request details
- **N8N execution logs** for workflow processing
- **Network tab** in browser dev tools for request/response

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Authentication**: Consider adding authentication to your webhook endpoint
3. **Rate Limiting**: Implement rate limiting to prevent abuse
4. **Data Validation**: Validate incoming data in your n8n workflow

## Next Steps

Once the basic workflow is working, consider adding:

- **Email notifications** to your team
- **CRM integration** for lead management
- **Analytics tracking** of form submissions
- **Automated follow-up** sequences
- **File upload handling** if needed in the future

## Support

For issues with:
- **Frontend**: Check the browser console and network tab
- **N8N**: Check the n8n execution logs and workflow status
- **Webhook**: Test the endpoint directly with curl or Postman
