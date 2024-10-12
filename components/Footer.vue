<template>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="flex flex-row items-center mb-4 md:mb-0">
                <div class="flex items-center mb-4 md:mb-0">
                    <img src="/assets/images/elephant.jpeg" alt="Logo" class="h-20 md:h-40 mr-4" />
                </div>

                <div class="flex flex-col text-center md:text-left mb-4 md:mb-0">
                    <div class="m-2">
                        <p class="font-bold text-lg">Laurine Bourgeois</p>
                        <p>Ostéopathe Animalier</p>
                    </div>

                </div>
            </div>


            <div class="flex flex-col items-center mb-4 md:mb-0">
                <div class="m-2">
                    <p>laubourgeois.osteo@gmail.com</p>
                    <span>+33 6 ?? ?? ?? ??</span>
                </div>
                <div class="flex justify-center md:justify-start space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" class="text-blue-500 hover:text-blue-400">
                        <i class="fab fa-facebook-f mr-2"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="text-pink-500 hover:text-pink-400">
                        <i class="fab fa-instagram mr-2"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires ici si nécessaire */
</style>