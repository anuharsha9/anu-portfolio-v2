import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        'bg-dark': 'var(--bg-dark)',
        'bg-dark-alt': 'var(--bg-dark-alt)',
        'bg-light': 'var(--bg-light)',
        'bg-light-alt': 'var(--bg-light-alt)',
        'text-primary-dark': 'var(--text-primary-dark)',
        'text-muted-dark': 'var(--text-muted-dark)',
        'text-primary-light': 'var(--text-primary-light)',
        'text-muted-light': 'var(--text-muted-light)',
        'accent-teal': 'var(--accent-teal)',
        'accent-teal-soft': 'var(--accent-teal-soft)',
        // Legacy support
        bg: 'var(--bg-dark)',
        surface: 'var(--bg-dark-alt)',
        accent: 'var(--accent-teal)',
        muted: 'var(--text-muted-dark)',
        text: 'var(--text-primary-dark)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      maxWidth: {
        'content': '1200px',
        'content-container': 'calc(1200px + 2rem)',
      },
      screens: {
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
