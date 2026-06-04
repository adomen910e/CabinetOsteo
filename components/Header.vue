<template>
  <header class="bg-creme shadow-sm fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo + Nom -->
        <NuxtLink to="/" class="flex items-center space-x-3 text-vert hover:text-vert_hover transition-colors duration-200">
          <img src="/assets/images/logo.png" alt="Logo" class="h-16 w-24 " />
          <h1 class="text-xl font-semibold">Laurine Bourgeois</h1>
        </NuxtLink>

        <!-- Navigation desktop -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink 
            v-for="(item, index) in navigation" 
            :key="index"
            :to="item.path"
            class="text-noir hover:text-vert text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-vert after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Bouton menu mobile -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden p-2 text-noir hover:text-vert transition-colors duration-200"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              v-if="!isMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div 
      v-show="isMenuOpen" 
      class="lg:hidden bg-creme border-t border-noir/10"
    >
      <div class="container mx-auto px-4 py-3">
        <nav class="flex flex-col space-y-3">
          <NuxtLink 
            v-for="(item, index) in navigation" 
            :key="index"
            :to="item.path"
            class="text-noir hover:text-vert hover:bg-vert/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            @click="closeMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>

  <!-- Spacer pour éviter que le contenu passe sous le header -->
  <div class="h-16"></div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      navigation: [
        { name: 'Accueil', path: '/' },
        { name: 'Chien', path: '/chien' },
        { name: 'Chat', path: '/chat' },
        { name: 'Cheval', path: '/cheval' },
        { name: 'Qui suis-je ?', path: '/qui' },
        { name: 'Prendre rendez-vous', path: '/priseRdv' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  watch: {
    '$route'() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
.router-link-active {
  @apply text-vert;
}
</style>