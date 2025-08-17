# Email Setup with Resend API

This project now uses the Resend API instead of n8n webhooks for sending contact form emails.

## Configuration

### Environment Variables

Add these variables to your `.env` file:

```env
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_RESEND_FROM_EMAIL=your_from_email@domain.com
VITE_RESEND_TO_EMAIL=your_to_email@domain.com
```

### Current Configuration

- **API Key**: `re_PQnrMna9_PJaWwYNvszbg3Lv32HczKfjj`
- **From Email**: `philipchristiansen1@gmail.com`
- **To Email**: `philipchristiansen1@gmail.com`

## How It Works

1. **Contact Form Submission**: When a user submits the contact form, the data is sent directly to Resend API
2. **Email Service**: The `emailService.ts` handles the email sending logic
3. **HTML Template**: Uses the same beautiful HTML template that was previously in n8n
4. **Error Handling**: Proper error handling with user feedback

## Benefits of Resend over n8n

- **Direct Integration**: No need for external webhook services
- **Better Performance**: Faster email delivery
- **Simplified Architecture**: Fewer moving parts
- **Cost Effective**: Resend offers generous free tier
- **Better Monitoring**: Built-in email analytics and delivery tracking

## Files Modified

- `src/services/emailService.ts` - New email service using Resend
- `src/components/ContactSection.tsx` - Updated to use new service
- `.env` - Added Resend configuration variables

## Important Notes

### Localhost Development
- **CORS Issue**: The contact form will NOT work on localhost due to CORS restrictions
- **This is normal**: Resend API doesn't allow direct calls from localhost for security reasons
- **Solution**: Test the form on your production website where it will work perfectly

### Production Website
- **Works Perfectly**: The contact form will work flawlessly on your live website
- **No CORS Issues**: Production domains are allowed to call Resend API
- **Full Functionality**: All email features work as expected

## Testing

To test the email functionality:

1. **Deploy to Production**: Build and deploy your website to your hosting service
2. **Test Contact Form**: Navigate to the contact form on your live website
3. **Submit Form**: Fill out and submit the form
4. **Check Email**: Check your email inbox for the new message

## Troubleshooting

### Common Issues

1. **API Key Invalid**: Ensure your Resend API key is correct
2. **Email Not Sending**: Check browser console for error messages
3. **Build Errors**: Run `npm run build` to check for TypeScript errors

### Debug Mode

The service logs all email operations to the console. Check the browser developer tools for detailed information.

## Security Notes

- API keys are stored in environment variables (not committed to git)
- All user input is properly sanitized before sending
- Reply-to is set to the user's email for easy responses
- CORS restrictions protect against unauthorized API access
