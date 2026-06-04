<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50/50 to-white py-16">
        <!-- Hero Section -->
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-center text-[#47855A] mb-16 animate-fade-in">
                QUI SUIS-JE ?
            </h1>

            <!-- Parcours Section -->
            <section class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24 animate-slide-in">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Mon parcours</h2>
                    <div class="prose prose-lg text-gray-600 space-y-4 text-justify">
                        <p>Cavalière depuis l’âge de 5 ans et amoureuse des animaux depuis toujours. J’ai souhaité dans ma vie professionnelle conjuguer santé/bien-être et animaux, j’ai donc cherché une formation me permettant d’allier les deux. </p>
                        <p>C’est pourquoi, après mon cursus général, je me suis engagée dans une formation continue d’ostéopathe animalier. Durant ces années j’étudie les différentes techniques ostéopathiques structurelles, viscérales et crâniennes. Je sors diplômée en 2015 et me lance dans ce métier passion. De plus, au cours de plusieurs stages, je développe de nouvelles approches notamment en ostéopathie tissulaire (principes de Pierre Tricot) mais également sur les hélices fasciales et la FTM (Patrick Chêne), les techniques réflexes (Jean Perronneau) etc. Les techniques évoluant, mon objectif sera d’approfondir sans cesse mon savoir afin de pouvoir apporter à nos animaux un plus grand nombre de méthodes adaptées à chacun.</p>
                            <p>En 2020, après 5 années de métier, je valide l’examen tout juste mis en place par l’ordre national des vétérinaires permettant d’exercer légalement mon métier en étant inscrite au registre national des personnes non vétérinaires pratiquant l’ostéopathie sous le matricule OA381.</p>
                                <p>En 2024, après 8 ans de pratique à domicile j’ouvre un cabinet dédié à la pratique de l’ostéopathie animale dans ma ville d’origine, St Médard en Jalles.</p>
                        
                    </div>
                </div>
                <div class="relative">
                    <img :src="imageSrcProfile" alt="Profile" class="rounded-xl shadow-xl object-cover w-full h-[500px]"/>
                    <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                        <p class="text-[#47855A] font-bold">8+ ans d'expérience</p>
                    </div>
                </div>
            </section>

            <!-- Déroulement Section -->
            <section class="max-w-7xl mx-auto mb-24 animate-slide-in-delayed">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Déroulement d'une séance</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(step, index) in seanceSteps" 
                         :key="index"
                         class="bg-white p-6 rounded-xl shadow-lg border border-[#47855A]/20 hover:shadow-xl transition-shadow">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="w-10 h-10 bg-[#47855A] text-white rounded-full flex items-center justify-center font-bold">
                                {{ index + 1 }}
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800">{{ step.title }}</h3>
                        </div>
                        <p class="text-gray-600">{{ step.description }}</p>
                    </div>
                </div>
            </section>

            <!-- Important Information -->
            <section class="max-w-7xl mx-auto space-y-8 animate-slide-in-delayed">
                <div class="bg-blue-50 p-8 rounded-xl border border-blue-100">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Durée des séances</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="font-semibold text-[#47855A]">Cheval</p>
                            <p>45 minutes en moyenne</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="font-semibold text-[#47855A]">Chien / Chat</p>
                            <p>30 minutes en moyenne</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Quand faire appel ?</h3>
                    <p class="text-gray-700 mb-4">L'ostéopathie se pratique tout autant sur un animal sain que sur un animal présentant des gènes et ce peu importe son âge.</p>
                    <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                        <p class="text-red-700 font-bold">⚠️ Attention</p>
                        <p class="text-red-600">Si votre animal présente de fortes douleurs, faites appel à votre vétérinaire traitant ou aux urgences vétérinaires en première intention !</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import chat from '../assets/images/Lau.jpg'

const imageSrcProfile = ref(chat)

const seanceSteps = ref([
    {
        title: "Anamnèse",
        description: "Échange avec le propriétaire pour comprendre l'historique et les besoins de l'animal"
    },
    {
        title: "Examen dynamique",
        description: "Observation de la démarche et repérage des signes éventuels de dysfonction"
    },
    {
        title: "Palpation",
        description: "Examen minutieux et mobilisations articulaires pour identifier les restrictions"
    },
    {
        title: "Normalisation",
        description: "Correction des restrictions identifiées"
    },
    {
        title: "Compte-rendu",
        description: "Remise d'un document détaillant les dysfonctions trouvées et la rééducation à suivre"
    },
    {
        title: "Suivi",
        description: "Temps de repos et rééducation adaptés pour un rééquilibrage optimal de l'organisme"
    }
])
</script>

<style scoped>
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slide-in {
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

.animate-slide-in {
    animation: slide-in 0.6s ease-out forwards;
}

.animate-slide-in-delayed {
    animation: slide-in 0.6s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
}

.prose p {
    margin-bottom: 1rem;
    line-height: 1.7;
}
</style>