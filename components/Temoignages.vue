<template>
    <div
        class="w-full h-[100vw] md:max-h-[500px] text-center mx-auto my-5 border border-gray-300 rounded-lg bg-[#BDD6D0] relative overflow-hidden flex flex-col justify-center sm:p-3">
        <h2 class=" m-1 md:m-5 text-xl md:text-4xl">Témoignages</h2>
        <div class="flex-1 flex flex-col justify-center items-center w-[40vh] md:w-[90vh]  md:max-w-[700px] mx-auto p-5 sm:p-3">
            <p class="text-xs md:text-lg">{{ currentTemoignage.text }}</p>
            <p class="author italic text-gray-600 mt-2 text-xs md:text-lg">- {{ currentTemoignage.author }}</p>
        </div>
        <div class="flex justify-between absolute top-1/2 w-full transform -translate-y-1/2">
            <button @click="prevTemoignage"
                class="bg-gray-700 text-white border-none py-2 px-4 cursor-pointer rounded hover:bg-gray-800">←</button>
            <button @click="nextTemoignage"
                class="bg-gray-700 text-white border-none py-2 px-4 md:mx-8 cursor-pointer rounded hover:bg-gray-800">→</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Temoignages',
    data() {
        return {
            temoignages: [
                { text: "Une amie qui a un chien m'a conseillé Laurine, alors j'ai pris rendez-vous pour mon petit chien ! Une femme super gentille, douce et très calme! Résultats rapides, et efficaces. Franchement je recommande à mon tour, Laurine les yeux fermés. Et je vais même prendre rendez-vous pour mes chats, pour un petit contrôle pour leurs biens être. Merci encore beaucoup, pour votre super travail !", author: "Sonia Sonia" },
                { text: "Toute première séance d'ostéopathie animale sur ma petite chienne de 3,5kgs hyper craintive des humains aujourd'hui. À ma grande surprise, elle s'est laissée manipuler par Laurine et s'est même détendue à son contact ! Suite à la séance, petite balade et je vois direct la différence, elle saute et court de partout comme un petit chiot. Merci à Laurine pour son professionnalisme et son efficacité ! Je recommande +++", author: "Gaëlle Lachiver" },
                { text: "Laurine est très professionnelle, très douce avec l'animal. Mon carlin qui a tendance à ne pas se laisser faire à beaucoup apprécié et n'a pas bougé...cela lui a fait un bien fou. En plus d'être très compétente, Laurine est de très bons conseils. N'hésitez pas à faire appel à elle.", author: "Corinne P" },
                { text: "J ai contacté Laurine pour faire un point sur des raideurs et une suspicion d'arthrose avec des boiteries sur mon petit Berger Des Pyrénées Lucky qui à 10 ans. Super approche qui n était pas évidente car il est méfiant envers les inconnus mais Laurine à su visiblement lui inspirer confiance et à pu travailler en toute liberté. Je recommande vraiment son travail. Encore Milles mercis Laurine ", author: "Coco" },
                { text: "Nous avons contacté Laurine pour notre chien de 9 ans qui a du mal à effectuer certains mouvements depuis quelques temps.Elle a pris le temps de nous poser des questions concernant ses habitudes, ses antécédents et son alimentation. Elle a été très professionnelle et douce. Notre toutou semblait très détendu et à l'aise après cette première séance. Je recommande Laurine sans hésiter. Merci pour cette séance et le compte rendu détaillé par mail. A bientôt.", author: "Anne VPC" },
                { text: "Je m’appelle Rio et je suis un petit bouledogue français de bientôt 5 ans.Je ne supporte plus les cabinets vétérinaires et je ne les laisse pas m’approcher. Mes maîtres m’ont présenté Laurine Bourgeois et bien qu’un peu méfiant au début, je la trouve tranquille et elle me fait beaucoup de bien. En plus elle vient à la maison et est d’une patience exemplaire. Depuis, je prends beaucoup moins de médicaments pour mes crises d’hernies discales . Je remercie beaucoup Laurine pour ses compétences, sa douceur et le bien-être qu’elle m’apporte. Vous pouvez me croire, celle la seule personne qui me soigne et rassure mes maîtres. Une valeur sûre 👍", author: "Yon Debringas" },
                { text: "Laurine suit depuis plusieurs années mon chat Bidule 17ans, elle soulage son dos et son bassin, tout doucement, le chat en fermait les yeux de soulagement ! Cela le remet d'aplomb pour 6mois jusqu'à la prochaine visite ! De plus, elle vient à la maison, comme ça,sa majesté le chat n'est pas trop perturbé ! Je recommande !!", author: "Patricia Duhau" },
                { text: "J'ai pu rencontrer Laurine Bourgeois pour mon husky qui avait des difficultés à marcher suite à une chute, elle a été très réactive et s'est déplacé à l'adresse souhaité ! Le petit loup a retrouvée une seconde jeunesse ! Je recommande !", author: "Julian Verger" },
            ],
            currentIndex: 0,
        };
    },
    computed: {
        currentTemoignage() {
            return this.temoignages[this.currentIndex];
        },
    },
    methods: {
        prevTemoignage() {
            this.currentIndex = (this.currentIndex - 1 + this.temoignages.length) % this.temoignages.length;
        },
        nextTemoignage() {
            this.currentIndex = (this.currentIndex + 1) % this.temoignages.length;
        },
    },
};
</script>
<style scoped></style>