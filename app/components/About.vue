<template>
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-6 text-foreground">
                    Technology Partnership Approach
                </h2>
                <p class="text-muted-foreground mb-8">
                    I align my expertise with your business goals through:
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
import { Rocket, ShieldCheck, Users } from 'lucide-vue-next'

const differentiators = [
    {
        title: 'Proven Methodologies',
        description: 'Agile development processes ensuring timely delivery',
        icon: Rocket
    },
    {
        title: 'Enterprise-grade Security',
        description: 'Security-first approach in all solutions',
        icon: ShieldCheck
    },
    {
        title: 'Client-Centric Approach',
        description: 'Dedicated partnership model for continuous success',
        icon: Users
    }
]
</script>