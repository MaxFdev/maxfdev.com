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
        verdana: ["Verdana", "sans-serif"],
        noto: ["var(--font-noto-sans)", "sans-serif"],
        trebuchet: ["Trebuchet MS", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
