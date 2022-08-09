module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        'noScrollFooter': "calc(100vh - 74px - 84px - 80px - 58px - 32px)",
        "heightItemsInDesk": "calc(100vh - 74px - 84px - 80px - 58px - 32px - 175px)"
      },
      minHeight: {
        "heightItemsInDesk": "calc(100vh - 74px - 84px - 80px - 58px - 32px )"
      }
    },
  },
  plugins: [],
}