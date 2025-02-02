import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { surname, name, address, message } = body;
    console.log(body);
    
    if (!surname || !name || !address || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: "Surname, name, email, and message are required!",
        });
    }
    try {
        const transporter = nodemailer.createTransport({
            host: event.context.cloudflare.env.EMAIL_HOST,
            port: Number(event.context.cloudflare.env.EMAIL_PORT),
            secure: event.context.cloudflare.env.EMAIL_SECURE != 'false', // true for port 465, false for other ports
            auth: {
                user: event.context.cloudflare.env.EMAIL_USER,
                pass: event.context.cloudflare.env.EMAIL_PASS,
            },
        } as SMTPTransport.Options);
        
        const mailOptions = {
            from: event.context.cloudflare.env.EMAIL_USER,
            to: event.context.cloudflare.env.EMAIL_TO,
            subject: `Kontaktanfrage von ${surname} ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return "Email sent successfully.";
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: "Error sending Email",
        });
    }
});
