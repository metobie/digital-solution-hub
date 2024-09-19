// This is a placeholder for the email service implementation
// In a real-world scenario, you would use a backend service to handle email sending

import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, text) => {
  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: 'your-smtp-host.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password'
    }
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Renew I/O" <info@renewio.se>',
    to: to,
    subject: subject,
    text: text,
    html: `<b>${text}</b>` // html body
  });

  console.log('Message sent: %s', info.messageId);
}

// Example usage in a backend route:
/*
import express from 'express';
import { sendEmail } from './emailService.js';

const app = express();

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    await sendEmail(
      'your-email@renewio.se',
      'New Contact Form Submission',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
*/