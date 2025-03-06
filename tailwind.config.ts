import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: '#6200EE', // 강렬한 보라색
        'primary-hover': '#5600D4', // 조금 더 어두운 보라색
        'primary-active': '#4B00B8', // 더 어두운 보라색
        'primary-disabled': '#D1B5FF', // 부드럽고 연한 보라색
        purple: {
          50: '#faf5ff',
          100: '#f4e8ff',
          200: '#ebd5ff',
          300: '#dcb4fe',
          400: '#c484fc',
          500: '#ac55f7',
          600: '#9533ea',
          700: '#7e22ce',
          800: '#6921a8',
          900: '#551c87',
          950: '#390764',
        },
        secondary: '#1EA7FF', // 하늘색 계열은 그대로
        'secondary-hover': '#17A1D3',
        'secondary-active': '#138CB2',
        'secondary-disabled': '#A2D8FF',
        bg_disabled: '#F0F0F0', // 배경 비활성화 색상 조정
        text_disabled: '#A0A0A0', // 텍스트 비활성화 색상도 좀 더 부드럽게
        point: {
          green: '#34D870', // 그린 계열은 그대로
          orange: '#FF7043', // 더 자연스러운 오렌지
          yellow: '#FFB74D', // 좀 더 따뜻한 노랑
        },
        neutral: {
          1: '#1C1243', // 어두운 중립색
          2: '#A29EB6', // 기존의 부드러운 회색 계열
          3: '#EFF1F3', // 기존의 밝은 회색 계열
        },
        gray: {
          50: '#F7F7F7',
          100: '#E1E1E1',
          200: '#C4C4C4',
          300: '#A6A6A6',
          400: '#888888',
          500: '#707070', // 기본 회색을 좀 더 어두운 톤으로
          600: '#585858',
          700: '#404040',
          800: '#303030',
          900: '#202020', // 진한 회색 계열
          950: '#121212',
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
      },
      fontSize: {
        title: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
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
