<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <!-- Hero Section -->
        <div class="relative py-16 overflow-hidden">
            <div class="container mx-auto px-4 text-center">
                <div class="relative inline-block animate-fade-in-up">
                    <h1 class="text-4xl md:text-6xl font-bold text-[#47855A] mb-8">
                        Prendre Rendez-vous
                        <div class="absolute -z-10 inset-0 bg-gradient-to-r from-blue-200/30 to-blue-100/30 blur-3xl transform -skew-y-3"></div>
                    </h1>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Choisissez le type de consultation qui vous convient le mieux
                    </p>
                </div>

                <!-- Toggle amélioré -->
                <div class="max-w-2xl mx-auto mb-12 animate-fade-in">
                    <div class="bg-white p-2 rounded-xl shadow-lg">
                        <div class="relative">
                            <div class="flex">
                                <button 
                                    @click="setDomicile"
                                    class="flex-1 px-6 py-3 text-lg font-medium rounded-lg transition-colors relative z-10"
                                    :class="isDomicile ? 'text-white' : 'text-gray-600'"
                                >
                                    À domicile
                                </button>
                                <button 
                                    @click="setCabinet"
                                    class="flex-1 px-6 py-3 text-lg font-medium rounded-lg transition-colors relative z-10"
                                    :class="!isDomicile ? 'text-white' : 'text-gray-600'"
                                >
                                    En cabinet
                                </button>
                            </div>
                            <!-- Sliding background -->
                            <div 
                                class="absolute inset-y-0 w-1/2 bg-[#47855A] rounded-lg transition-transform duration-300"
                                :class="isDomicile ? 'left-0' : 'translate-x-full'"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu dynamique -->
        <div class="container mx-auto px-4 pb-16">
            <div class="max-w-4xl mx-auto">
                <!-- Formulaire à domicile -->
                <div 
                    v-show="isDomicile"
                    class="bg-white rounded-2xl shadow-xl p-8 animate-fade-in"
                >
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Consultation à domicile</h2>
                        <p class="text-gray-600">Remplissez le formulaire ci-dessous pour une consultation à votre domicile</p>
                    </div>
                    <ContactForm />
                </div>

                <!-- Calendly pour cabinet -->
                <div 
                    v-show="!isDomicile"
                    class="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in"
                >
                    <div class="p-8 bg-gradient-to-r from-[#47855A]/10 to-blue-50">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Consultation en cabinet</h2>
                        <p class="text-gray-600">Choisissez directement votre créneau dans le calendrier</p>
                    </div>
                    <iframe 
                        src="https://calendly.com/laubourgeois-osteo/consultation-osteopathique-chien-chat" 
                        class="w-full h-[700px]"
                        frameborder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'

export default {
    name: 'PriseRDV',
    components: {
        ContactForm
    },
    data() {
        return {
            isDomicile: true
        }
    },
    methods: {
        setDomicile() {
            this.isDomicile = true
        },
        setCabinet() {
            this.isDomicile = false
        },
        handleToggle(isCabinet) {
            this.isDomicile = !isCabinet
        }
    }
}
</script>

<style scoped>
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in {
    animation: fade-in 0.4s ease-out forwards;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    iframe {
        height: 600px;
    }
}
</style>