import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  timestamp: string;
  source: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const fromEmail = import.meta.env.VITE_RESEND_FROM_EMAIL;
  const toEmail = import.meta.env.VITE_RESEND_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    throw new Error('Email configuration not found');
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="da">
    <head>
      <meta charset="UTF-8">
      <meta name="color-scheme" content="light only">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Ny besked</title>
    </head>
    <body style="margin:0;padding:0;background:#f6f7f9;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f7f9;">
        <tr>
          <td align="center" style="padding:24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;background:#ffffff;border:1px solid #eaeaea;border-radius:12px;">
              
              <!-- Header -->
              <tr>
                <td valign="top" style="padding:20px 28px 12px 28px;font:700 20px/1.3 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;">
                  Ny besked fra kontaktformularen
                </td>
              </tr>

              <!-- Details (Title on top) -->
              <tr>
                <td valign="top" style="padding:0 28px 8px 28px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td valign="top" style="width:160px;padding:6px 0;font:600 13px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#555;text-transform:uppercase;letter-spacing:.3px;">Title</td>
                      <td valign="top" style="padding:6px 0;font:400 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;">
                        ${escapeHtml(formData.name || '—')}
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" style="width:160px;padding:6px 0;font:600 13px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#555;text-transform:uppercase;letter-spacing:.3px;">Email</td>
                      <td valign="top" style="padding:6px 0;font:400 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;">
                        ${escapeHtml(formData.email || '—')}
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" style="width:160px;padding:6px 0;font:600 13px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#555;text-transform:uppercase;letter-spacing:.3px;">Virksomhed</td>
                      <td valign="top" style="padding:6px 0;font:400 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;">
                        ${escapeHtml(formData.organization || '—')}
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" style="width:160px;padding:6px 0;font:600 13px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#555;text-transform:uppercase;letter-spacing:.3px;">Sendt</td>
                      <td valign="top" style="padding:6px 0;font:400 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;">
                        ${formatTimestamp(formData.timestamp)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td valign="top" style="padding:6px 28px 24px 28px;">
                  <div style="font:600 13px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#555;text-transform:uppercase;letter-spacing:.3px;margin-bottom:8px;">
                    Besked
                  </div>
                  <div style="border:1px solid #eaeaea;border-radius:10px;padding:14px 16px;background:#fafafa;font:400 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;white-space:pre-wrap;text-align:left;">
                    ${escapeHtml(formData.message || '')}
                  </div>
                </td>
              </tr>

            </table>

            <div style="font:400 12px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#999;padding:10px 8px;">
              Denne besked er genereret automatisk.
            </div>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `Ny besked fra ${formData.name}`,
    html: htmlContent,
    replyTo: formData.email,
  });

  if (error) {
    console.error('Resend API error:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }

  console.log('Email sent successfully:', data);
};

// Helper function to escape HTML
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Helper function to format timestamp
const formatTimestamp = (timestamp: string): string => {
  try {
    const date = new Date(timestamp);
    return date.toLocaleString('da-DK', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Europe/Copenhagen'
    });
  } catch (error) {
    return 'Ukendt tidspunkt';
  }
};
