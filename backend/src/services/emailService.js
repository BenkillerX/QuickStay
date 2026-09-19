import nodemailer from "nodemailer";
console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);
console.log("SMTP USER:", process.env.SMTP_USER);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


export const sendVerificationEmail = async (email, code) => {
    await transporter.sendMail({
       from: `"GreenSpringHomes" <devben289@gmail.com>`,
        to: email,
        subject: "Verify your GreenSpringHomes email",
        text: `Your GreenSpringHomes verification code is ${code}. This code expires in 10 minutes.`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
                <h2>Verify your GreenSpringHomes email</h2>

                <p>Thank you for creating an account with GreenSpringHomes.</p>

                <p>Your verification code is:</p>

                <h1 style="letter-spacing: 8px;">${code}</h1>

                <p>This code expires in <strong>10 minutes</strong>.</p>

                <p>If you did not create this account, you can ignore this email.</p>
            </div>
        `,
    });
};