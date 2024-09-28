<template>
    <div class="flex items-center justify-center">
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only" v-model="isCabinet" />
        <div class="w-48 h-10 bg-gray-300 rounded-full shadow-inner transition duration-300" :class="{ 'bg-blue-500': isCabinet }"></div>
        <span class="absolute left-2 text-black font-semibold transition duration-300 z-10">A domicile</span>
        <span class="absolute right-2 text-black font-semibold transition duration-300 z-10">En cabinet</span>
        <div class="absolute w-24 h-10 bg-green-500 rounded-full shadow transition duration-300 transform" :class="{ 'translate-x-24': isCabinet }"></div>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isCabinet: false, // État initial : Mensuel
      };
    },
    watch: {
        isCabinet(newValue) {
        this.$emit('toggle', newValue); // Émet un événement lorsque l'état change
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles supplémentaires si nécessaire */
  </style>