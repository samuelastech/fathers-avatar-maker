/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-tone-1': '#ffceb0',
        'body-tone-2': '#f8a36d',
        'body-tone-3': '#824b29',
        'body-tone-4': '#44230e',
      }
    },
  },
  plugins: [],
}