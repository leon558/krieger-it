import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    colorMode: {
        classSuffix: "",
        preference: "system",
        fallback: "dark",
    },
    nitro: {
        preset: "cloudflare-pages",
    },
    css: ["@/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    router: {
        options: {
            scrollBehaviorType: "smooth",
        },
    },
    site: { 
        url: 'krieger.biz',
        name: 'Krieger IT Software & Solutions'
    }, 
    i18n: {
        vueI18n: "./i18n.config.ts",
        locales: [
            {
                code: "en",
                iso: "en-US",
                name: "English",
            },
            {
                code: "de",
                iso: "de-DE",
                name: "Deutsch",
            }
        ],
    },
    turnstile: {
        siteKey: "0x4AAAAAAA7jC_DbymdA6GZC",
    },
    modules: [
        "nitro-cloudflare-dev",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
        "@nuxtjs/turnstile",
        "@nuxtjs/sitemap",
        "@nuxtjs/robots",
    ],
});
