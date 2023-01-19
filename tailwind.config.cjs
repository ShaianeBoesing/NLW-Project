module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#101010'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
