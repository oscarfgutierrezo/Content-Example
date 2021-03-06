module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "background": "#F2F2F2",
        "primary": "#2F1893",
        "dark-violet": "#1E0E62",
        "dark-violet-02": "#151439",
        "light-violet": "#482BE7",
        "pink": "#E93A7D",
        "green": "#25DAC5",
        "grey": "#EBEAED",
        "red": "#EA3223",
      },
      fontFamily: {
        "sans": "DM Sans",
        "inconsolata": "Inconsolata"
      },
      backgroundImage: {
        cont05: 'url("../images/content-05.png")',
        cont06: 'url("../images/content-06.png")',
        cont14: 'url("../images/content-14.png")',
        cont15: 'url("../images/content-15.png")',
        cont17: 'url("../images/content-17.png")',
        cont22: 'url("../images/content-22.png")',
      },
      gridTemplateColumns: {
        'fit-194': 'repeat(auto-fit, minmax(194px, 1fr))',
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
