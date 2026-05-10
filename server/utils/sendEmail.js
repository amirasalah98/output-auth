const nodemailer = require("nodemailer");

exports.sendEmail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
  port: 587,
  secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // send to yourself
    subject: "New Contact Form Message",
    html: `
      <h3>New Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `
  });
};
