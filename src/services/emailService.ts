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
  
  // Try webhook first
  const webhookSuccess = await tryWebhook(formData);
  if (webhookSuccess) {
    return;
  }
  
  // If webhook failed, handle based on device type
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
    throw new Error('Kunne ikke sende besked via webhook. Prøv venligst igen eller kontakt mig direkte.');
  }
};
