<template>
  <section class="relative h-[calc(100vh-64px)] w-full">
      <!-- Image de fond -->
      <div 
          class="absolute top-0 left-0 w-full h-full"
          style="
              background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), url('/assets/images/backAcceuil.jpg');
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
          "
      ></div>

      <!-- Container principal repositionné -->
      <div class="relative h-full">
          <!-- Contenu aligné en haut à gauche sur desktop et en bas au centre sur mobile -->
          <div class="absolute md:left-16 md:top-16 max-w-xl md:transform-none transform translate-x-1/2 bottom-16 right-1/2 w-full md:w-auto px-4 md:px-0">
              <div class="backdrop-blur-sm bg-creme/80 shadow-lg px-8 py-6 rounded-xl max-w-xl mx-auto md:mx-0">
                  <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-noir text-center md:text-left">
                      Laurine Bourgeois
                  </h1>

                  <h2 class="text-m sm:text-l lg:text-xl font-light mb-6 text-noir/80 italic text-center md:text-left">
                      Ostéopathe Animalier OA381
                  </h2>

                  <div class="text-center md:text-left">
                      <NuxtLink 
                          to="/priseRdv"
                          class="inline-block bg-vert hover:bg-vert_hover text-noir font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg w-full md:w-auto"
                      >
                          Prendre rendez-vous
                      </NuxtLink>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>