/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Aggiungi i percorsi ai tuoi file HTML
    '../Cafenescu/**/*.html',  // Tutti i file HTML nella cartella 'Cafenescu'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),  // Assicurati di includere il plugin daisyUI
  ],
  daisyui: {
    themes: [
      // Tema predefiniti di daisyUI
      "autumn",
    ],
  },
}
