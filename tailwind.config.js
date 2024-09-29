/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        blanc : '#FAF9F6',
        noir : '#2B2B2A',
        bleu: '#273B65',
        bleu_hover: '#4568B2',
        vert: '#A8D5BA',
        vert_hover: '#94BBA4',
      }
    },
    
  },
  plugins: [],
}

