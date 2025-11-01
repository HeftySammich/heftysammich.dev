/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./blog.html",
    "./donate.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#222222',
        'accent-green': '#00ff40',
      },
    },
  },
  plugins: [],
}

