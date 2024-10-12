<template>
    <section class="relative flex items-center justify-center h-screen bg-cover bg-center" style="background-image: url('/assets/images/backAcceuil.jpg');">
      <div class="absolute inset-0 bg-black opacity-40"></div> <!-- Overlay pour assombrir l'image -->
      <div class="relative z-10 text-center text-blanc">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 ">Laurine Bourgeois</h1>
        <h2 class="text-lg md:text-xl mb-8 ">Ostéopathe Animalier</h2>
        <a href="/priseRdv" class="bg-bleu hover:bg-bleu_hover transition-all text-blanc font-bold py-2 px-4 rounded">
            Prendre rendez-vous
        </a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LandingHero',
  }
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
  </style>