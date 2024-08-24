const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Changed from 'false' to 'class' for better dark mode support
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'cyber-cyan': '#00ffea',
        'cyber-orange': '#ff4500',
      },
      animation: {
        'glitch-anim': 'glitch-anim 2s infinite linear alternate-reverse',
        'glitch-anim2': 'glitch-anim2 2s infinite linear alternate-reverse',
        'pulse': 'pulse 2s infinite',
        'flame': 'flame 2s infinite',
        'blink': 'blink 2s infinite',
      },
      keyframes: {
        'glitch-anim': {
          '0%': { clip: 'rect(17px, 9999px, 94px, 0)', transform: 'skew(0.55deg)' },
          '5%': { clip: 'rect(99px, 9999px, 36px, 0)', transform: 'skew(0.89deg)' },
          '10%': { clip: 'rect(84px, 9999px, 3px, 0)', transform: 'skew(0.37deg)' },
          // Add more keyframes as needed
          '100%': { clip: 'rect(67px, 9999px, 21px, 0)', transform: 'skew(0.02deg)' },
        },
        'glitch-anim2': {
          '0%': { clip: 'rect(63px, 9999px, 97px, 0)', transform: 'skew(0.96deg)' },
          '5%': { clip: 'rect(35px, 9999px, 8px, 0)', transform: 'skew(0.13deg)' },
          '10%': { clip: 'rect(47px, 9999px, 75px, 0)', transform: 'skew(0.64deg)' },
          // Add more keyframes as needed
          '100%': { clip: 'rect(91px, 9999px, 32px, 0)', transform: 'skew(0.86deg)' },
        },
        'pulse': {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px #ff4500, 0 0 70px #ff4500, 0 0 80px #ff4500, 0 0 100px #ff4500' },
          '50%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.4), 0 0 20px #00ffea, 0 0 35px #00ffea, 0 0 40px #00ffea, 0 0 50px #00ffea' },
        },
        'flame': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.2)' },
        },
        'blink': {
          '0%, 45%, 55%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.1)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  safelist: [
    'glitch',
    'flame-text',
    'skull-eyes',
    'animate-glitch-anim',
    'animate-glitch-anim2',
    'animate-pulse',
    'animate-flame',
    'animate-blink',
  ],
};