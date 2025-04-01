module.exports = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gold: '#C4A962',
        // Add light theme colors
        light: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          text: '#333333',
          accent: '#C4A962' // Keeping gold as accent
        },
        dark: {
          primary: '#111111',
          secondary: '#1a1a1a',
          text: '#ffffff',
          accent: '#C4A962'
        }
      },
    },
  },
  plugins: [],
}