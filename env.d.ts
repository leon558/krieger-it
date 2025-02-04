/// <reference types="@cloudflare/workers-types/2023-07-01" />

declare module "h3" {
    interface H3EventContext {
        cf: CfProperties;
        cloudflare: {
            request: Request;
            env: {
                EMAIL_TO: string;
                EMAIL_FROM: string;
                RESEND_API_KEY: string;
                NUXT_TURNSTILE_SECRET_KEY: string;
            };
            context: ExecutionContext;
        };
    }
}

export {};
