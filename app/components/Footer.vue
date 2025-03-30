<template>
    <footer class="bg-background border-t border-border text-foreground">
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <h3 class="text-lg font-bold text-primary mb-4">{{ t("info") }}</h3>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink :to="{ path: 'imprint', hash: '' }" class="hover:text-primary transition-colors">
                                {{ t('imprint') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path: 'imprint', hash: '#privacy' }"
                                class="hover:text-primary transition-colors">
                                {{ t('privacy') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="#" id="open_preferences_center">Cookies</a>
                        </li>
                    </ul>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-bold text-primary mb-4">{{ t("links") }}</h3>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink :to="{ path: '/', hash: '#home' }" class="hover:text-primary transition-colors">
                                {{ t('home') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path: '/', hash: '#about' }" class="hover:text-primary transition-colors">
                                {{ t('services') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path: '/', hash: '#tech' }" class="hover:text-primary transition-colors">
                                {{ t('tech') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path: '/', hash: '#contact' }"
                                class="hover:text-primary transition-colors">
                                {{ t('contact') }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-bold text-primary mb-4">{{ t("follow") }}</h3>
                    <ul class="flex space-x-4 justify-center">
                        <li>
                            <a href="https://www.linkedin.com/in/leon-krieger-97b046262/" target="_blank"
                                rel="noopener noreferrer"
                                class="text-muted-foreground hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6"
                                    fill="currentColor">
                                    <path
                                        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
                                    <path
                                        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
                                    <path
                                        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/leonkrieger17/" target="_blank" rel="noopener noreferrer"
                                class="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6" fill="currentColor">
                                    <g>
                                        <path
                                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                                        </path>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/leon558/" target="_blank" rel="noopener noreferrer"
                                class="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
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
            <div class="mt-8 text-center text-sm text-muted-foreground border-t border-border pt-4">
                <div class="flex items-center justify-center space-x-2">
                    <span>&copy; {{ new Date().getFullYear() }} Krieger IT</span>
                    <span class="text-primary">&bull;</span>
                    <span>{{ t('rights') }}</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' });
</script>

<i18n lang="json">{
    "en": {
        "home": "Home",
        "services": "Services",
        "tech": "Technologies",
        "contact": "Contact",
        "imprint": "Imprint",
        "privacy": "Privacy Policy",
        "info": "Info",
        "links": "Quick Links",
        "follow": "Follow Me",
        "rights": "All Rights Reserved."
    },
    "de": {
        "home": "Startseite",
        "services": "Dienstleistungen",
        "tech": "Technologien",
        "contact": "Kontakt",
        "imprint": "Impressum",
        "privacy": "Datenschutzerklärung",
        "info": "Info",
        "links": "Schnellzugriff",
        "follow": "Folge Mir",
        "rights": "Alle Rechte vorbehalten."
    }
}</i18n>