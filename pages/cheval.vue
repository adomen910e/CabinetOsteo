<template>
    <div class="m-20">
        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center text-blue-600">Le cheval</h1>

        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center">Motifs de consultation</h1>
        <p class="text-xs md:text-xl text-pretty  mb-20 text-center">Pour les équidés, les motifs de consultations sont nombreux. En voici dans une liste non exhaustive.</p>

        <div class="md:mr-60 md:ml-60">
            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 m-10"> <!-- Réduit le padding -->
                    <h1 class="text-l md:text-2xl font-bold mb-6">Le poulain et le jeune cheval :</h1>
                    <ul class="list-disc list-inside text-sm md:text-lg ml-6 mb-6">
                        <li>Suivi de croissance,</li>
                        <li>Défaut d’aplomb,</li>
                        <li>Boiterie après consultation vétérinaire.</li>
                    </ul>
                    <p class="text-sm md:text-lg mb-6">De 6 mois à 5 ans, une séance tous les 6 mois.</p>
                    <a :href="buttonLink"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ">
                        Prendre rendez-vous
                    </a>
                </div>
                <div class="w-full md:w-1/2 flex justify-center"> <!-- Ajout de flex et justify-center -->
                    <img :src="imageSrcPoulain" alt="Hero Image" class="object-cover w-full h-auto  md:h-full" />
                </div>
            </section>

            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 flex justify-center"> <!-- Ajout de flex et justify-center -->
                    <img :src="imageSrcCheval" alt="Hero Image" class="object-cover  w-full h-auto md:h-full" />
                </div>
                <div class="w-full md:w-1/2 ml-28"> <!-- Réduit la marge -->
                    <h1 class="text-l md:text-2xl font-bold mb-6">L’ADULTE :</h1>
                    <ul class="list-disc list-inside ml-6 text-sm md:text-lg mb-6">
                        <li>Baisse de performance,</li>
                        <li>raideur inhabituelle,</li>
                        <li>baisse de moral</li>
                        <li>Comportement anormal lors du pansage, du sanglage, lors de la mise en place de l’harnachement, cheval qui n’accepte pas le mors, etc.</li>
                        <li>Chute, choc, stress important, cheval qui tire au renard…</li>
                        <li>A l’obstacle : cheval qui touche les barres, mauvaise articulation du saut, attitude anormale à la réception…</li>
                        <li>Cheval qui trébuche régulièrement,</li>
                        <li>problème au niveau de l’engagement,</li>
                        <li>Boiterie (suite à un contrôle vétérinaire uniquement),</li>
                        <li> Etc.</li>
                    </ul>
                    <p class="text-sm md:text-lg mb-6">De 2 mois à 1,5 ans : une séance tous les 4 mois.</p>
                    <a :href="buttonLink"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ">
                        Prendre rendez-vous
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import poulain from '../assets/images/poulain.jpeg';
import cheval from '../assets/images/cheval.jpeg';

export default {
    name: 'Cheval',
    props: {
        imageSrcPoulain: {
            type: String,
            default: poulain,
        },
        imageSrcCheval: {
            type: String,
            default: cheval,
        },
        buttonLink: {
        type: String,
        default: '/priseRdv',
      },
    },
};
</script>

<style scoped>
</style>
