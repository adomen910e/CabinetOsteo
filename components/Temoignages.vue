<template>


        <div
            class="w-full bg-vert h-[50vh] md:max-h-[450px] text-center mx-auto  relative  flex flex-row justify-center sm:p-3">
            <div class="w-[15%] h-full flex  justify-center items-center  ">
                <button @click="prevTemoignage" class="md:size-14 size-10 text-bleu hover:text-bleu_hover transition-all  border-none cursor-pointer rounded ">
                    <ArrowLeftCircleIcon class="w-full h-ful" />
                </button>
            </div>
            <div
                class="w-[70%] h-full   text-center mx-auto bg-vert relative overflow-hidden flex flex-col  gap-10 sm:p-3">
                <div>
                    <h2 class=" mt-5 text-2xl md:text-4xl">Témoignages</h2>
                    <transition :name="transitionName" mode="out-in">
                        <div :key="currentIndex" class="text-center h-full  w-full">
                            <p class="text-l overflow-hidden md:text-xl  md:px-20 pb-5 mt-10 md:mt-16">{{ currentTemoignage.text }}</p>
                            <p class="author italic text-gray-600 mt-2  text-l md:text-xl ">- {{
                                currentTemoignage.author }}
                            </p>
                        </div>
                    </transition>
                </div>


            </div>
            <div class="w-[15%] h-full flex  justify-center items-center  ">
                <button @click="nextTemoignage" class="md:size-14 size-10 text-bleu hover:text-bleu_hover transition-all border-none cursor-pointer rounded ">
                    <ArrowRightCircleIcon class="w-full h-full text-blue-500" />
                </button>
            </div>
        </div>
</template>



<script>
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'

export default {
    name: 'Temoignages',
    components: {
        ArrowLeftCircleIcon,
        ArrowRightCircleIcon
    },
    data() {
        return {
            temoignages: [
                { text: "Une amie qui a un chien m'a conseillé Laurine, alors j'ai pris rendez-vous pour mon petit chien ! Une femme super gentille, douce et très calme! Résultats rapides, et efficaces. Franchement je recommande à mon tour, Laurine les yeux fermés. Et je vais même prendre rendez-vous pour mes chats, pour un petit contrôle pour leurs biens être. Merci encore beaucoup, pour votre super travail !", author: "Sonia Sonia" },
                { text: "Toute première séance d'ostéopathie animale sur ma petite chienne de 3,5kgs hyper craintive des humains aujourd'hui. À ma grande surprise, elle s'est laissée manipuler par Laurine et s'est même détendue à son contact ! Suite à la séance, petite balade et je vois direct la différence, elle saute et court de partout comme un petit chiot. Merci à Laurine pour son professionnalisme et son efficacité ! Je recommande +++", author: "Gaëlle Lachiver" },
                { text: "Laurine est très professionnelle, très douce avec l'animal. Mon carlin qui a tendance à ne pas se laisser faire à beaucoup apprécié et n'a pas bougé...cela lui a fait un bien fou. En plus d'être très compétente, Laurine est de très bons conseils. N'hésitez pas à faire appel à elle.", author: "Corinne P" },
                { text: "J ai contacté Laurine pour faire un point sur des raideurs et une suspicion d'arthrose avec des boiteries sur mon petit Berger Des Pyrénées Lucky qui à 10 ans. Super approche qui n était pas évidente car il est méfiant envers les inconnus mais Laurine à su visiblement lui inspirer confiance et à pu travailler en toute liberté. Je recommande vraiment son travail. Encore Milles mercis Laurine ", author: "Coco" },
                { text: "Nous avons contacté Laurine pour notre chien de 9 ans qui a du mal à effectuer certains mouvements depuis quelques temps.Elle a pris le temps de nous poser des questions concernant ses habitudes, ses antécédents et son alimentation. Elle a été très professionnelle et douce. Notre toutou semblait très détendu et à l'aise après cette première séance. Je recommande Laurine sans hésiter. Merci pour cette séance et le compte rendu détaillé par mail. A bientôt.", author: "Anne VPC" },
                { text: "Je m’appelle Rio et je suis un petit bouledogue français de bientôt 5 ans.Je ne supporte plus les cabinets vétérinaires et je ne les laisse pas m’approcher. Mes maîtres m’ont présenté Laurine Bourgeois et bien qu’un peu méfiant au début, je la trouve tranquille et elle me fait beaucoup de bien. En plus elle vient à la maison et est d’une patience exemplaire. Depuis, je prends beaucoup moins de médicaments pour mes crises d’hernies discales . Je remercie beaucoup Laurine pour ses compétences, sa douceur et le bien-être qu’elle m’apporte 👍", author: "Yon Debringas" },
                { text: "Laurine suit depuis plusieurs années mon chat Bidule 17ans, elle soulage son dos et son bassin, tout doucement, le chat en fermait les yeux de soulagement ! Cela le remet d'aplomb pour 6mois jusqu'à la prochaine visite ! De plus, elle vient à la maison, comme ça,sa majesté le chat n'est pas trop perturbé ! Je recommande !!", author: "Patricia Duhau" },
                { text: "J'ai pu rencontrer Laurine Bourgeois pour mon husky qui avait des difficultés à marcher suite à une chute, elle a été très réactive et s'est déplacé à l'adresse souhaité ! Le petit loup a retrouvée une seconde jeunesse ! Je recommande !", author: "Julian Verger" },
            ],
            currentIndex: 0,
            transitionName: 'slide-right',
        };
    },
    computed: {
        currentTemoignage() {
            return this.temoignages[this.currentIndex];
        },
    },
    methods: {
        prevTemoignage() {
            this.transitionName = 'slide-left'; // Définit l'animation vers la gauche
            this.currentIndex = (this.currentIndex - 1 + this.temoignages.length) % this.temoignages.length;
        },
        nextTemoignage() {
            this.transitionName = 'slide-right'; // Définit l'animation vers la droite
            this.currentIndex = (this.currentIndex + 1) % this.temoignages.length;
        },
    },
};
</script>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-right-enter,
.slide-right-leave-to {
    transform: translateX(-40%);
    opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave {
    transform: translateX(0);
    opacity: 1;
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-left-enter,
.slide-left-leave-to {
    transform: translateX(40%);
    opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave {
    transform: translateX(0);
    opacity: 1;
}
</style>
