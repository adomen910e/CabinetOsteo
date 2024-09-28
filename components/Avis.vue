<template>
    <div class="avis-container">
      <div class="avis-content">
        <p v-if="currentAvis">{{ currentAvis.text }}</p>
        <p v-else>Aucun avis disponible.</p>
      </div>
      <div class="avis-navigation">
        <button @click="prevAvis" :disabled="currentIndex === 0">←</button>
        <button @click="nextAvis" :disabled="currentIndex === avis.length - 1">→</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Avis',
    data() {
      return {
        avis: [], // Tableau pour stocker les avis
        currentIndex: 0, // Index de l'avis actuel
      };
    },
    computed: {
      currentAvis() {
        return this.avis[this.currentIndex];
      },
    },
    methods: {
      prevAvis() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      nextAvis() {
        if (this.currentIndex < this.avis.length - 1) {
          this.currentIndex++;
        }
      },
      async fetchAvis() {
        // Remplacez cette URL par l'API ou la source de données que vous utilisez
        const response = await fetch('https://api.example.com/avis'); // Exemple d'URL
        const data = await response.json();
        this.avis = data; // Assurez-vous que les données sont au format attendu
      },
    },
    mounted() {
      this.fetchAvis(); // Récupérer les avis lors du montage du composant
    },
  };
  </script>
  
  <style scoped>
  .avis-container {
    text-align: center;
    margin: 20px;
  }
  
  .avis-navigation {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  button {
    background-color: #4a5568; /* Couleur de fond */
    color: white; /* Couleur du texte */
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 0 5px;
  }
  
  button:disabled {
    background-color: #a0aec0; /* Couleur pour le bouton désactivé */
    cursor: not-allowed;
  }
  </style>