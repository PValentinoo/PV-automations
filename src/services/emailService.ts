export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  timestamp: string;
  source: string;
}

// Mobile detection utility
const isMobileDevice = (): boolean => {
  // Check user agent
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'windows phone'];
  
  // Check screen size
  const isSmallScreen = window.innerWidth <= 768;
  
  // Check touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return mobileKeywords.some(keyword => userAgent.includes(keyword)) || isSmallScreen || hasTouch;
};

// Create mailto link for fallback
const createMailtoLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent('Ny henvendelse fra PV Automation hjemmeside');
  const body = encodeURIComponent(`
Ny henvendelse modtaget:

👤 Navn: ${formData.name}
📧 Email: ${formData.email}
🏢 Virksomhed: ${formData.organization || 'Ikke angivet'}
💬 Besked: ${formData.message}
⏰ Tidspunkt: ${new Date(formData.timestamp).toLocaleString('da-DK')}
🌐 Kilde: ${formData.source}

---
Denne besked blev sendt fra PV Automation hjemmesiden.
  `);
  
  return `mailto:philipchristiansen1@gmail.com?subject=${subject}&body=${body}`;
};

// Try to send via Resend API first (if configured)
const tryResendAPI = async (formData: ContactFormData): Promise<boolean> => {
  const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;
  const fromEmail = import.meta.env.VITE_RESEND_FROM_EMAIL;
  const toEmail = import.meta.env.VITE_RESEND_TO_EMAIL;
  
  if (!resendApiKey || !fromEmail || !toEmail) {
    console.log('Resend API not configured, skipping...');
    return false;
  }
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: 'Ny henvendelse fra PV Automation hjemmeside',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Ny henvendelse modtaget</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>👤 Navn:</strong> ${formData.name}</p>
              <p><strong>📧 Email:</strong> ${formData.email}</p>
              <p><strong>🏢 Virksomhed:</strong> ${formData.organization || 'Ikke angivet'}</p>
              <p><strong>💬 Besked:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
              <p><strong>⏰ Tidspunkt:</strong> ${new Date(formData.timestamp).toLocaleString('da-DK')}</p>
              <p><strong>🌐 Kilde:</strong> ${formData.source}</p>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              Denne besked blev sendt fra PV Automation hjemmesiden.
            </p>
          </div>
        `,
      }),
    });
    
    if (response.ok) {
      console.log('Email sent successfully via Resend API');
      return true;
    } else {
      console.log('Resend API failed, falling back to webhook...');
      return false;
    }
  } catch (error) {
    console.log('Resend API error, falling back to webhook:', error);
    return false;
  }
};

// Try to send via n8n webhook
const tryWebhook = async (formData: ContactFormData): Promise<boolean> => {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log('Webhook URL not configured, skipping...');
    return false;
  }
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('Message sent successfully via webhook:', result);
      return true;
    } else {
      console.log('Webhook failed, status:', response.status);
      return false;
    }
  } catch (error) {
    console.log('Webhook error:', error);
    return false;
  }
};

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  console.log('Starting email sending process...');
  console.log('Form data:', formData);
  
  const isMobile = isMobileDevice();
  console.log('Device type:', isMobile ? 'Mobile' : 'Desktop');
  
  // Try Resend API first (most reliable)
  const resendSuccess = await tryResendAPI(formData);
  if (resendSuccess) {
    return;
  }
  
  // Try webhook if Resend failed
  const webhookSuccess = await tryWebhook(formData);
  if (webhookSuccess) {
    return;
  }
  
  // If both failed, handle based on device type
  if (isMobile) {
    console.log('Mobile device detected, opening email client as fallback...');
    
    // Create and open mailto link
    const mailtoLink = createMailtoLink(formData);
    
    // Try to open email client
    try {
      window.location.href = mailtoLink;
      
      // Show success message for mobile fallback
      throw new Error('MOBILE_FALLBACK_EMAIL_CLIENT');
    } catch (error) {
      if (error === 'MOBILE_FALLBACK_EMAIL_CLIENT') {
        throw new Error('Email client opened. Please send the email manually.');
      }
      throw error;
    }
  } else {
    // Desktop fallback - show error message
    throw new Error('Kunne ikke sende besked. Prøv venligst igen eller kontakt mig direkte.');
  }
};
