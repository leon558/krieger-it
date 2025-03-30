<template>
    <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span v-for="(letter, index) in splitText" :key="index" 
                  :class="{ 'text-primary': index <= currentLetterIndex }"
                  class="transition-colors duration-100">
                {{ letter }}
            </span>
        </h1>
        <p class="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            {{ t("subtext") }}
        </p>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' });
const currentLetterIndex = ref(-1);
const splitText = computed(() => t('text').split(''));

const startReadingEffect = () => {
    currentLetterIndex.value = -1;
    const interval = setInterval(() => {
        if (currentLetterIndex.value < splitText.value.length - 1) {
            currentLetterIndex.value++;
        } else {
            clearInterval(interval);
            setTimeout(startReadingEffect, 2000); // Restart after 2 seconds
        }
    }, 50); // Change letter color every 50ms
};

onMounted(() => {
    startReadingEffect();
});
</script>

<i18n lang="json">
{
    "en": {
        "text": "Transforming Ideas into Digital Solutions",
        "subtext": "Full-service technology partner specializing in custom software development and IT services"
    },
    "de": {
        "text": "Von der Idee zur digitalen Lösung",
        "subtext": "Ihr Full-Service-Technologiepartner mit Spezialisierung auf maßgeschneiderte Softwareentwicklung und IT-Dienstleistungen"
    }
}
</i18n>