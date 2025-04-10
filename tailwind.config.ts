import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: {
          50: '#f6f3ff',
          100: '#eee9fe',
          200: '#dfd6fe',
          300: '#c7b5fd',
          400: '#ac8bfa',
          500: '#8c56f0',
          600: '#8338ec',
          700: '#7529d8',
          800: '#6222b5',
          900: '#521d95',
          950: '#321065',
          a100: '#B388FF',
          a200: '#7C4DFF',
          a400: '#651FFF',
          a700: '#6200EA',
        },
        secondary: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdbff',
          300: '#8ec6ff',
          400: '#59a5ff',
          500: '#3a86ff',
          600: '#1b60f5',
          700: '#144be1',
          800: '#173db6',
          900: '#19388f',
          950: '#142357',
          a100: '#80D8FF',
          a200: '#40C4FF',
          a400: '#3D5AFE',
          a700: '#304FFE',
        },
        'light-green': {
          50: '#F1F8E9',
          100: '#DCEDC8',
          200: '#C5E1A5',
          300: '#AED581',
          400: '#9CCC65',
          500: '#8BC34A',
          600: '#7CB342',
          700: '#689F38',
          800: '#558B2F',
          900: '#33691E',
          a100: '#CCFF90',
          a200: '#B2FF59',
          a400: '#76FF03',
          a700: '#64DD17',
        },
        green: {
          50: '#E3FAD6',
          100: '#C2F6AE',
          200: '#93E380',
          300: '#66C95B',
          400: '#2FA52D',
          500: '#208D28',
          600: '#167625',
          700: '#0E5F21',
          800: '#084F1F',
          900: '#074119',
        },
        orange: {
          50: '#fffbea',
          100: '#fff2c5',
          200: '#ffe585',
          300: '#ffd046',
          400: '#ffbb1b',
          500: '#ff9b0a',
          600: '#f77f00',
          700: '#CC6002',
          800: '#A14A0B',
          900: '#823E0C',
          a100: '#FFD180',
          a200: '#FFAB40',
          a400: '#FF9100',
          a700: '#FF6D00',
        },
        yellow: {
          50: '#FEFBE8',
          100: '#FEF7C3',
          200: '#FEEE95',
          300: '#FDE272',
          400: '#FAC515',
          500: '#EAAA08',
          600: '#CA8504',
          700: '#A15C07',
          800: '#854A0E',
          900: '#713B12',
          950: '#542C0D ',
        },
        red: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
          950: '#542C0D',
          a100: '#FF8A80',
          a200: '#FF5252',
          a400: '#FF1744',
          a700: '#D50000 ',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        'primary-gray': {
          50: '#f9f7fb',
          100: '#f3f0f7',
          200: '#e7e0f0',
          300: '#d8cce6',
          400: '#c3aed7',
          500: '#ad8dc5',
          600: '#9c73b4',
          700: '#8a60a1',
          800: '#735087',
          900: '#60436f',
          950: '#3e2b4a',
        },
        social: {
          kakao: '#fddc3f',
          kakao_text: '#3a2929',
          naver: '#00c300',
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
        logo: ['var(--archivo-black)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        title: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        headline_1: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        headline_2: ['1rem', { lineHeight: '1.5rem' }],
        body_bold: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        body_medium: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        body_nomal: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        caption_medium: [
          '0.75rem',
          { lineHeight: '1.25rem', fontWeight: '500' },
        ],
        caption_nomal: [
          '0.75rem',
          { lineHeight: '1.25rem', fontWeight: '400' },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
