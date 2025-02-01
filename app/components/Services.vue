<template>
    <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16 text-foreground">
            My Expertise
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

const services = [
    {
        title: 'Software Development',
        icon: Code2,
        description: 'Tailored solutions that drive business growth',
        items: [
            'Web & Mobile Applications',
            'API Development & Integration',
            'Legacy System Modernization',
            'Cloud-native Development'
        ]
    },
    {
        title: 'Managed IT Services',
        icon: ServerCog,
        description: 'Comprehensive infrastructure management',
        items: [
            'Network Management',
            'Cloud Solutions & Migration',
            'Cybersecurity Solutions',
            '24/7 System Monitoring'
        ]
    },
    {
        title: 'Strategic IT Consulting',
        icon: BrainCircuit,
        description: 'Technology roadmap development',
        items: [
            'Digital Transformation Strategy',
            'Technology Audits',
            'CI/CD Pipeline Implementation',
            'Scalability Planning'
        ]
    }
]
</script>