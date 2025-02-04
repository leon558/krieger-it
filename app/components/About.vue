<template>
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-6 text-foreground">
                    {{ t("text") }}
                </h2>
                <p class="text-muted-foreground mb-8">
                    {{ t("subtext") }}
                </p>
                <div class="space-y-6">
                    <div v-for="point in differentiators" :key="point.title" class="flex">
                        <div class="mr-4">
                            <component :is="point.icon" class="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                            <h3 class="font-semibold mb-2">{{ point.title }}</h3>
                            <p class="text-muted-foreground">{{ point.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-card p-8 rounded-xl shadow-lg">
                <img src="@/assets/img/partnership.svg" alt="Technology collaboration" class="w-full h-auto" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Rocket, ShieldCheck, Users } from 'lucide-vue-next'

const { t } = useI18n({ useScope: 'local' });

const differentiators = computed(() => {
    return [
    {
        title: t("methods"),
        description: t("methods2"),
        icon: Rocket
    },
    {
        title: t("security"),
        description: t("security2"),
        icon: ShieldCheck
    },
    {
        title: t("client"),
        description: t("client2"),
        icon: Users
    }
]})
</script>

<i18n lang="json">{
    "en": {
        "text": "Technology Partnership Approach",
        "subtext": "I align my expertise with your business goals through:",
        "methods": "Proven Methodologies",
        "methods2": "Agile development processes ensuring timely delivery",
        "security": "Enterprise-grade Security",
        "security2": "Security-first approach in all solutions",
        "client": "Client-Centric Approach",
        "client2": "Dedicated partnership model for continuous success"
    },
    "de": {
        "text": "Kooperative Technologielösungen",
        "subtext": "Ich bringe mein Know-how in Einklang mit Ihren Zielen:",
        "methods": "Bewährte Methoden",
        "methods2": "Agile Entwicklungsprozesse für eine termingerechte Lieferung",
        "security": "Höchste Sicherheitsstandards",
        "security2": "Sicherheitsorientierter Ansatz in allen Lösungen",
        "client": "Kundenorientierter Ansatz",
        "client2": "Engagiertes Partnerschaftsmodell für nachhaltigen Erfolg"
    }
}</i18n>