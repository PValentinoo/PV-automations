# Mobile Setup Guide for PV Automation

This guide explains how to configure and troubleshoot the PV Automation contact form for mobile devices.

## Mobile-Specific Issues & Solutions

### 1. Localhost Access Problem

**Problem**: Mobile devices cannot access `localhost` URLs, causing the contact form to fail.

**Solution**: The system now automatically detects mobile devices and falls back to opening the user's email client.

### 2. CORS Issues on Mobile

**Problem**: Mobile browsers may have stricter CORS policies.

**Solution**: Enhanced CORS configuration in the webhook server with mobile-specific headers.

## Configuration

### Environment Variables

Update your `.env` file:

```env
# Webhook URL (for desktop/local development)
VITE_N8N_WEBHOOK_URL=http://localhost:5678/webhook/pvautomations-contact

# Maintenance mode (optional)
VITE_MAINTENANCE_MODE=false
```

**Note**: The system automatically uses your existing `personalInfo.email` from the config for fallback emails - no additional configuration needed!

### Mobile Detection

The system automatically detects mobile devices using:
- User agent detection
- Screen size detection
- Touch capability detection

## How It Works

### Desktop Flow
1. User submits form
2. Data sent to webhook server
3. Success/error response shown

### Mobile Flow
1. User submits form
2. System detects mobile device
3. If localhost webhook: automatically opens email client
4. If remote webhook: attempts webhook first, falls back to email client
5. User sends email manually

## Testing Mobile Functionality

### 1. Test on Actual Mobile Device

```bash
# Start your development server
npm run dev

# Start webhook server
node webhook-server.js

# Access from mobile device using your computer's IP address
# Example: http://192.168.1.100:8080
```

### 2. Test Mobile Endpoint

```bash
curl -X POST http://localhost:5678/mobile-test \
  -H "Content-Type: application/json" \
  -d '{"test": "mobile"}'
```

### 3. Simulate Mobile in Browser DevTools

1. Open DevTools (F12)
2. Click device toggle button
3. Select mobile device
4. Test form submission

## Troubleshooting

### Common Mobile Issues

#### 1. Form Not Submitting
- Check browser console for errors
- Verify mobile detection is working
- Check if fallback email opens

#### 2. CORS Errors
- Verify webhook server is running
- Check CORS configuration
- Test with mobile test endpoint

#### 3. Email Client Not Opening
- Check if `mailto:` links are blocked
- Verify email client is installed
- Test with different mobile browsers

### Debug Information

The system logs detailed information for debugging:

```javascript
// Check browser console for:
- Mobile device detection
- Webhook request details
- Fallback email triggers
- Error messages
```

### Network Issues

If mobile devices can't reach your development server:

1. **Use your computer's IP address** instead of localhost
2. **Check firewall settings** on your computer
3. **Verify network configuration** allows mobile devices
4. **Use ngrok** for external access during development

## Production Deployment

### For Production Use

1. **Replace localhost URLs** with your actual domain
2. **Use HTTPS** for all webhook endpoints
3. **Configure proper CORS** for your domain
4. **Set up email service** (SendGrid, AWS SES, etc.)

### Example Production Configuration

```env
VITE_N8N_WEBHOOK_URL=https://your-domain.com/webhook/pvautomations
VITE_FALLBACK_EMAIL_SERVICE=true
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

## Mobile-Specific Features

### 1. Automatic Fallback
- Detects mobile devices
- Automatically switches to email client
- Provides clear user instructions

### 2. Mobile-Optimized UI
- Touch-friendly form elements
- Mobile-specific warning banners
- Responsive design for all screen sizes

### 3. Enhanced Error Handling
- Mobile-specific error messages
- Graceful degradation
- User-friendly fallback options

## Best Practices

### 1. Always Test on Real Devices
- Emulators may not catch all issues
- Test on different mobile browsers
- Test on different screen sizes

### 2. Provide Clear User Feedback
- Show loading states
- Explain what's happening
- Provide alternative contact methods

### 3. Monitor and Log
- Track mobile vs desktop usage
- Log mobile-specific errors
- Monitor fallback email usage

## Support

For mobile-specific issues:

1. **Check browser console** for error messages
2. **Verify mobile detection** is working
3. **Test fallback email** functionality
4. **Check network connectivity** from mobile device
5. **Review CORS configuration** in webhook server

## Next Steps

Once mobile functionality is working:

1. **Add analytics** to track mobile usage
2. **Implement push notifications** for mobile users
3. **Add offline support** for mobile devices
4. **Optimize images** for mobile networks
5. **Add mobile-specific features** like touch gestures
