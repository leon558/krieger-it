
<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <Header ref="header"></Header>
        <div @click="checkMenu">
            <NuxtPage />
        </div>
        <Footer></Footer>
    </NuxtLayout>
</template>

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

const headerRef = useTemplateRef('header')

const checkMenu = ($event : Event) => {
    if(headerRef.value?.isMenuOpen) {
        headerRef.value.isMenuOpen = false;
    }
}
</script>
