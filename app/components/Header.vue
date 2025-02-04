<template>
    <header class="sticky top-0 z-50 border-b bg-background text-foreground">
        <div class="relative">
            <!-- Mobile Menu Toggle -->
            <button @click="toggleMenu"
                class="p-3 absolute top-0 h-full md:hidden hover:text-primary transition-colors cursor-pointer">
                <Menu />
            </button>
            <div class="container mx-auto flex items-center justify-center md:justify-between px-4 py-3">
                <!-- Logo -->
                <div class="text-2xl font-bold text-primary">
                    <a href="/">
                        <img src="@/assets/img/logo.svg" alt="Krieger IT" class="h-12" />
                    </a>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center space-x-6">
                    <NuxtLink :to="{ path: '/', hash: '#home' }" class="hover:text-primary transition-colors">
                        {{ t('home') }}
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#about' }" class="hover:text-primary transition-colors">
                        {{ t('services') }}
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#tech' }" class="hover:text-primary transition-colors">
                        {{ t('tech') }}
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#contact' }" class="hover:text-primary transition-colors">
                        {{ t('contact') }}
                    </NuxtLink>
                </nav>

                <!-- Actions: Theme & Language Selector -->
                <div class="md:flex items-center hidden">
                    <button @click="toogleLanguage"
                        class="px-2 py-1 rounded-lg hover:text-primary transition-colors cursor-pointer">
                        <template v-if="locale == 'de'">
                            <div class="flex items-center space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" class="!size-6">
                                    <rect width="6" height="1" fill="black" />
                                    <rect width="6" height="1" y="1" fill="red" />
                                    <rect width="6" height="1" y="2" fill="yellow" />
                                </svg>
                                <p>DE</p>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex items-center space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="!size-6">
                                    <clipPath id="s">
                                        <path d="M0,0 v30 h60 v-30 z" />
                                    </clipPath>
                                    <clipPath id="t">
                                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                                    </clipPath>
                                    <g clip-path="url(#s)">
                                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
                                        <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E"
                                            stroke-width="4" />
                                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
                                    </g>
                                </svg>
                                <p>EN</p>
                            </div>
                        </template>

                    </button>

                    <!-- Dark/Light Mode Toggle -->
                    <button @click="toogleDarkMode"
                        class="px-2 py-1 rounded-lg hover:text-primary transition-colors cursor-pointer">
                        <ColorScheme placeholder="..." tag="span">
                            <span v-if="colorMode.value === 'light'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" />
                                </svg>
                            </span>
                            <span v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525zM12 12" />
                                </svg>
                            </span>
                        </ColorScheme>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Nav -->
        <div v-if="isMenuOpen" class="md:hidden bg-background text-foreground shadow-md border-t border-border">
            <div class="flex flex-col items-center space-y-4 py-4">
                <NuxtLink :to="{ path: '/', hash: '#home' }" class="hover:text-primary transition-colors"
                    @click="closeMenu">
                    {{ t('home') }}
                </NuxtLink>
                <NuxtLink :to="{ path: '/', hash: '#about' }" class="hover:text-primary transition-colors"
                    @click="closeMenu">
                    {{ t('services') }}
                </NuxtLink>
                <NuxtLink :to="{ path: '/', hash: '#tech' }" class="hover:text-primary transition-colors"
                    @click="closeMenu">
                    {{ t('tech') }}
                </NuxtLink>
                <NuxtLink :to="{ path: '/', hash: '#contact' }" class="hover:text-primary transition-colors"
                    @click="closeMenu">
                    {{ t('contact') }}
                </NuxtLink>
            </div>
            <div class="flex justify-center pb-2">
                <button @click="toogleLanguage"
                    class="px-2 py-1 rounded-lg hover:text-primary transition-colors cursor-pointer">
                    <template v-if="locale == 'de'">
                        <div class="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" class="!size-6">
                                <rect width="6" height="1" fill="black" />
                                <rect width="6" height="1" y="1" fill="red" />
                                <rect width="6" height="1" y="2" fill="yellow" />
                            </svg>
                            <p>DE</p>
                        </div>
                    </template>
                    <template v-else>
                        <div class="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="!size-6">
                                <clipPath id="s">
                                    <path d="M0,0 v30 h60 v-30 z" />
                                </clipPath>
                                <clipPath id="t">
                                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                                </clipPath>
                                <g clip-path="url(#s)">
                                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
                                    <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E"
                                        stroke-width="4" />
                                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
                                </g>
                            </svg>
                            <p>EN</p>
                        </div>
                    </template>

                </button>

                <!-- Dark/Light Mode Toggle -->
                <button @click="toogleDarkMode"
                    class="px-2 py-1 rounded-lg hover:text-primary transition-colors cursor-pointer">
                    <ColorScheme placeholder="..." tag="span">
                        <span v-if="colorMode.value === 'light'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" />
                            </svg>
                        </span>
                        <span v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525zM12 12" />
                            </svg>
                        </span>
                    </ColorScheme>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const colorMode = useColorMode();
const { t } = useI18n({ useScope: 'local' });
const { locale, setLocale } = useI18n();

const isMenuOpen = ref(false);
const language = ref(1); // 0 = en, 1 = de

defineExpose({
    isMenuOpen
})

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
    isMenuOpen.value = false;
};

const toogleLanguage = () => {
    if (locale.value != 'de') {
        setLocale('de')
    } else {
        setLocale('en')
    }
}

const toogleDarkMode = () => {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>


<i18n lang="json">{
    "en": {
        "home": "Home",
        "services": "Services",
        "tech": "Technologies",
        "contact": "Contact"
    },
    "de": {
        "home": "Startseite",
        "services": "Dienstleistungen",
        "tech": "Technologien",
        "contact": "Kontakt"
    }
}</i18n>