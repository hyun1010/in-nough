import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        primary: '#5051F9',
        secondary: '#1EA7FF',
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
