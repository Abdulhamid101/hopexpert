import 'dotenv/config';
import nodemailer from 'nodemailer';

const t = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

t.verify()
  .then(() => console.log('SMTP OK'))
  .catch((e) => console.error('VERIFY ERROR:', e?.message));

t.sendMail({
  from: process.env.MAIL_FROM,     // must be a verified sender in SendGrid
  to: process.env.MAIL_TO,
  subject: 'Hopexpert mail test',
  text: 'If you see this, SMTP works.',
})
.then(() => console.log('SENT'))
.catch((e) => {
  console.error('SEND ERROR:', e?.message);
  if (e?.response) console.error('RESP:', e.response);
});
