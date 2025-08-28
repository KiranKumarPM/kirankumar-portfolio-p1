module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { 500: '#6366F1', 600: '#4F46E5', 700: '#4338CA' } },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        blink: { '0%,100%': { opacity: '0' }, '50%': { opacity: '1' } }
      },
      animation: { fadeInUp: 'fadeInUp 600ms ease-out both', blink: 'blink 1.2s step-end infinite' }
    }
  },
  plugins: []
};
