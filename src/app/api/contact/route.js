import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.NOTIFICATION_EMAIL || 'anusripvc202@gmail.com';

    if (!user || !pass) {
      console.warn('SMTP credentials are not configured in environment variables. Skipping email send.');
      return NextResponse.json({ success: true, warning: 'SMTP unconfigured' });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `"BubblesMedia Leads" <${user}>`,
      to: toEmail,
      subject: `New Lead Enquiry from ${name}`,
      text: `
New lead details submitted on BubblesMedia contact form:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message/Request:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; color: #1e293b;">
          <h2 style="color: #4f46e5; margin-top: 0;">New Lead Enquiry Received!</h2>
          <p style="font-size: 14px; margin-bottom: 20px;">A user has submitted the contact form on BubblesMedia:</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a></td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.5; border-left: 4px solid #4f46e5;">
            <strong>Message details:</strong><br/>
            <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;"/>
          <p style="font-size: 11px; color: #94a3b8; margin: 0; text-align: center;">This is an automated lead notification from your website.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Nodemailer send failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
