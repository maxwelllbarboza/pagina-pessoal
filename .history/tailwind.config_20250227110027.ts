import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "var(--background)",
        foreground: "var(--foreground)",
        emerald: {
          50: "#E6FDFF",
          100:"#CCFBF1",
          200: "#99F6E4",
          300: "#5EEDCD",
          400 : "2DD4B8", 
          500 : "14B89D",
          600 : "#0",
          700 : " ",
          800 : "",
          900 : " ",  
          950 : "",

        }

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;


