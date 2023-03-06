/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      animationTiming: {
        cubic: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'reveal-up': 'reveal-up 500ms cubic-bezier(.13, .84, .82, 1)',
      },
      keyframes: {
        'reveal-up': {
          '0%, 50%': { opacity: '0', transform: 'translateY(0.8rem)', background: 'blue' },
          '100%': { opacity: '1', transform: 'translateY(0)', background: 'red' },
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-animation'),
  ],
}
