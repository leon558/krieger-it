<script setup lang="ts">
import Footer from './components/ui/footer/Footer.vue';
import Header from './components/ui/header/Header.vue';

useHead({
    title: 'Krieger IT',
    meta: [
        { name: 'description', content: '' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
})
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <Header />
        <div>
            <NuxtPage />
        </div>
        <Footer />
    </NuxtLayout>
</template>
