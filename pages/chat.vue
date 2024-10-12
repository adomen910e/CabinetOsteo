<template>
    <div class="m-20">
        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center text-bleu_hover">Le chat</h1>

        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center">Motifs de consultation</h1>
        <p class="text-xs md:text-xl text-pretty  mb-20 text-center">Pour les félins, les motifs de consultations sont nombreux. En voici dans une liste non exhaustive.</p>

        <div class="md:mr-60 md:ml-60">
            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 m-10"> <!-- Réduit le padding -->
                    <h1 class="text-l md:text-2xl font-bold mb-6">A tout âge :</h1>
                    <ul class="list-disc list-inside text-sm md:text-lg ml-6 mb-6">
                        <li>Suite à un choc ou un stress,</li>
                        <li>Suite à accident: chute de balcon, accident de voiture, altercation avec un autre individu,</li>
                        <li>Changement d’attitude inexpliqué,</li>
                        <li>Perte d’appétit, troubles difestifs</li>
                        <li>Perte de mobilité (ne saute plus correctement),</li>
                        <li>Arthrose,</li>
                        <li>boiterie (après contrôle vétérinaire),</li>
                        <li>Post opératoireEtc.</li>
                    </ul>
                    <p class="text-sm md:text-lg mb-6">De 6 mois à 5 ans, une séance tous les 6 mois.</p>
                    <a :href="buttonLink"
                        class="bg-bleu hover:bg-bleu_hover text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ">
                        Prendre rendez-vous
                    </a>
                </div>
                <div class="w-full md:w-1/2 flex justify-center"> <!-- Ajout de flex et justify-center -->
                    <img :src="imageSrcChat" alt="Hero Image" class="object-cover w-full h-auto  md:h-full" />
                </div>
            </section>

        </div>
    </div>
</template>

<script>
import chat from '../assets/images/chatPhoto.jpeg';

export default {
    name: 'Chat',
    props: {
        imageSrcChat: {
            type: String,
            default: chat,
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