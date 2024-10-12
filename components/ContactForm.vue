<template>
    <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Me contacter</h2>
      <form @submit.prevent="sendEmail" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input type="text" v-model="firstName" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" v-model="lastName" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
          <input type="tel" v-model="phone" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" v-model="email" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div class="mb-4 col-span-1 md:col-span-2">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea v-model="message" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" rows="4"></textarea>
        </div>
        <div class="mb-4">
          <label for="animal" class="block text-sm font-medium text-gray-700">Animal</label>
          <select v-model="animal" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
            <option value="" disabled selected>Choisissez un animal</option>
            <option value="Chien">Chien</option>
            <option value="Chat">Chat</option>
            <option value="Cheval">Cheval</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200 col-span-1 md:col-span-2">Envoyer</button>
      </form>
      <div v-if="successMessage" class="mt-4 text-green-600">{{ successMessage }}</div>
      <div v-if="errorMessage" class="mt-4 text-red-600">{{ errorMessage }}</div>
    </div>
  </template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
            animal: '',
            successMessage: '',
            errorMessage: '',
        };
    },
    methods: {
        sendEmail() {
            const templateParams = {
                from_name: `${this.firstName} ${this.lastName}`,
                to_name: 'Laurine', // Remplacez par le nom du destinataire
                phone: this.phone,
                email: this.email,
                message: this.message,
                animal: this.animal,
            };

            emailjs.send('service_hnfanms', 'template_v5xgsoj', templateParams, 'G6ZFZy3tu0QbPaFQP')
                .then((response) => {
                    this.successMessage = 'Email envoyé avec succès!';
                    this.errorMessage = '';
                    this.resetForm();
                }, (err) => {
                    this.errorMessage = 'Erreur lors de l\'envoi de l\'email.';
                    this.successMessage = '';
                    console.error('Erreur lors de l\'envoi de l\'email:', err);
                });
        },
        resetForm() {
            this.firstName = '';
            this.lastName = '';
            this.phone = '';
            this.email = '';
            this.message = '';
            this.animal = '';
        },
    },
};
</script>

<style scoped>
</style>