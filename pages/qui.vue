<template>
    <div class="m-20">
        <div class="md:mr-60 md:ml-60">
            <section class="flex flex-col md:flex-row items-center text-black mb-10">
                <div class="w-full md:w-1/2 m-10"> <!-- Réduit le padding -->
                    <h1 class="text-l md:text-6xl font-bold mb-6">Qui suis-je ?</h1>
                    <p class="text-sm md:text-lg mb-6">Cavalière depuis l’âge de 5 ans et amoureuse des animaux depuis toujours. 
            J’ai souhaité dans ma vie professionnelle conjuguer santé/bien-être et animaux, j’ai donc cherché une formation me permettant d’allier les deux. 
            C’est pourquoi, après mon cursus général, je me suis engagée dans une formation continue d’ostéopathe animalier. 
            Durant ces années j’étudie les différentes techniques ostéopathiques structurelles, viscérales et crâniennes. 
            Je sors diplômée en 2015 et me lance dans ce métier passion. 
            De plus, au cours de plusieurs stages, je développe de nouvelles approches notamment en ostéopathie tissulaire (principes de Pierre Tricot) mais également sur les hélices fasciales et la FTM (Patrick Chêne), les techniques réflexes (Jean Perronneau) etc. 
            Les techniques évoluant, mon objectif sera d’approfondir sans cesse mon savoir afin de pouvoir apporter à nos animaux un plus grand nombre de méthodes adaptées à chacun.

            En 2020, après 5 années de métier, je valide l’examen tout juste mis en place par l’ordre national des vétérinaires permettant d’exercer légalement mon métier en étant inscrite au registre national des personnes non vétérinaires pratiquant l’ostéopathie sous le matricule OA381.
            En 2024, après 8 ans de pratique à domicile j’ouvre un cabinet dédié à la pratique de l’ostéopathie animale dans ma ville d’origine, St Médard en Jalles.</p>
                    
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