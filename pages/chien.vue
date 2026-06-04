<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <!-- Hero Section -->
        <div class="relative py-16 overflow-hidden">
            <!-- Title Section -->
            <div class="container mx-auto px-4 text-center">
                <div class="relative inline-block animate-fade-in-up">
                    <h1 class="text-4xl md:text-6xl font-bold text-bleu_hover mb-4 relative">
                        LE CHIEN
                        <div class="absolute -z-10 inset-0 bg-gradient-to-r from-blue-200/30 to-blue-100/30 blur-3xl transform -skew-y-3"></div>
                    </h1>
                </div>
                
                <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 animate-fade-in">
                    <div class="bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100">
                        <span class="text-lg text-gray-700">En cabinet: <span class="font-bold text-bleu_hover">60€</span></span>
                    </div>
                    <div class="bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100">
                        <span class="text-lg text-gray-700">A domicile: <span class="font-bold text-bleu_hover">70€</span></span>
                    </div>
                </div>

                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in">Motifs de consultation</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-16 animate-fade-in">
                    Pour les canidés, les motifs de consultations sont nombreux. En voici une liste non exhaustive.
                </p>
            </div>
        </div>

        <!-- Content Sections -->
        <div class="container mx-auto px-4 space-y-24 mb-24">
            <!-- Section Chiot -->
            <section class="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                <div class="space-y-6 animate-slide-in-left">
                    <h3 class="text-2xl font-bold text-bleu_hover flex items-center gap-2">
                        <span class="w-8 h-8 bg-bleu_hover text-white rounded-full flex items-center justify-center text-sm">1</span>
                        Le CHIOT et le JEUNE CHIEN
                    </h3>
                    <div class="space-y-4">
                        <p class="text-lg text-gray-700">Dès 2 mois pour :</p>
                        <ul class="space-y-2 text-gray-600">
                            <li v-for="item in chiotItems" :key="item" class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-bleu_hover flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                {{ item }}
                            </li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-gray-700 font-medium">
                                De 2 mois à 1,5 ans : une séance tous les 4 mois.
                            </p>
                        </div>
                        <a href="/priseRdv" class="inline-block bg-bleu hover:bg-bleu_hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
                            Prendre rendez-vous
                        </a>
                    </div>
                </div>
                <div class="relative animate-slide-in-right">
                    <img :src="imageSrcChiot" alt="Chiot" class="rounded-xl shadow-lg object-cover w-full h-[400px]"/>
                    <div class="absolute -bottom-4 -right-4 w-20 h-20 text-bleu_hover opacity-10 transform rotate-45">
                        <svg viewBox="0 0 100 100">
                            <path d="M50 20c-3-5-9-8-14-8-9 0-16 7-16 16 0 9 7 16 16 16 5 0 11-3 14-8 3 5 9 8 14 8 9 0 16-7 16-16 0-9-7-16-16-16-5 0-11 3-14 8z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </section>

            <!-- Section Adulte -->
            <section class="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                <div class="order-2 md:order-1 relative animate-slide-in-left">
                    <img :src="imageSrcChien" alt="Chien adulte" class="rounded-xl shadow-lg object-cover w-full h-[400px]"/>
                    <div class="absolute -bottom-4 -left-4 w-20 h-20 text-bleu_hover opacity-10 transform -rotate-45">
                        <svg viewBox="0 0 100 100">
                            <path d="M50 20c-3-5-9-8-14-8-9 0-16 7-16 16 0 9 7 16 16 16 5 0 11-3 14-8 3 5 9 8 14 8 9 0 16-7 16-16 0-9-7-16-16-16-5 0-11 3-14 8z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <div class="order-1 md:order-2 space-y-6 animate-slide-in-right">
                    <h3 class="text-2xl font-bold text-bleu_hover flex items-center gap-2">
                        <span class="w-8 h-8 bg-bleu_hover text-white rounded-full flex items-center justify-center text-sm">2</span>
                        L'ADULTE
                    </h3>
                    <div class="space-y-4">
                        <p class="text-lg text-gray-700">A consulter lors de :</p>
                        <ul class="space-y-2 text-gray-600">
                            <li v-for="item in adulteItems" :key="item" class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-bleu_hover flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                {{ item }}
                            </li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-gray-700 font-medium">
                                De 1,5 à 6 ans : 2 consultations par an (tous les 6 mois)
                            </p>
                        </div>
                        <a href="/priseRdv" class="inline-block bg-bleu hover:bg-bleu_hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
                            Prendre rendez-vous
                        </a>
                    </div>
                </div>
            </section>

            <!-- Section Senior -->
            <section class="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                <div class="space-y-6 animate-slide-in-left">
                    <h3 class="text-2xl font-bold text-bleu_hover flex items-center gap-2">
                        <span class="w-8 h-8 bg-bleu_hover text-white rounded-full flex items-center justify-center text-sm">3</span>
                        Le SENIOR
                    </h3>
                    <div class="space-y-4">
                        <p class="text-lg text-gray-700">A consulter en cas :</p>
                        <ul class="space-y-2 text-gray-600">
                            <li v-for="item in seniorItems" :key="item" class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-bleu_hover flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                {{ item }}
                            </li>
                        </ul>
                        
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-gray-700 font-medium">
                                De 6 ans au plus tard possible pour l'accompagnement du sénior, je préconise 4 à 5 séances par an selon les besoins de votre chien.
                            </p>
                        </div>
                        <a href="/priseRdv" class="inline-block bg-bleu hover:bg-bleu_hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
                            Prendre rendez-vous
                        </a>
                    </div>
                </div>
                <div class="relative animate-slide-in-right">
                    <img :src="imageSrcSenior" alt="Chien senior" class="rounded-xl shadow-lg object-cover w-full h-[400px]"/>
                    <div class="absolute -bottom-4 -right-4 w-20 h-20 text-bleu_hover opacity-10 transform rotate-45">
                        <svg viewBox="0 0 100 100">
                            <path d="M50 20c-3-5-9-8-14-8-9 0-16 7-16 16 0 9 7 16 16 16 5 0 11-3 14-8 3 5 9 8 14 8 9 0 16-7 16-16 0-9-7-16-16-16-5 0-11 3-14 8z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import chiot from '../assets/images/chiot.jpg'
import chien from '../assets/images/chien.jpeg'
import senior from '../assets/images/chienSenior.jpeg'

const imageSrcChiot = ref(chiot)
const imageSrcChien = ref(chien)
const imageSrcSenior = ref(senior)

const chiotItems = ref([
    'Un premier bilan complet',
    'Problèmes intestinaux',
    'Défaut de locomotion',
    'Problème de descente testiculaire',
    'Suivi de croissance'
])

const adulteItems = ref([
    'Problème locomoteur, boiterie',
    'Difficulté au lever, raideur',
    'Baisse de performance',
    'Problème respiratoire (récupération difficile)',
    'Sensibilité au toucher',
    'Suite à un traumatisme, à un accident',
    'En contrôle préopératoire',
    'En suivi post-opératoire'
])

const seniorItems = ref([
    'D\'arthrose',
    'De difficulté au lever',
    'De problème de transit',
    'De problème locomoteur'
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