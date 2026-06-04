<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <!-- Hero Section -->
        <div class="relative py-16 overflow-hidden">

            <!-- Title Section -->
            <div class="container mx-auto px-4 text-center">
                <div class="relative inline-block animate-fade-in-up">
                    <h1 class="text-4xl md:text-6xl font-bold text-bleu_hover mb-4 relative">
                        LE CHAT
                        <div
                            class="absolute -z-10 inset-0 bg-gradient-to-r from-blue-200/30 to-blue-100/30 blur-3xl transform -skew-y-3">
                        </div>
                    </h1>
                </div>

                <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 animate-fade-in">
                    <div class="bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100">
                        <span class="text-lg text-gray-700">En cabinet: <span
                                class="font-bold text-bleu_hover">60€</span></span>
                    </div>
                    <div class="bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100">
                        <span class="text-lg text-gray-700">A domicile: <span
                                class="font-bold text-bleu_hover">70€</span></span>
                    </div>
                </div>

                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in">Motifs de consultation
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-16 animate-fade-in">
                    Pour les félins, les motifs de consultations sont nombreux. En voici une liste non exhaustive.
                </p>
            </div>
        </div>

        <!-- Content Section -->
        <div class="container mx-auto px-4 mb-24">
            <section
                class="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                <div class="space-y-6 animate-slide-in-left">
                    <h3 class="text-2xl font-bold text-bleu_hover flex items-center gap-2">
                        <span
                            class="w-8 h-8 bg-bleu_hover text-white rounded-full flex items-center justify-center text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                        A tout âge
                    </h3>
                    <div class="space-y-4">
                        <ul class="space-y-3 text-gray-600">
                            <li v-for="item in consultationItems" :key="item" class="flex items-start gap-2">
                                <svg class="w-5 h-5 text-bleu_hover flex-shrink-0 mt-1" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-gray-700 font-medium">
                                A partir de 2 mois, une séance tous les 6 mois.
                            </p>
                        </div>
                        <a href="/priseRdv"
                            class="inline-block bg-bleu hover:bg-bleu_hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
                            Prendre rendez-vous
                        </a>
                    </div>
                </div>
                <div class="relative animate-slide-in-right">
                    <img :src="imageSrcChat" alt="Chat" class="rounded-xl shadow-lg object-cover w-full h-[500px]" />
                    <div class="absolute -bottom-4 -right-4 w-20 h-20 text-bleu_hover opacity-10 transform rotate-45">
                        <svg viewBox="0 0 100 100">
                            <path
                                d="M30,45 C35,40 40,35 45,35 C50,35 55,40 60,45 M40,55 C45,50 50,45 55,45 C60,45 65,50 70,55 M50,65 C55,60 60,55 65,55 C70,55 75,60 80,65"
                                fill="none" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import chat from '../assets/images/chatPhoto.jpeg'

const imageSrcChat = ref(chat)

const consultationItems = ref([
    'Suite à un choc ou un stress',
    'Suite à accident: chute de balcon, accident de voiture, altercation avec un autre individu',
    'Changement d\'attitude inexpliqué',
    'Perte d\'appétit, troubles digestifs',
    'Perte de mobilité (ne saute plus correctement)',
    'Arthrose',
    'Boiterie (après contrôle vétérinaire)',
    'Post opératoire'
])
</script>

<style scoped>
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide-in-left {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-in-right {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in {
    animation: fade-in-up 0.6s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
}

.animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out forwards;
}

/* Hover effects */
.hover\:scale-105:hover {
    transform: scale(1.05);
}
</style>