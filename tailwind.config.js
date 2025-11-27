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
          cyan: '#00f3ff', // Super Bright Cyan
          magenta: '#ff00ff', // Back to Bright Magenta for contrast
          blue: '#2563eb', // Rich Electric Blue
          purple: '#9333ea', // Deep Purple
          gold: '#facc15', // Gold for high contrast
        },
        dark: {
          bg: '#020617', // Very Dark Slate/Blue (Almost Black)
          card: '#0f172a', // Dark Slate
          border: '#1e293b', // Lighter Slate
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 243, 255, 0.5)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
        'neon-blue': '0 0 20px rgba(37, 99, 235, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
