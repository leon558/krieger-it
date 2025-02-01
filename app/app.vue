<script setup lang="ts">

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
        <Header></Header>
        <div>
            <NuxtPage />
        </div>
        <Footer></Footer>
    </NuxtLayout>
</template>
