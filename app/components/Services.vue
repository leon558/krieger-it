<template>
    <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16 text-foreground">
            {{ t("expertise") }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.title"
                class="bg-card border rounded-lg shadow-sm text-card-foreground transition-shadow">
                <div class="flex flex-col gap-y-3 p-6 items-center">
                    <component :is="service.icon" class="h-12 w-12 text-primary" />
                    <div class="text-2xl font-semibold leading-none tracking-tight text-center">{{ service.title
                        }}</div>
                </div>
                <div class="p-6 pt-0">
                    <p class="">{{ service.description }}</p>
                    <ul class="mt-4 space-y-2 text-sm text-foreground">
                        <li v-for="item in service.items" :key="item" class="flex items-center">
                            <CheckCircle2 class="h-4 w-4 mr-2 text-green-500" />
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CheckCircle2, Code2, ServerCog, BrainCircuit } from 'lucide-vue-next'
const { t } = useI18n({ useScope: 'local' });

const services = computed(() => {
    return [
    {
        title: t("software"),
        icon: Code2,
        description: t("software2"),
        items: [
            t("software3"),
            t("software4"),
            t("software5"),
            t("software6")
        ]
    },
    {
        title: t("services"),
        icon: ServerCog,
        description: t("services2"),
        items: [
            t("services3"),
            t("services4"),
            t("services5"),
            t("services6")
        ]
    },
    {
        title: t("consulting"),
        icon: BrainCircuit,
        description: t("consulting2"),
        items: [
            t("consulting3"),
            t("consulting4"),
            t("consulting5"),
            t("consulting6")
        ]
    }
]})
</script>

<i18n lang="json">{
    "en": {
        "expertise": "My Expertise",
        "software": "Software Development",
        "software2": "Tailored solutions that drive business growth",
        "software3": "Web & Mobile Applications",
        "software4": "API Development & Integration",
        "software5": "CI/CD Pipeline Implementation",
        "software6": "Cloud-native Development",
        "services": "Managed IT Services",
        "services2": "Comprehensive infrastructure management",
        "services3": "Network Management",
        "services4": "Cloud Solutions & Migration",
        "services5": "Cybersecurity Solutions",
        "services6": "24/7 System Monitoring",
        "consulting": "Strategic IT Consulting",
        "consulting2": "Technology roadmap development",
        "consulting3": "Digital Transformation Strategy",
        "consulting4": "Technology Audits",
        "consulting5": "Legacy System Modernization",
        "consulting6": "Scalability Planning"
    },
    "de": {
        "expertise": "Meine Expertise",
        "software": "Software Entwicklung",
        "software2": "Maßgeschneiderte Lösungen",
        "software3": "Web & Mobile Applikationen",
        "software4": "API Entwicklung & Integration",
        "software5": "CI/CD Pipeline Implementation",
        "software6": "Cloud-native Entwicklung",
        "services": "IT-Dienstleistungen",
        "services2": "Umfassendes Infrastrukturmanagement",
        "services3": "Netwerkmanagement",
        "services4": "Cloud Lösungen & Migration",
        "services5": "Cybersecurity Lösungen",
        "services6": "24/7 System Überwachung",
        "consulting": "Strategische IT Beratung",
        "consulting2": "Entwicklung von Technologie-Roadmaps",
        "consulting3": "Strategie zur digitalen Transformation",
        "consulting4": "Technologie Audits",
        "consulting5": "Modernisierung von Altsystemen",
        "consulting6": "Skalierungsplanung"
    }
}</i18n>