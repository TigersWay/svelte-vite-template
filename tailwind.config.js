/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{js,ts,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
