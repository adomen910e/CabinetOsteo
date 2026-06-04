<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <!-- Hero Section -->
        <div class="relative mt-[-64px]">
            <section class="relative h-[calc(100vh-64px)] w-full">
                <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), url(' + backAcceuil + ')'
        }"
    ></div>

                <div class="relative h-full flex text-center">
                    <div class="absolute left-8 md:left-16 bottom-8 md:top-16 max-w-xl animate-fade-in">
                        <div class="backdrop-blur-sm bg-creme/80 shadow-lg p-8 rounded-xl border border-noir/10 ">
                            <h2 class="text-4l md:text-4xl font-light text-noir/80 ">
                                Ostéopathe Animalier
                            </h2>
                            <h1 class="text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-noir">
                                Laurine Bourgeois
                            </h1>
                            <h2 class="text-xl md:text-2xl font-light mb-4 text-noir/80 ">
                                OA381
                            </h2>
                            <NuxtLink to="/priseRdv"
                                class="inline-block bg-[#47855A] hover:bg-[#3A6B48] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-base">
                                Prendre rendez-vous
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Section À propos de l'ostéopathie -->
        <section class="py-24">
            <div class="container mx-auto px-4">
                <div class="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="p-8 md:p-12 space-y-6">
                            <h2 class="text-3xl md:text-4xl font-bold text-[#47855A]">
                                Qu'est-ce que c'est ?
                            </h2>
                            <div class="prose prose-lg text-gray-600">
                                <p>{{ heroDescription }}</p>
                            </div>
                        </div>
                        <div class="relative h-[400px] md:h-auto">
                            <img :src="animalsImage" alt="Ostéopathie animale"
                                class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Types d'animaux -->
        <section class="py-24 bg-gray-50/50">
            <div class="container mx-auto px-4">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Pour quels types d'animaux ?
                    </h2>
                    <p class="text-lg text-gray-600">
                        Les consultations ostéopathiques s'effectuent sur toutes espèces d'animaux :
                        chien, cheval, chat, NAC, bovin.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div v-for="card in cards" :key="card.title"
                        class="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                        <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img :src="card.image" :alt="card.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ card.title }}</h3>
                            <p class="text-gray-600 mb-4">{{ card.description }}</p>
                            <NuxtLink :to="`/priseRdv?animal=${card.title}`"
                                class="block w-full bg-[#47855A] text-center text-white py-3 rounded-lg hover:bg-[#3A6B48] transition-all duration-300">
                                {{ card.buttonText }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Témoignages -->
        <section class="py-24">
            <Temoignages />
        </section>

        <!-- Section Localisation -->
        <section class="mb-20 bg-gray-50/50">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-10">
                    Où nous trouver ?
                </h2>

                <div class="grid md:grid-cols-2 gap-8 items-start">
                    <!-- Information Cards -->
                    <div class="space-y-6">
                        <div
                            class="bg-white p-8 rounded-xl border-2 border-[#47855A] shadow-lg transition-all duration-300 hover:shadow-xl">
                            <h3 class="text-2xl font-bold text-[#47855A] mb-6">Cabinet d'ostéopathie animale</h3>
                            <div class="space-y-10">
                                <div class="flex items-center gap-3">
                                    <svg class="w-6 h-6 text-[#47855A]" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p>4 rue Maurice François</p>
                                        <p class="text-gray-600">33160 st Médard En Jalles</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-6 h-6 text-[#47855A]" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p>07 70 30 99 41</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-6 h-6 text-[#47855A]" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:laubourgeois.osteo@gmail.com"
                                        class="text-[#47855A] hover:text-[#3A6B48]">
                                        laubourgeois.osteo@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>

                    <!-- Carte -->
                    <div class="h-[300px] rounded-xl overflow-hidden shadow-xl">
                        <iframe width="100%" height="100%"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20rue%20Maurice%20Fran%C3%A7ois%2033160%20st%20M%C3%A9dard%20En%20Jalles+(Cabinet%20d'ost%C3%A9opathie)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Temoignages from '../components/Temoignages.vue'

// Images
import dog from '../assets/images/dog1.png'
import cat from '../assets/images/cat1.png'
import horse from '../assets/images/horse1.png'
import animals from '../assets/images/Osteo.jpg'
import backAcceuil from '../assets/images/backAcceuil.jpg'

const animalsImage = ref(animals)

const heroDescription = ref(`Créée en 1874 par le Dr. Andrew Taylor Still elle est adaptée aux animaux en France par l'un des pionniers de la discipline le Dr. Dominique Giniaux dans les années 1980.
Elle est fondée sur des techniques manuelles appliquées sur des dysfonctions ostéopathiques trouvées grâce à la finesse du toucher du praticien. En effet, celui-ci effectue une palpation minutieuse de l'animal afin de déceler des zones de tensions, de densité anormale, des différences de température ou autres symptômes. De plus, il évalue la mobilité globale de l'organisme. L'attention est portée sur tous les tissus du corps : articulations, os, ligaments, muscles, viscères etc.
Les techniques ostéopathiques sont variées (structurelles, crâniennes, viscérales…) de ce fait chaque praticien possède sa façon d'exercer qui lui est propre, le but étant le même : redonner de la mobilité aux structures et permettre à l'organisme de pouvoir se rééquilibrer toujours en restant à l'écoute de l'animal.`)

const cards = ref([
    {
        title: 'Le chien',
        description: 'Cabinet: 60€ Domicile: 70€',
        image: dog,
        buttonText: 'Prendre rendez-vous'
    },
    {
        title: 'Le chat',
        description: 'Cabinet: 60€ Domicile: 70€',
        image: cat,
        buttonText: 'Prendre rendez-vous'
    },
    {
        title: 'Le cheval',
        description: 'Tarif: 90€',
        image: horse,
        buttonText: 'Prendre rendez-vous'
    }
])

// Pour résoudre l'avertissement des layouts
definePageMeta({
    layout: 'default'
})
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
}

.prose {
    max-width: 65ch;
}

.prose p {
    margin-bottom: 1.5em;
    line-height: 1.75;
}
</style>