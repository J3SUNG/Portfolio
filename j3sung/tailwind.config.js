/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        blink: "blink 400ms ease-in-out infinite alternate",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    fontFamily: {
      DancingScript: ["DancingScript"],
      Binggrae: ["Binggrae"],
    },
  },
  plugins: [],
};
