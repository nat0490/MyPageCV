import type { Config } from "tailwindcss";
// import plugin from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
      animation: {
        fadeIn: 'fadeIn forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Safari et Chrome */
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
