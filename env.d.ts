/// <reference types="@cloudflare/workers-types/2023-07-01" />

declare module "h3" {
    interface H3EventContext {
        cf: CfProperties;
        cloudflare: {
            request: Request;
            env: {
                EMAIL_HOST: string;
                EMAIL_PORT: string;
                EMAIL_SECURE: string;
                EMAIL_USER: string;
                EMAIL_PASS: string;
                EMAIL_TO: string;
            };
            context: ExecutionContext;
        };
    }
}

export {};
