import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
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
    },
  },
  plugins: [],
} satisfies Config;
