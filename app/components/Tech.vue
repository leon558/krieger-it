<template>
    <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-foreground">
            {{ t("text") }}
        </h2>
        <div class="flex flex-wrap justify-center gap-12">
            <img v-for="tech in technologies" :key="tech" :src="`/assets/img/techLogos/${tech}.svg`" :alt="tech"
                class="h-12 m-1 opacity-90 hover:opacity-100 hover:h-14 hover:m-0 transition-all">
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' });

const technologies = [
    'aws', 'gcp', 'docker', 'kubernetes',
    'nodejs', 'python', 'react', 'vue', 'javascript', 'typescript',
    'sqlserver', 'mysql', 'cloudflare', 'java', 'php'
]
</script>

<i18n lang="json">{
    "en": {
        "text": "Technologies I Master"
    },
    "de": {
        "text": "Kompetenzen & Technologien"
    }
}</i18n>