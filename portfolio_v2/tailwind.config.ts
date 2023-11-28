import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pre-thin": ["pretendard-thin"],
        "pre-reg": ["pretendard-regular"],
        "pre-bold": ["pretendard-bold"],
      },
    },
  },
  plugins: [],
};
export default config;
