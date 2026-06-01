/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0E0F14',
          surface: '#13141A',
          card: '#1A1B22',
          chip: '#20212A',
          elevated: '#262732',
        },
        line: {
          DEFAULT: '#26262C',
          soft: '#1E1E24',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#9CA3AF',
          dim: '#6B7280',
        },
        accent: {
          DEFAULT: '#7B2FF7',
          hover: '#8A45FF',
          soft: '#A26BFF',
        },
        promo: {
          orange: '#FF7A1A',
          red: '#E0361B',
          deepred: '#3A0F11',
        },
        gold: '#F2C94C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'sans-serif'],
        casino: ['"Black Ops One"', '"Inter Tight"', 'sans-serif'],
        'base-runner': ['"Base Runner JNL"', '"Black Ops One"', '"Inter Tight"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 18px rgba(0,0,0,0.6)',
        glow: '0 0 24px rgba(123,47,247,0.45)',
      },
      borderRadius: {
        card: '14px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #7B2FF7 0%, #A26BFF 100%)',
        'promo-red': 'linear-gradient(135deg, #FF7A1A 0%, #E0361B 60%, #7A1A1F 100%)',
        'promo-dark': 'linear-gradient(135deg, #3A0F11 0%, #1A0A0A 100%)',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'slide-up': { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-in': 'fade-in 150ms ease-out',
        'slide-up': 'slide-up 180ms ease-out',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
