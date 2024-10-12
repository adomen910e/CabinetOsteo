<template>
    <div class="background">
        <LandingHero />
    </div>
    <div class="m-10">
        <div class="mb-10">
            <PageHero title="Qu'est ce que c'est?"
                description="Créée en 1874 par le Dr. Andrew Taylor Still elle est adaptée aux animaux en France par l’un des pionniers de la discipline le Dr. Dominique Giniaux dans les années 1980.
Elle est fondée sur des techniques manuelles appliquées sur des dysfonctions ostéopathiques trouvées grâce à la finesse du toucher du praticien. En effet, celui-ci effectue une palpation minutieuse de l’animal afin de déceler des zones de tensions, de densité anormale, des différences de température ou autres symptômes. De plus, il évalue la mobilité globale de l’organisme. L’attention est portée sur tous les tissus du corps : articulations, os, ligaments, muscles, viscères etc.
Les techniques ostéopathiques sont variées (structurelles, crâniennes, viscérales…) de ce fait chaque praticien possède sa façon d’exercer qui lui est propre, le but étant le même : redonner de la mobilité aux structures et permettre à l’organisme de pouvoir se rééquilibrer toujours en restant à l’écoute de l’animal."
                buttonText="Commencer" buttonLink="#services" :imageSrc="animalsImage" />
        </div>

        <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center">Pour quels types d'animaux ?</h1>
        <p class="text-xs md:text-xl text-pretty  mb-10 text-center">Les consultations ostéopathiques s’effectuent sur
            toutes
            espèces d’animaux : chien, cheval, chat, NAC, bovin.</p>
        <div class="flex flex-wrap justify-center">
            <PageCard v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description"
                :image="card.image" :buttonText="card.buttonText" />
        </div>
    </div>

    <Temoignages />


</template>

<script>
import LandingHero from './components/LandingHero.vue';
import PageHero from './components/PageHero.vue';
import PageGrid from './components/PageGrid.vue';
import PageCard from './components/PageCard.vue';
import Temoignages from './components/Temoignages.vue';
import ContactForm from './components/ContactForm.vue';
import dog from '../assets/images/dog1.png';
import cat from '../assets/images/cat1.png';
import horse from '../assets/images/horse1.png';
import animals from '../assets/images/animals.png';

export default {
    name: 'Home',
    components: {
        LandingHero,
        PageHero,
        PageGrid,
        PageCard,
        Temoignages,
        ContactForm,
    },
    props: {
        animalsImage: {
            type: String,
            default: animals,
        },
    },
    data() {
        return {
            cards: [
                {
                    title: 'Le chien',
                    description: 'Wouaf',
                    image: dog,
                    buttonText: 'Rendez-vous chien',
                },
                {
                    title: 'Le chat',
                    description: 'Miaou',
                    image: cat,
                    buttonText: 'Rendez-vous chat',
                    page: '/priseRdv',
                },
                {
                    title: 'Le cheval',
                    description: 'Hiiiihihihihi',
                    image: horse,
                    buttonText: 'Rendez-vous cheval',
                },
                // Ajoutez d'autres cartes ici
            ],
        };
    },
    methods: {
    },
}
</script>

<style scoped></style>
