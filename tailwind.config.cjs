/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e1016",
        card: "#1a1d23",
        text: "#e0e6eb",
        accent: "#00d4ff",
        secondary_accent: "#2edb8e",
        border_light: "#2a2f3a",
        border_dark: "#0a0c0f",
      },
      boxShadow: {
        'smooth': '0 4px 10px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 20px rgba(0, 212, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'wave': 'wave 2s infinite alternate',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'wave': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        'shadow': 'box-shadow',
      }
    },
  },
  plugins: [],
}; 