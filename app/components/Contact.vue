<template>
    <div class="flex bg-primary w-full px-4 py-12 justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div class="col-span-1 text-primary-foreground flex flex-col justify-center">
                <h2 class="text-3xl font-bold mb-6 text-center">{{ t("text") }}</h2>
                <p class="text-lg text-center">
                    {{ t("text2") }}
                </p>
            </div>
            <form class="grid-cols-1 bg-card rounded-xl shadow-xl px-8 pt-8 pb-2" @submit.prevent="sendEmail">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- First Name -->
                    <div class="col-span-2 md:col-span-1">
                        <label for="first-name" class="block text-sm font-medium">
                            {{ t("surname") }}
                        </label>
                        <input type="text" id="first-name" autocomplete="given-name" v-model="email.surname"
                            class="mt-1 block w-full bg-input rounded outline-border" required>
                    </div>

                    <!-- Last Name -->
                    <div class="col-span-2 md:col-span-1">
                        <label for="last-name" class="block text-sm">
                            {{ t("name") }}    
                        </label>
                        <input type="text" id="last-name" autocomplete="family-name" v-model="email.name"
                            class="mt-1 block w-full bg-input rounded outline-border" required>
                    </div>

                    <!-- Email -->
                    <div class="col-span-2">
                        <label for="email" class="block text-sm">
                            {{ t("email") }}    
                        </label>
                        <input type="email" id="email" autocomplete="email" v-model="email.address"
                            class="mt-1 block w-full bg-input rounded outline-border" required>
                    </div>

                    <!-- Message -->
                    <div class="col-span-2">
                        <label for="message" class="block text-sm">{{ t("message") }}</label>
                        <textarea id="message" rows="10" v-model="email.message"
                            class="mt-1 block w-full bg-input rounded outline-border" required></textarea>
                    </div>
                    <!-- Submit Button -->
                    <div class="col-span-2">
                        <button type="submit"
                            class="w-full py-2 px-4 mb-2 border border-transparent shadow-sm text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                            <LoaderCircle v-if="status == 1" class="h-4 w-4 inline-block animate-spin" />
                            <span class="" v-else>{{ t("send") }}</span>
                        </button>
                        <div class="text-center text-sm"
                            :class="{ 'text-primary': status >= 0, 'text-red-500': status < 0 }">
                            <p :class="{ 'opacity-0': status == 0 }">{{ statusMessage }}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
const { t } = useI18n({ useScope: 'local' });

const status = ref(0);
const statusMessage = ref('ok');
const email = ref({
    surname: '',
    name: '',
    address: '',
    message: ''
})


const sendEmail = async () => {
    try {
        status.value = 1;
        statusMessage.value = "Message sending...";
        const response = await fetch('/api/email', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email.value)
        })
        if (response.status === 200) {
            status.value = 2;
            statusMessage.value = "Message sent!";
        } else {
            console.log(response); // Log for debugging, can be removed
            status.value = -1;
            statusMessage.value = "Message could not be sent!";
        }
    } catch (error) {
        console.log(error); // Log for debugging, can be removed
        status.value = -1;
        statusMessage.value = "Message could not be sent!";
    } finally {
        // Reset form after submission
        if (status.value >= 0) {
            email.value.surname = "";
            email.value.name = "";
            email.value.address = "";
            email.value.message = "";
        }
        // Clear status and statusMessage after 5 seconds
        setTimeout(() => {
            status.value = 0;
            statusMessage.value = "ok";
        }, 5000);
    }
}
</script>

<i18n lang="json">{
    "en": {
        "text": "Start Your Digital Transformation",
        "text2": "Let's discuss how I can elevate your technology infrastructure",
        "surname": "First Name",
        "name": "Last Name",
        "email": "Email Address",
        "message": "Message",
        "send": "Send Message"
    },
    "de": {
        "text": "Starten Sie Ihre digitale Transformation",
        "text2": "Lassen Sie uns gemeinsam Ihre IT-Infrastruktur optimieren!",
        "surname": "Vorname",
        "name": "Nachname",
        "email": "E-Mail-Adresse",
        "message": "Nachricht",
        "send": "Nachricht senden"
    }
}</i18n>