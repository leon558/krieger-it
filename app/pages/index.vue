<script setup lang="ts">

const route = useRoute();

</script>

<template>
    <main class="bg-background text-foreground">
        <!-- Hero Section -->
        <section class="py-20">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-6xl font-bold text-primary mb-4">
                    Welcome to Krieger IT
                </h1>
                <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Empowering your business with cutting-edge software solutions, tailored to meet your needs.
                </p>
                <NuxtLink to="/contact"
                    class="bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition">
                    Get Started
                </NuxtLink>
            </div>
        </section>

        <!-- About Section -->
        <section class="py-16 bg-muted">
            <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-primary mb-4">About Us</h2>
                    <p class="text-muted-foreground mb-6">
                        At Krieger IT, we specialize in delivering software solutions that drive innovation and
                        efficiency. With years of experience in the tech industry, we provide customized solutions for
                        businesses of all sizes.
                    </p>
                    <NuxtLink to="/about" class="text-primary hover:underline">
                        Learn more about us &rarr;
                    </NuxtLink>
                </div>
                <img alt="About Krieger IT" class="rounded-lg shadow-lg w-full" />
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-16">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-8">Our Services</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Service 1 -->
                    <div class="p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                        <h3 class="text-xl font-bold text-primary mb-4">Custom Software Development</h3>
                        <p class="text-muted-foreground">
                            Build software tailored specifically for your business needs, ensuring scalability and
                            reliability.
                        </p>
                    </div>
                    <!-- Service 2 -->
                    <div class="p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                        <h3 class="text-xl font-bold text-primary mb-4">IT Consulting</h3>
                        <p class="text-muted-foreground">
                            Expert guidance to optimize your IT infrastructure and streamline your workflows.
                        </p>
                    </div>
                    <!-- Service 3 -->
                    <div class="p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                        <h3 class="text-xl font-bold text-primary mb-4">Web Development</h3>
                        <p class="text-muted-foreground">
                            Create stunning, responsive websites that provide exceptional user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-16 bg-muted">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-8">What Our Clients Say</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Testimonial 1 -->
                    <div class="p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                        <p class="text-muted-foreground italic">
                            “Krieger IT transformed our business with a custom CRM solution. Highly recommend their
                            expertise!”
                        </p>
                        <h4 class="text-primary font-bold mt-4">- John Doe, CEO</h4>
                    </div>
                    <!-- Testimonial 2 -->
                    <div class="p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                        <p class="text-muted-foreground italic">
                            “Their IT consulting saved us countless hours and optimized our operations.”
                        </p>
                        <h4 class="text-primary font-bold mt-4">- Jane Smith, CTO</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="py-16 bg-primary text-primary-foreground text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Level Up Your Business?</h2>
            <p class="text-lg md:text-xl mb-8">
                Let Krieger IT handle your software and IT needs so you can focus on growing your business.
            </p>
            <NuxtLink to="/contact"
                class="bg-background text-primary py-3 px-6 rounded-lg hover:bg-background/90 transition">
                Contact Us Today
            </NuxtLink>
        </section>
    </main>
</template>