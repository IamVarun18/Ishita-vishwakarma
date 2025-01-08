/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textpink: "#F4A8B5",
        lightpink: "#FFE9ED",
        pink: "#FBD7DB",
        brown: "#260609",
        beige: "#F09F74",
        red: "#D00139",
        instagram: "#bc2a8d",
        twitter: "#1da1f2",
        linkedin: "#0077b5",
        pinterest: "#E60023",
        whatsapp: "#25d366",
        black: "#000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
