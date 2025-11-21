/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          magenta: '#ff00ff',
          blue: '#0080ff',
          purple: '#8000ff',
          pink: '#ff0080',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#111111',
          border: '#1a1a1a',
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        'neon-magenta': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
        'neon-blue': '0 0 10px #0080ff, 0 0 20px #0080ff, 0 0 30px #0080ff',
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 10px currentColor, 0 0 20px currentColor' },
          '50%': { opacity: 0.8, boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
        },
      },
    },
  },
  plugins: [],
}

