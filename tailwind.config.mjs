/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.700'),
            maxWidth: 'none',
            a: {
              color: theme('colors.zinc.900'),
              textUnderlineOffset: '3px',
            },
            'h1,h2,h3,h4': {
              color: theme('colors.zinc.900'),
              fontWeight: '600',
            },
            code: {
              color: theme('colors.zinc.800'),
              backgroundColor: theme('colors.zinc.100'),
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              fontSize: '0.875em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: theme('colors.zinc.900'),
              color: theme('colors.zinc.100'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.zinc.300'),
            a: { color: theme('colors.zinc.100') },
            'h1,h2,h3,h4': { color: theme('colors.zinc.50') },
            code: {
              color: theme('colors.zinc.200'),
              backgroundColor: theme('colors.zinc.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
