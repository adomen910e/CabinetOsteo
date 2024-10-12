<!-- <template>
    <div class="prise-rdv">
      <h1>Prendre un Rendez-vous</h1>
      <iframe
        src="https://calendly.com/laubourgeois-osteo/60min"
        width="100%"
        height="800"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PriseRDV',
  };
  </script>
  
  <style scoped>
  .prise-rdv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  </style> -->
<template>
    <div class="mt-40 md:mt-20  bg-blanc">
        <div class="flex flex-col py-6 h-full md:px-6 px-0">
            <h1 class="text-2xl md:text-6xl font-bold mb-8 text-center text-bleu">Prenez rendez-vous</h1>
            <PricingToggle @toggle="handleToggle" />
            <div class="form-container flex-1 pt-2  rounded-lg h-[]" :class="{ 'hidden': !isDomicile }">
                <ContactForm />

            </div>

            <div class="form-container flex-1  rounded-lg h-full" :class="{ 'hidden': isDomicile }">
                <iframe src="https://calendly.com/laubourgeois-osteo/60min" width="100%" height="865" frameborder="0"
                    scrolling="no" style="overflow: hidden;"></iframe>

            </div>

        </div>
    </div>
</template>

<script>
import PricingToggle from './components/Toggle.vue';
import ContactForm from './components/ContactForm.vue';

export default {
    components: {
        PricingToggle,
        ContactForm,
    },
    data() {
        return {
            isDomicile: true,
            isContactFormVisible: true, // Pour gérer l'affichage du formulaire
            contactForm: {
                name: '',
                email: ''
            },
            appointmentForm: {
                date: '',
                time: ''
            },
            title: '', // Ajoutez une propriété pour stocker le titre
        };
    },
    async asyncData({ query }) {
        return {
            title: query.title || 'Titre par défaut', // Récupérez le titre de la requête
        };
    },

    methods: {
        handleToggle(isCabinet) {
            this.isDomicile = isCabinet ? false : true;
        },
        setDomicile() {
            this.isDomicile = true;
        },
        setCabinet() {
            this.isDomicile = false;
        },
        submitContactForm() {
            console.log('Formulaire de contact soumis:', this.contactForm);
            this.contactForm.name = '';
            this.contactForm.email = '';
        },
        submitAppointmentForm() {
            console.log('Formulaire de rendez-vous soumis:', this.appointmentForm);
            this.appointmentForm.date = '';
            this.appointmentForm.time = '';
        },
    },
};
</script>

<style scoped>
@media (max-width: 768px) {

    /* Styles pour mobile */
    .form-container {
        width: 100%;
        /* Prend toute la largeur sur mobile */
    }

    
}
</style>

<!-- <template>
    <div class="mt-20">
        <PricingToggle @toggle="handleToggle" />
        <div class="flex justify-center p-6">
            <table class="border border-black w-2/3">
                <tr>
                    <td class="border border-black w-1/2">
                        <div class="form-container flex-1 border rounded-lg"
                            :class="{ 'opacity-30 pointer-events-none': !isDomicile }">
                            <ContactForm />
                        </div>
                    </td>
                    <td class="border border-black w-1/2">
                        <div class="form-container flex-1 border rounded-lg"
                            :class="{ 'opacity-30 pointer-events-none': isDomicile }" style="overflow: hidden;">
                            <iframe src="https://calendly.com/laubourgeois-osteo/60min" width="100%" height="865"
                                frameborder="0" scrolling="no"></iframe>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import PricingToggle from './components/Toggle.vue';
import ContactForm from './components/ContactForm.vue';

export default {
    components: {
        PricingToggle,
        ContactForm,
    },
    data() {
        return {
            isDomicile: true,
            contactForm: {
                name: '',
                email: ''
            },
            appointmentForm: {
                date: '',
                time: ''
            }
        };
    },
    methods: {
        handleToggle(isCabinet) {
            this.isDomicile = isCabinet ? false : true;
        },
        setDomicile() {
            this.isDomicile = true;
        },
        setCabinet() {
            this.isDomicile = false;
        },
        submitContactForm() {
            console.log('Formulaire de contact soumis:', this.contactForm);
            this.contactForm.name = '';
            this.contactForm.email = '';
        },
        submitAppointmentForm() {
            console.log('Formulaire de rendez-vous soumis:', this.appointmentForm);
            this.appointmentForm.date = '';
            this.appointmentForm.time = '';
        }
    },
};
</script> -->
