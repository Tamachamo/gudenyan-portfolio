/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gude: {
          white: "#FFFFFF",
          cyan: "#00F2FF",
          pink: "#FFB7C5",
          gold: "#D4AF37",
        }
      },
      animation: {
        'gude-morph': 'gude-float 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
