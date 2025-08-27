/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts}'],
  theme: {
    extend: {
      colors: {
      brand: {
          DEFAULT: '#22d3ee',
          soft: '#60a5fa'
        },
      ink: {
          DEFAULT: '#e5e7eb',
          muted: '#a8b3cf'
      },
      surface: {
          bg: '#0f172a',
          card: '#0b1222',
          border: '#1f2937'
      }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)'
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      fontFamily: {
        sans: ['Inter','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial','sans-serif']
      }
    }
  },
  plugins: []
};
