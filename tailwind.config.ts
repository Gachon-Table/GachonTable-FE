/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      padding: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        pro: '390px',
        pixel: '412px',
        promax: '430px',
      },
      colors: {
        'primary-400': '#1043A4',
        'primary-200': '#EDF6FF',
        'green-400': '#00A72F',
        'green-200': '#E1FFE6',
        'red-400': '#FF3D00',
        'red-200': '#FFE9E9',
        'orange-400': '#FF6A2A',
        'orange-200': '#FFF0E6',
        'yellow-400': '#FF9900',
        'yellow-200': '#FFF8E0',
        'blue-400': '#4666F1',
        'blue-200': '#E6F2FF',
        'pink-400': '#FF36D0',
        'pink-200': '#FFEEFB',
        wt: '#FFFFFF',
        bk: '#0F0F0F',
        'gy-0': '#F4F4F4',
        'gy-100': '#EEEEEE',
        'gy-200': '#DFDFDF',
        'gy-300': '#B2B2B2',
        'gy-400': '#939393',
        'gy-500': '#797979',
        'gy-600': '#626262',
        'gy-700': '#3E3E3E',
        'gy-800': '#2A2A2A',
        'gy-900': '#1B1B1B',
        kakao: '#FEE500',
      },
      boxShadow: {
        'client-item': '0px 4px 7px 0px rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        '31rem': '31rem',
        '30rem': '30rem',
        '28rem': '28rem',
      },
      height: {
        '4/10': '40%',
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
  plugins: [
    ({ addUtilities }: any) => {
      addUtilities({
        '.font-default': {},
        '.font-num': {
          '@apply font-default font-semibold': {},
          fontSize: '32px',
          lineHeight: '32px',
          letterSpacing: '-0.025em',
        },
        '.font-h1': {
          '@apply font-default font-bold': {},
          fontSize: '24px',
          lineHeight: '32px',
          letterSpacing: '-0.025em',
        },

        '.font-h2': {
          '@apply font-default font-bold': {},
          fontSize: '22px',
          lineHeight: '30px',
          letterSpacing: '-0.025em',
        },

        '.font-h3': {
          '@apply font-default font-semibold': {},
          fontSize: '20px',
          lineHeight: '28px',
          letterSpacing: '-0.02em',
        },

        '.font-h4': {
          '@apply font-default font-semibold': {},
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '-0.01em',
        },

        '.font-b1-normal-semibold': {
          '@apply font-default font-semibold': {},
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '-0.01em',
        },

        '.font-b1-normal-medium': {
          '@apply font-default font-medium': {},
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '-0.01em',
        },

        '.font-b1-long': {
          '@apply font-default font-regular': {},
          fontSize: '16px',
          lineHeight: '26px',
          letterSpacing: '-0.01em',
        },

        '.font-b2-normal-semibold': {
          '@apply font-default font-semibold': {},
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.005em',
        },

        '.font-b2-normal-medium': {
          '@apply font-default font-medium': {},
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.005em',
        },

        '.font-b2-long': {
          '@apply font-default font-regular': {},
          fontSize: '14px',
          lineHeight: '22px',
          letterSpacing: '-0.005em',
        },

        '.font-c1-semibold': {
          '@apply font-default font-semibold': {},
          fontSize: '12px',
          lineHeight: '18px',
          letterSpacing: '0',
        },

        '.font-c1-medium': {
          '@apply font-default font-medium': {},
          fontSize: '12px',
          lineHeight: '18px',
          letterSpacing: '0',
        },

        '.font-c2-semibold': {
          '@apply font-default font-semibold': {},
          fontSize: '11px',
          lineHeight: '16px',
          letterSpacing: '0',
        },

        '.font-c2-medium': {
          '@apply font-default font-medium': {},
          fontSize: '11px',
          lineHeight: '16px',
          letterSpacing: '0',
        },
      });
    },
  ],
};
export default config;
