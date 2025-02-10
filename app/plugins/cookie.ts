export default defineNuxtPlugin((nuxtApp) => {
    useHead({
        script: [
            {
                type: "text/javascript",
                src: "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js",
            },
            {
                type: "text/javascript",
                children: `document.addEventListener('DOMContentLoaded', function () {
                    cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"dark","language":"de","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Krieger IT","website_privacy_policy_url":"https://krieger.biz/imprint#privacy"});
                });`,
            },
            {
                async: true,
                type: "text/javascript",
                "data-cookie-consent": "tracking",
                src: "https://www.googletagmanager.com/gtag/js?id=G-PHD7KMVTSC",
            },
            {
                type: "text/plain",
                "data-cookie-consent": "tracking",
                children: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PHD7KMVTSC');`,
            },
        ],
    });
});
