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
        mono: ['var(--font-mono)'],
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
        'accent-teal-50': 'var(--accent-teal-50)',
        'accent-teal-100': 'var(--accent-teal-100)',
        'accent-teal-200': 'var(--accent-teal-200)',
        'accent-teal-300': 'var(--accent-teal-300)',
        'accent-teal-400': 'var(--accent-teal-400)',
        'accent-teal-500': 'var(--accent-teal-500)',
        'accent-teal-600': 'var(--accent-teal-600)',
        'accent-teal-700': 'var(--accent-teal-700)',
        'accent-teal-800': 'var(--accent-teal-800)',
        'accent-teal-900': 'var(--accent-teal-900)',
        'highlight': 'var(--highlight)',
        'highlight-soft': 'var(--highlight-soft)',
        'highlight-hover': 'var(--highlight-hover)',
        'highlight-active': 'var(--highlight-active)',
        'color-success': 'var(--color-success)',
        'color-warning': 'var(--color-warning)',
        'color-error': 'var(--color-error)',
        'color-info': 'var(--color-info)',
        // Legacy support
        bg: 'var(--bg-dark)',
        surface: 'var(--bg-dark-alt)',
        accent: 'var(--accent-teal)',
        muted: 'var(--text-muted-dark)',
        text: 'var(--text-primary-dark)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      transitionTimingFunction: {
        'spring': 'var(--ease-spring)',
        'smooth': 'var(--ease-smooth)',
        'bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      letterSpacing: {
        'tighter': 'var(--tracking-tighter)',
        'tight': 'var(--tracking-tight)',
        'normal': 'var(--tracking-normal)',
        'wide': 'var(--tracking-wide)',
        'wider': 'var(--tracking-wider)',
      },
      lineHeight: {
        'tight': 'var(--leading-tight)',
        'snug': 'var(--leading-snug)',
        'normal': 'var(--leading-normal)',
        'relaxed': 'var(--leading-relaxed)',
        'loose': 'var(--leading-loose)',
      },
      maxWidth: {
        'content': '1200px',
        'content-container': 'calc(1200px + 2rem)',
      },
      screens: {
        'xs': '475px',   // Extra small devices
        'sm': '640px',   // Small devices (default Tailwind)
        'md': '768px',   // Medium devices (default Tailwind)
        'lg': '1024px',  // Large devices (default Tailwind)
        'xl': '1280px',  // Extra large devices (default Tailwind)
        '2xl': '1536px', // 2X large devices (default Tailwind)
        '3xl': '1920px', // Ultra wide screens
      },
    },
  },
  plugins: [],
}
export default config
