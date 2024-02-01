/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      surface: {
        50: "#FCFCFD",
        100: "#F5F5FA",
        200: "#EBEBF4",
        300: "#E5E5F1",
        400: "#DBDBEB",
        500: "#D1D1E6",
        600: "#9999C7",
        700: "#6060A9",
        800: "#3D3D70",
        900: "#1F1F38",
        950: "#10101E",
      },
    },
    extend: {},
  },
  plugins: [],
};
