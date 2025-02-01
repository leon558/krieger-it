<template>
    <main>
        <section id="home" class="pb-20 px-4 pt-38 -mt-18 bg-linear-to-b from-primary/80 to-background">
            <Hero />
        </section>
        <section id="about" class="-mt-18 pt-24 px-4 mb-20">
            <Services />
        </section>
        <section class="py-20 bg-muted">
            <About />
        </section>
        <section id="tech" class="-mt-18 pt-38 pb-20">
            <Tech />
        </section>
        <section id="contact" class="pt-18 -mt-18">
            <Contact />
        </section>
    </main>
</template>

<script setup lang="ts">

useRoute();

</script>