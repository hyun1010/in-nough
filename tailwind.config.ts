import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        primary: '#5051F9',
        'primary-hover': '#3b47c8',
        'primary-active': '#4040c0',
        'primary-disabled': '#b3b8f7',
        secondary: '#1EA7FF',
        'secondary-hover': '#1796d3',
        'secondary-active': '#147bb2',
        'secondary-disabled': '#a3d8ff',
        bg_disabled: '#f6f6f6',
        text_disabled: '#888888',
        point: {
          green: '#34D870',
          orange: '#FF694A',
          yellow: '#F7B000',
        },
        neutral: {
          1: '#1C1243',
          2: '#A29EB6',
          3: '#EFF1F3',
        },
        gray: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#505050',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
      },
      fontFamily: {
        'dm-sans': [
          'var(--dm-sans)',
          'var(--noto-sans)',
          'dotum',
          'system-ui',
          'sans-serif',
        ],
        'noto-sans': ['var(--noto-sans)', 'dotum', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        title: ['1.5rem', { lineHeight: '1.8rem', fontWeight: '700' }],
        headline_1: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        headline_2: ['1rem', { lineHeight: '1.5rem' }],
        body_bold: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        body_medium: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        caption_medium: [
          '0.75rem',
          { lineHeight: '1.25rem', fontWeight: '500' },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
