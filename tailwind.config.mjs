/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Scandinavian minimal palette
        stone: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.stone.800'),
            a: {
              color: theme('colors.stone.900'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.stone.400'),
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: theme('colors.stone.700'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.stone.900'),
              fontWeight: '600',
            },
            code: {
              color: theme('colors.stone.800'),
              backgroundColor: theme('colors.stone.100'),
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme('colors.stone.300'),
            a: {
              color: theme('colors.stone.100'),
              textDecorationColor: theme('colors.stone.600'),
              '&:hover': {
                textDecorationColor: theme('colors.stone.400'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.stone.50'),
            },
            code: {
              color: theme('colors.stone.200'),
              backgroundColor: theme('colors.stone.800'),
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
