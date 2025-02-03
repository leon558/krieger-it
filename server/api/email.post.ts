import { Resend } from "resend";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { surname, name, address, message } = body;

    if (!surname || !name || !address || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: "Surname, name, email, and message are required!",
        });
    }

    const resend = new Resend(event.context.cloudflare.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
        from: 'info@contact.krieger.biz',
        to: 'info@krieger.biz',
        subject: `Kontaktanfrage von ${surname} ${name} - ${address}`,
        html: message + `<br/><br/>${surname} ${name}<br/>${address}`,
        text: message + `\n${surname} ${name}\n${address}`,
    });
    if (error) {
        console.log(error);
        throw createError({
            statusCode: 500,
            statusMessage: "Error sending Email",
        });
    }
    console.log(data);
    return "Email sent successfully.";
});
