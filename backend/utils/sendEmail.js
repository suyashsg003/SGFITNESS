import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE, 
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.SMTP_MAIL, // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: `${options.message} \n\nEmail of User Who Sent the Message: ${options.userEmail}`, // plain text body
    };
    await transporter.sendMail(mailOptions);
};