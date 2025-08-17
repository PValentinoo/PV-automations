export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  timestamp: string;
  source: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // Get webhook URL from environment variable
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
  
  if (!webhookUrl) {
    throw new Error('N8N Webhook URL not configured');
  }

  // Send form data to webhook
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  const result = await response.json();
  console.log('Message sent successfully via n8n:', result);
};
