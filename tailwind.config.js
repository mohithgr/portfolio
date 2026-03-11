// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
       perspective: {
        '1000': '1000px',
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
         'swim': 'swim 3s infinite',
         'slowfloat2s': 'slowfloat 2s infinite alternate',
        'slowfloat3s': 'slowfloat 3s infinite alternate',
        'vertical-scroll': 'vertical-scroll 20s linear infinite',
  'vertical-scroll-paused': 'vertical-scroll 20s linear infinite paused', 
  'scrollUp': 'scrollUp 12s linear infinite',
       'lefttoright': 'lefttoright 11.4s infinite',
        'first-part': 'first-part 1.8s ease-in-out infinite',
        'second-part': 'second-part 1.8s ease-in-out infinite',
        'leg-move-1': 'leg-move-1 1.8s infinite',
        'leg-move-2': 'leg-move-2 1.6s infinite',
        'leg-move-3': 'leg-move-3 1.8s infinite',
        'leg-move-4': 'leg-move-4 1.6s infinite',
        'leg-move-5': 'leg-move-5 2s infinite',
        'leg-move-6': 'leg-move-6 2s infinite',
        'wave': 'wave 6s linear infinite',
           wave1: 'wave1 10s linear infinite',
      wave2: 'wave2 15s linear infinite',
      wave3: 'wave3 20s linear infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        swim: {
          '0%, 100%': {
            transform: 'translateX(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateX(10px) rotate(3deg)',
          },
        },
        slowfloat: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
          'vertical-scroll': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scrollUp': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-510px)' }, // ← You’ll override this in class if needed
        },
           'lefttoright': {
          '0%': { left: '40%' },
          '50%': { left: '62%' },
          '100%': { left: '40%' },
        },
        'first-part': {
          '50%': { transform: 'rotate(-40deg)' },
        },
        'second-part': {
          '50%': { transform: 'rotate(40deg)' },
        },
        'leg-move-1': {
          '10%': { transform: 'rotate(0.1deg)' },
        },
        'leg-move-2': {
          '40%': { transform: 'rotate(0.1deg)' },
        },
        'leg-move-3': {
          '80%': { transform: 'rotate(0.1deg)' },
        },
        'leg-move-4': {
          '10%': { transform: 'scaleX(-1) rotate(0.1deg)' },
        },
        'leg-move-5': {
          '40%': { transform: 'scaleX(-1) rotate(0.1deg)' },
        },
        'leg-move-6': {
          '80%': { transform: 'scaleX(-1) rotate(0.1deg)' },
        },
          wave: {
          '0%': { 'background-position-x': '0' },
          '100%': { 'background-position-x': '1000px' },
        },
         wave1: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      wave2: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      wave3: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      },
    },
  },
  plugins: [],
};