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
    i18n: {
        vueI18n: "./i18n.config.ts",
    },
    turnstile: {
        siteKey: "1x00000000000000000000AA",
    },
    modules: [
        "nitro-cloudflare-dev",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
        "@nuxtjs/turnstile",
    ],
});
