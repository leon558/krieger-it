<template>
    <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            {{ global?.title }}
        </h1>
        <p class="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            {{ t("subtext") }}
        </p>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' });
const { $directus, $readSingleton } = useNuxtApp()

const { data: global } = await useAsyncData('global', () => {
    return $directus.request($readSingleton('global'))
})

</script>

<i18n lang="json">{
    "en": {
        "text": "Transforming Ideas into Digital Solutions",
        "subtext": "Full-service technology partner specializing in custom software development and IT services"
    },
    "de": {
        "text": "Von der Idee zur digitalen Lösung",
        "subtext": "Ihr Full-Service-Technologiepartner mit Spezialisierung auf maßgeschneiderte Softwareentwicklung und IT-Dienstleistungen"
    }
}</i18n>