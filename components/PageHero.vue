<template>
  <section class="flex flex-col md:flex-row items-center text-black">
    <div class="w-full md:w-1/2 p-4 m-1">
      <h1 class="text-2xl md:text-6xl font-bold mb-4">{{ title }}</h1>
      <p class="text-xs md:text-lg mb-4">{{ description }}</p>
      <NuxtLink to="/priseRdv"
        class="bg-bleu hover:bg-bleu_hover text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>
    <div class="w-full md:w-1/2">
      <img :src="imageSrc" alt="Hero Image" class="object-cover w-full h-auto md:h-full" />
    </div>
  </section>
</template>

<script>
import backAcceuil from '../assets/images/backAcceuil.jpg';

export default {
  name: 'PageHero',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'En savoir plus',
    },
    buttonLink: {
      type: String,
      default: '/priseRdv',
    },
    imageSrc: {
      type: String,
      default: backAcceuil,
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés ici si nécessaire */
</style>