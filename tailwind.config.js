module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: ["light"]
  },
  theme: {
    extend: {
      extend: {
        fontFamily: {
          "sans": ["Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"],
          "serif": ["Roboto Slab", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
