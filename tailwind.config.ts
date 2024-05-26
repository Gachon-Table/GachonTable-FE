import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        'tory-blue': '#014f9e',
        'dodger-blue': '#0096ff',
        'deep-cove': '#001140',
        'sunglo': '#de6868',
        'gallery': '#efeff0',
        'modal-rgba': 'rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
