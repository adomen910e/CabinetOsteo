<template>
  <div>
    <Header />
    <div class="pt-14 bg-gray-200"> <!-- Ajustez la valeur selon la hauteur de votre header -->
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue';
import '@fortawesome/fontawesome-free/css/all.css';
</script>

<style>
/* Styles globaux ici */
</style>