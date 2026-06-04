<template>
    <footer class="bg-creme text-noir border-t border-noir/10 py-8">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Section logo et info -->
                <div class="flex flex-col items-center md:items-start">
                    <div class="flex items-center mb-4">
                        <img src="/assets/images/logo.png" alt="Logo"
                            class="h-16 w-24  mr-4" />
                        <div>
                            <h3 class="font-bold text-xl text-vert">Laurine Bourgeois</h3>
                            <p class="text-noir/70">Ostéopathe Animalier</p>
                        </div>
                    </div>
                </div>

                <!-- Section contact et adresse -->
                <div class="text-center md:text-left">
                    <h4 class="font-semibold text-lg mb-4 text-vert">Contact</h4>
                    <address class="not-italic space-y-2">
                        <p>4 rue Maurice François</p>
                        <p>33160 st Médard En Jalles</p>
                        <p>
                            <a href="mailto:laubourgeois.osteo@gmail.com"
                                class="text-vert hover:text-vert_hover transition-colors">
                                laubourgeois.osteo@gmail.com
                            </a>
                        </p>
                        <p class="text-noir/70">+33 7 70 30 99 41</p>
                    </address>
                </div>

                <!-- Mini carte -->
                <div class="h-[160px] rounded-lg overflow-hidden">
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20rue%20Maurice%20Fran%C3%A7ois%2033160%20st%20M%C3%A9dard%20En%20Jalles+(Cabinet%20d'ost%C3%A9opathie)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="flex justify-center gap-6 mt-8 pt-8 border-t border-noir/10">
                <a href="https://www.instagram.com/laurinebourgeois_osteoa/profilecard/?igsh=MXV3Z3B4ZjRsNWF2bg=="
                    target="_blank" class="text-vert hover:text-vert_hover transition-colors">
                    <span class="flex items-center gap-2">
                        <i class="fab fa-instagram"></i>
                        Instagram
                    </span>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>