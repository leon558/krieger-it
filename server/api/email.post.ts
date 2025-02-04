import { Resend } from "resend";
import { defineEventHandler, readBody } from "h3";

export interface TurnstileValidationResponse {
    success: boolean;
    hostname: string;
    errorCodes: any[];
    challenge_ts?: string;
    action?: string;
    cdata?: string;
}

export default defineEventHandler(async (event) => {
    const endpoint =
        "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const body = await readBody(event);
    const { surname, name, address, message, token } = body;

    if (!surname || !name || !address || !message || !token) {
        throw createError({
            statusCode: 400,
            statusMessage:
                "Surname, name, email, message and token are required!",
        });
    }

    const tokenValid : TurnstileValidationResponse = await $fetch(endpoint, {
        method: "POST",
        body: `secret=${encodeURIComponent(event.context.cloudflare.env.NUXT_TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(token)}`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
    });

    if (!tokenValid.success) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid token!",
        });
    }

    const resend = new Resend(event.context.cloudflare.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
        from: event.context.cloudflare.env.EMAIL_FROM,
        to: event.context.cloudflare.env.EMAIL_TO,
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
    return "Email sent successfully.";
});
