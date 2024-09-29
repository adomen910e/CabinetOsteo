<template>
  <header class="bg-bleu text-blanc p-4 fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Laurine Bourgeois</h1>
      <nav class="hidden md:flex md:items-center md:justify-end space-x-4">
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:text-gray-400">L'acceuil</NuxtLink></li>
          <li><NuxtLink to="/osteopathie" class="hover:text-gray-400">L'ostéopathie</NuxtLink></li>
          <li><NuxtLink to="/chien" class="hover:text-gray-400">Le chien</NuxtLink></li>
          <li><NuxtLink to="/chat" class="hover:text-gray-400">Le chat</NuxtLink></li>
          <li><NuxtLink to="/cheval" class="hover:text-gray-400">Le cheval</NuxtLink></li>
          <li><NuxtLink to="/qui" class="hover:text-gray-400">Qui suis-je ?</NuxtLink></li>
          <li><NuxtLink to="/priseRdv" class="hover:text-gray-400">Prise de rendez-vous</NuxtLink></li>
        </ul>
      </nav>
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="absolute right-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg z-50 md:hidden">
      <nav>
        <ul class="flex flex-col space-y-2 p-4">
          <li><NuxtLink to="/" class="hover:text-gray-400">L'acceuil</NuxtLink></li>
          <li><NuxtLink to="/osteopathie" class="hover:text-gray-400">L'ostéopathie</NuxtLink></li>
          <li><NuxtLink to="/chien" class="hover:text-gray-400">Le chien</NuxtLink></li>
          <li><NuxtLink to="/chat" class="hover:text-gray-400">Le chat</NuxtLink></li>
          <li><NuxtLink to="/cheval" class="hover:text-gray-400">Le cheval</NuxtLink></li>
          <li><NuxtLink to="/qui" class="hover:text-gray-400">Qui suis-je ?</NuxtLink></li>
          <li><NuxtLink to="/priseRdv" class="hover:text-gray-400">Prise de rendez-vous</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false, // État du menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Inverse l'état du menu
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés ici si nécessaire */
nav {
  transition: max-height 0.3s ease-in-out;
}
</style>