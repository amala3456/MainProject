const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Define the Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'amalajames1995@gmail.com',
    pass: 'tgow osei qypj ryaq',
  },
});

// Define the route to handle sending emails
router.post('/email', async (req, res) => {
  try {
    const { email } = req.body;

    // Define email options
    const mailOptions = {
      from: 'amalajames1995@gmail.com',
      to: email,
      subject: 'Test email for nodemailer',
      html: '<h1>Hello Nodemailer</h1>',
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    // Send response
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

module.exports = router;
