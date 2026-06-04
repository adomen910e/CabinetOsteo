<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <!-- Hero Section -->
        <div class="relative py-16 overflow-hidden">
            <!-- Title Section -->
            <div class="container mx-auto px-4 text-center">
                <div class="relative inline-block animate-fade-in-up">
                    <h1 class="text-4xl md:text-6xl font-bold text-[#47855A] mb-4 relative">
                        LE CHEVAL
                        <div class="absolute -z-10 inset-0 bg-gradient-to-r from-blue-200/30 to-blue-100/30 blur-3xl transform -skew-y-3"></div>
                    </h1>
                </div>
                
                <div class="flex justify-center items-center gap-4 mb-8 animate-fade-in">
                    <div class="bg-white px-8 py-3 rounded-full shadow-lg border border-blue-100">
                        <span class="text-lg text-gray-700">A domicile: <span class="font-bold text-[#47855A]">90€</span></span>
                    </div>
                </div>

                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in">Motifs de consultation</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-16 animate-fade-in">
                    Pour les équidés, les motifs de consultations sont nombreux. En voici une liste non exhaustive.
                </p>
            </div>
        </div>

        <!-- Content Sections -->
        <div class="container mx-auto px-4 space-y-24 mb-24">
            <!-- Section Poulain -->
            <section class="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                <div class="space-y-6 animate-slide-in-left">
                    <h3 class="text-2xl font-bold text-[#47855A] flex items-center gap-2">
                        <span class="w-8 h-8 bg-[#47855A] text-white rounded-full flex items-center justify-center text-sm">1</span>
                        Le POULAIN et le JEUNE CHEVAL
                    </h3>
                    <div class="space-y-4">
                        <ul class="space-y-3 text-gray-600">
                            <li v-for="item in poulainItems" :key="item" class="flex items-start gap-2">
                                <svg class="w-5 h-5 text-[#47855A] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-gray-700 font-medium">
                                De 6 mois à 5 ans, une séance tous les 6 mois.
                            </p>
                        </div>
                        <a href="/priseRdv" class="inline-block bg-[#47855A] hover:bg-[#3A6B48] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
                            Prendre rendez-vous
                        </a>
                    </div>
                </div>
                <div class="relative animate-slide-in-right">
                    <img :src="imageSrcPoulain" alt="Poulain" class="rounded-xl shadow-lg object-cover w-full h-[400px]"/>
                </div>
            </section>

            <!-- Section Adulte -->
            <section class="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                <div class="order-2 md:order-1 relative animate-slide-in-left">
                    <img :src="imageSrcCheval" alt="Cheval adulte" class="rounded-xl shadow-lg object-cover w-full h-[400px]"/>
                </div>
                <div class="order-1 md:order-2 space-y-6 animate-slide-in-right">
                    <h3 class="text-2xl font-bold text-[#47855A] flex items-center gap-2">
                        <span class="w-8 h-8 bg-[#47855A] text-white rounded-full flex items-center justify-center text-sm">2</span>
                        L'ADULTE
                    </h3>
                    <div class="space-y-4">
                        <ul class="space-y-3 text-gray-600">
                            <li v-for="item in adulteItems" :key="item" class="flex items-start gap-2">
                                <svg class="w-5 h-5 text-[#47855A] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-gray-700 font-medium">
                                De 5 ans jusqu'à l'âge de sa retraite, selon l'intensité de l'activité sportive, cela peut varier d'une séance tous les 6 mois à une séance tous les 4 mois.
                            </p>
                        </div>
                        <a href="/priseRdv" class="inline-block bg-[#47855A] hover:bg-[#3A6B48] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
                            Prendre rendez-vous
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import poulain from '../assets/images/poulain.jpeg'
import cheval from '../assets/images/cheval.jpeg'

const imageSrcPoulain = ref(poulain)
const imageSrcCheval = ref(cheval)

const poulainItems = ref([
    'Suivi de croissance',
    'Défaut d\'aplomb',
    'Boiterie après consultation vétérinaire'
])

const adulteItems = ref([
    'Baisse de performance',
    'Raideur inhabituelle',
    'Baisse de moral',
    'Comportement anormal lors du pansage, du sanglage, lors de la mise en place de l\'harnachement, cheval qui n\'accepte pas le mors, etc.',
    'Chute, choc, stress important, cheval qui tire au renard…',
    'A l\'obstacle : cheval qui touche les barres, mauvaise articulation du saut, attitude anormale à la réception…',
    'Cheval qui trébuche régulièrement',
    'Problème au niveau de l\'engagement',
    'Boiterie (suite à un contrôle vétérinaire uniquement)'
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