<template>
    <footer class="bg-background border-t border-border text-foreground">
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Column 1: About -->
                <div>
                    <h3 class="text-lg font-bold text-primary mb-4">About Me</h3>
                    <p class="text-muted-foreground">
                        I’m a freelance software developer specializing in building fast, scalable, and user-friendly
                        web applications. Let’s work together to bring your ideas to life!
                    </p>
                </div>

                <!-- Column 2: Navigation -->
                <div>
                    <h3 class="text-lg font-bold text-primary mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="hover:text-primary transition-colors">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/portfolio" class="hover:text-primary transition-colors">Portfolio</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services" class="hover:text-primary transition-colors">Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Column 3: Social Media -->
                <div>
                    <h3 class="text-lg font-bold text-primary mb-4">Connect with Me</h3>
                    <ul class="flex space-x-4">
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                                class="text-muted-foreground hover:text-accent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                                class="text-muted-foreground hover:text-accent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zm-5 16h4v-6h-4zm-7-18h5v18h-5zm2.5-7C3 3.57 3.57 4 4.5 4s1.5-.43 1.5-1S5.43 2 4.5 2 3 .43 3 1.5zm0 5h-4v18h4V6z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                                class="text-muted-foreground hover:text-accent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.62-4.04-1.62-.54-1.34-1.33-1.7-1.33-1.7-1.09-.76.1-.74.1-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.9a4.6 4.6 0 011.2-3.2c-.12-.3-.52-1.56.1-3.24 0 0 1-.33 3.3 1.26a11.5 11.5 0 016 0c2.3-1.59 3.3-1.26 3.3-1.26.62 1.68.22 2.94.1 3.24a4.6 4.6 0 011.2 3.2c0 4.57-2.8 5.6-5.48 5.9.44.38.82 1.12.82 2.26v3.35c0 .33.22.7.83.58A12 12 0 0012 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-8 text-center text-sm text-muted-foreground">
                &copy; {{ new Date().getFullYear() }} Your Name. All Rights Reserved.
            </div>
        </div>
    </footer>
</template>

<script setup>
// Dynamically generate the current year
</script>