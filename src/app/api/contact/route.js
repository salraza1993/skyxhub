import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  console.log(request)
  
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      role,
      subject,
      projectDescription
    } = await request.json();

    const msg = {
      to: process.env.CONTACT_RECEIVER,
      from: process.env.SENDGRID_FROM_EMAIL, // must be verified in SendGrid
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        From: ${firstName} ${lastName} <${email}>
        Phone: ${phone}
        Company: ${company}
        Role: ${role}
        Subject: ${subject}

        Message:
        ${projectDescription}
      `,
      html: `
        <h2>Contact Form Submission</h2>
        <table border="1" cellpadding="5" cellspacing="0">
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr><td>First Name</td><td>${firstName}</td></tr>
          <tr><td>Last Name</td><td>${lastName}</td></tr>
          <tr><td>Email</td><td>${email}</td></tr>
          <tr><td>Phone</td><td>${phone}</td></tr>
          <tr><td>Company</td><td>${company}</td></tr>
          <tr><td>Role</td><td>${role}</td></tr>
          <tr><td>Subject</td><td>${subject}</td></tr>
        </table>
        <p><strong>Message:</strong></p>
        <p>${projectDescription}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
