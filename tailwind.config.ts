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
        'main-blue': '#3B4D9B',
        'bg-white': '#F2F4F6',
        'point-yellow': '#FFD479',
        'point-blue': '#EAEFFF',
        'point-red': '#E87567',
        'point-grey': '#EFEFF0',
        'tory-blue': '#014f9e',
        'dodger-blue': '#0096ff',
        'deep-cove': '#001140',
        'sunglo': '#de6868',
        'gallery': '#efeff0',
        'modal-rgba': 'rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        '31rem': '31rem',
        '30rem': '30rem',
        '28rem': '28rem',
      },
      height: {
        '4/10': '40%', // height: 30%
        '690': '43.125rem',
        '550': '34.375rem',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 2s ease-in-out infinite',
      },
    },
  },
  // plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
