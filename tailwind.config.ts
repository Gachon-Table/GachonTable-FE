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
        'tory-blue': '#014f9e',
        'dodger-blue': '#0096ff',
        'deep-cove': '#001140',
        'sunglo': '#de6868',
        'gallery': '#efeff0',
        'modal-rgba': 'rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        '30rem': '30rem',// 하단 네비게이션바 width설정하기 위함
      },
    },
  },
  // plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
