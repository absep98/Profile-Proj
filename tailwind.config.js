/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Karla', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        paper: 'var(--bg)',
        raised: 'var(--bg-raised)',
        ink: 'var(--ink)',
        soft: 'var(--ink-soft)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-tint': 'var(--accent-tint)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
