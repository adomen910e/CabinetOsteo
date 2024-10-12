<template>
    <div class="m-20">
        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center text-bleu_hover">Le chien</h1>

        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center">Motifs de consultation</h1>
        <p class="text-xs md:text-xl text-pretty  mb-20 text-center">Pour les canidés, les motifs de consultations sont
            nombreux. En voici une liste non exhaustive.</p>

        <div class="md:mr-60 md:ml-60">
            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 m-10"> <!-- Réduit le padding -->
                    <h1 class="text-l md:text-2xl font-bold mb-6">Le CHIOT et le JEUNE CHIEN :</h1>
                    <p class="text-sm md:text-lg mb-2">Dès 2 mois pour :</p>
                    <ul class="list-disc list-inside text-sm md:text-lg ml-6 mb-6">
                        <li>un premier bilan complet</li>
                        <li>problèmes intestinaux</li>
                        <li>défaut de locomotion</li>
                        <li>problème de descente testiculaire</li>
                        <li>suivi de croissance</li>
                    </ul>
                    <p class="text-sm md:text-lg mb-6">De 2 mois à 1,5 ans : une séance tous les 4 mois.</p>
                    <a :href="buttonLink"
                        class="bg-bleu hover:bg-bleu_hover text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ">
                        Prendre rendez-vous
                    </a>
                </div>
                <div class="w-full md:w-1/2 flex justify-center"> <!-- Ajout de flex et justify-center -->
                    <img :src="imageSrcChiot" alt="Hero Image" class="object-cover w-full h-auto  md:h-full" />
                </div>
            </section>

            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 flex justify-center"> <!-- Ajout de flex et justify-center -->
                    <img :src="imageSrcChien" alt="Hero Image" class="object-cover  w-full h-auto md:h-full" />
                </div>
                <div class="w-full md:w-1/2 ml-28"> <!-- Réduit la marge -->
                    <h1 class="text-l md:text-2xl font-bold mb-6">L’ADULTE :</h1>
                    <p class="text-sm md:text-lg mb-2">Dès 2 mois pour :</p>
                    <ul class="list-disc list-inside ml-6 text-sm md:text-lg mb-6">
                        <li>un premier bilan complet</li>
                        <li>problèmes intestinaux</li>
                        <li>défaut de locomotion</li>
                        <li>problème de descente testiculaire</li>
                        <li>suivi de croissance</li>
                    </ul>
                    <p class="text-sm md:text-lg mb-6">De 2 mois à 1,5 ans : une séance tous les 4 mois.</p>
                    <a :href="buttonLink"
                        class="bg-bleu hover:bg-bleu_hover text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ">
                        Prendre rendez-vous
                    </a>
                </div>
            </section>

            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 m-10"> <!-- Réduit la marge -->
                    <h1 class="text-l md:text-2xl font-bold mb-6">Le SENIOR :</h1>
                    <p class="text-sm md:text-lg mb-4">A consulter en cas :</p>
                    <ul class="list-disc list-inside text-sm md:text-lg ml-6 mb-6">
                        <li>d’arthrose</li>
                        <li>de difficulté au lever</li>
                        <li>de problème de transit</li>
                        <li>de problème locomoteur</li>
                    </ul>
                    <p class="text-sm md:text-lg mb-6">
                        De 6 ans au plus tard possible pour l’accompagnement du sénior, je préconise 4 à 5 séances par
                        an
                        selon les besoins de votre chien.
                    </p>
                    <a :href="buttonLink"
                        class="bg-bleu hover:bg-bleu_hover text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ">
                        Prendre rendez-vous
                    </a>
                </div>
                <div class="w-full md:w-1/2 flex justify-center"> <!-- Ajout de flex et justify-center -->
                    <img :src="imageSrcSenior" alt="Hero Image" class="object-cover  w-full h-auto  md:h-full" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import chiot from '../assets/images/chiot.jpg';
import chien from '../assets/images/chien.jpeg';
import senior from '../assets/images/chienSenior.jpeg';

export default {
    name: 'Chien',
    props: {
        imageSrcChiot: {
            type: String,
            default: chiot,
        },
        imageSrcChien: {
            type: String,
            default: chien,
        },
        imageSrcSenior: {
            type: String,
            default: senior,
        },
        buttonLink: {
            type: String,
            default: '/priseRdv',
        },
    },
};
</script>

<style scoped></style>