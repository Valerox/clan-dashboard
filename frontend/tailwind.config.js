/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', 
          dark: '#1E40AF', 
          light: '#93C5FD', 
        },
        secondary: {
          DEFAULT: '#FACC15', 
          alt: '#F43F5E', 
        },
        background: {
          light: '#F9FAFB', 
          dark: '#111827', 
        },
        text: {
          DEFAULT: '#1F2937', 
          contrast: '#E5E7EB', 
        },
      },
    },
  },
  plugins: [],
}