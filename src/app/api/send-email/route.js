import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  console.log(request)
  
  try {
    // const { firstName, lastName, email, phone, company, role, subject, projectDescription } = await request.json();
    const { formType, formData } = await request.json();
     // Different subject based on formType
    let subject = 'New Form Submission';
    if (formType === 'contact') subject = 'Contact Form';
    if (formType === 'contactPage') subject = 'Contact Page Form';
    if (formType === 'newsletter') subject = 'Newsletter Signup';

    // Build HTML dynamically
    const rows = Object.entries(formData)
      .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
      .join('');

    const msg = {
      to: process.env.CONTACT_RECEIVER,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      text: JSON.stringify(formData, null, 2),
      html: `
        <h2>${subject}</h2>
        <table border="1" cellpadding="5" cellspacing="0">
          ${rows}
        </table>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
