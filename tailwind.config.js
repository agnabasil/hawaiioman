/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#F26430", // Vibrant Tangerine
        "background-light": "#FDFBF7", // Creamy Off-White
        "background-dark": "#2C3627", // Deep Forest Green
        "surface": "#FFFFFF",
        "text-main": "#2C3627", // Deep Forest Green
        "muted": "#8BA17E", // Muted Sage Green
        "accent": "#E8C547" // Yellow Gold
      },
      fontFamily: {
        "display": ["Recoleta", "serif"],
        "body": ["Outfit", "sans-serif"],
        "sans": ["Work Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "card": "24px",
        "pill": "100px",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      boxShadow: {
        "soft": "0 8px 30px rgba(44, 54, 39, 0.08)",
        "soft-hover": "0 16px 40px rgba(44, 54, 39, 0.12)"
      },
      keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
          float: 'float 6s ease-in-out infinite',
          marquee: 'marquee 30s linear infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
