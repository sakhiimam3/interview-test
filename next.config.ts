import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: "#FFFFFF",
        background: "var(--color-background)", 
        foreground: "var(--color-foreground)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-PlayfairDisplay)", "serif"],
      },
      backgroundImage: {
        'button-gradient': "linear-gradient(90deg, #DCBB75, #AD8749)",
      },

    },
  },
};

export default config;
