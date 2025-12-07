/**
 * Design System - Single source of truth for all styling
 * 
 * This file centralizes all design decisions. Change values here
 * and they propagate across the entire application.
 * 
 * Colors reference CSS variables from /src/styles/tokens.css
 * Tailwind extensions are in /tailwind.config.ts
 */

// =============================================================================
// CSS VARIABLE REFERENCES (for inline styles)
// =============================================================================

export const cssVars = {
  // Brand colors
  accent: 'var(--accent-teal)',
  accent50: 'var(--accent-teal-50)',
  accent100: 'var(--accent-teal-100)',
  accent700: 'var(--accent-teal-700)',

  // Backgrounds
  bgLight: 'var(--bg-light)',
  bgLightAlt: 'var(--bg-light-alt)',
  bgDark: 'var(--bg-dark)',
  bgDarkAlt: 'var(--bg-dark-alt)',

  // Text colors
  textLight: 'var(--text-primary-light)',
  textDark: 'var(--text-primary-dark)',
  textMutedLight: 'var(--text-muted-light)',
  textMutedDark: 'var(--text-muted-dark)',
} as const

// =============================================================================
// TAILWIND CLASS CONSTANTS
// =============================================================================

// Text colors (using CSS variables from tokens.css)
const TEXT = {
  // Light theme text (for light backgrounds)
  heading: 'text-[var(--text-heading)]',    // slate-900
  body: 'text-[var(--text-body)]',          // slate-600
  muted: 'text-[var(--text-muted)]',        // slate-500
  accent: 'text-[var(--accent-teal)]',
  // Legacy aliases
  light: 'text-[var(--text-primary)]',      // slate-900
  dark: 'text-white',
  mutedLight: 'text-[var(--text-body)]',    // slate-600
  mutedDark: 'text-white/70',
} as const

// Background colors (using CSS variables)
const BG = {
  primary: 'bg-[var(--bg-primary)]',        // slate-50
  secondary: 'bg-[var(--bg-secondary)]',    // white
  tertiary: 'bg-[var(--bg-tertiary)]',      // slate-100
  // Legacy aliases
  light: 'bg-[var(--bg-light)]',
  lightAlt: 'bg-[var(--bg-light-alt)]',
  dark: 'bg-[var(--bg-dark)]',
  darkAlt: 'bg-[var(--bg-dark-alt)]',
  surface: {
    light: 'bg-[var(--bg-secondary)]',      // white
    lightSubtle: 'bg-[var(--bg-tertiary)]', // slate-100
    dark: 'bg-[var(--bg-tertiary)]',        // slate-100 (light theme)
    darkSubtle: 'bg-[var(--bg-primary)]',   // slate-50
  },
  accent: {
    light: 'bg-[var(--accent-teal-soft)]',
    dark: 'bg-[var(--accent-teal-soft)]',
  },
} as const

// Border colors (using CSS variables)
const BORDER = {
  primary: 'border-[var(--border-primary)]',  // slate-200
  secondary: 'border-[var(--border-secondary)]', // slate-300
  subtle: 'border-[var(--border-subtle)]',    // slate-100
  // Legacy aliases
  light: 'border-[var(--border-primary)]',
  dark: 'border-[var(--border-primary)]',
  accent: {
    light: 'border-[var(--accent-teal)]/30',
    dark: 'border-[var(--accent-teal)]/30',
  },
} as const

// Divider colors
const DIVIDER = {
  primary: 'bg-[var(--border-primary)]',
  light: 'bg-[var(--border-primary)]',
  dark: 'bg-[var(--border-primary)]',
} as const

// =============================================================================
// THEME INTERFACE
// =============================================================================

export interface Theme {
  // Text
  text: string
  textMuted: string
  textAccent: string

  // Backgrounds
  bg: string
  bgAlt: string
  bgAccent: string

  // Borders
  border: string
  borderAccent: string

  // Surfaces & Dividers
  divider: string
  surface: string
  cardBg: string

  // CSS Variable (for inline styles)
  accentVar: string

  // Context
  isLight: boolean
}

/**
 * Get all theme-aware classes for a component
 * Now always returns light theme values (Architect aesthetic)
 * @param isLight - Deprecated, always uses light theme
 * @returns Theme object with all class strings
 * 
 * @example
 * const t = getTheme(true)
 * return <div className={`${t.bg} ${t.text}`}>...</div>
 */
export function getTheme(isLight: boolean = true): Theme {
  // Always use light theme (Architect aesthetic)
  return {
    text: TEXT.heading,           // slate-900
    textMuted: TEXT.body,         // slate-600
    textAccent: TEXT.accent,      // teal

    bg: BG.primary,               // slate-50
    bgAlt: BG.secondary,          // white
    bgAccent: BG.accent.light,    // teal soft

    border: BORDER.primary,       // slate-200
    borderAccent: BORDER.accent.light,

    divider: DIVIDER.primary,     // slate-200
    surface: 'bg-[var(--bg-secondary)]',
    cardBg: BG.secondary,         // white

    accentVar: cssVars.accent,
    isLight: true,
  }
}

// Legacy alias
export const getThemeClasses = getTheme

// =============================================================================
// TYPOGRAPHY PRESETS
// =============================================================================

export const typography = {
  // Headings
  h1: 'text-4xl md:text-5xl font-serif leading-tight tracking-tight',
  h2: 'text-3xl md:text-4xl font-serif leading-snug tracking-tight',
  h3: 'text-2xl md:text-3xl font-serif',
  h4: 'text-xl md:text-2xl font-serif',
  h5: 'text-lg md:text-xl font-semibold',

  // Body text
  body: 'text-base md:text-lg leading-relaxed',
  bodySmall: 'text-sm md:text-base leading-relaxed',

  // Labels & captions
  label: 'text-xs font-mono uppercase tracking-wider',
  caption: 'text-xs leading-relaxed',

  // Emphasis
  bold: 'font-semibold',
  italic: 'italic',
} as const

// =============================================================================
// SPACING PRESETS
// =============================================================================

export const spacing = {
  // Section padding
  section: 'py-12 md:py-16 lg:py-24',
  sectionCompact: 'py-8 md:py-12 lg:py-16',

  // Container
  container: 'px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16',
  containerMax: 'max-w-[1200px] mx-auto',
  containerFull: 'max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16',

  // Component spacing
  stack: {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12',
  },

  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  },
} as const

// =============================================================================
// EFFECT PRESETS
// =============================================================================

export const effects = {
  // Border radius
  rounded: {
    sm: 'rounded-lg',       // 16px
    md: 'rounded-xl',       // 24px
    lg: 'rounded-2xl',      // 32px
    full: 'rounded-full',
  },

  // Shadows
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },

  // Transitions
  transition: {
    fast: 'transition-all duration-150',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },

  // Hover effects
  hover: {
    lift: 'hover:-translate-y-1 hover:shadow-lg',
    scale: 'hover:scale-[1.02]',
    glow: 'hover:shadow-[0_8px_16px_rgba(0,162,183,0.15)]',
  },
} as const

// =============================================================================
// COMPONENT PRESETS
// =============================================================================

export const components = {
  // Card styles
  card: (isLight: boolean) => ({
    base: `${isLight ? BG.surface.light : BG.surface.dark} rounded-lg border ${isLight ? BORDER.light : BORDER.dark}`,
    interactive: `${isLight ? BG.surface.light : BG.surface.dark} rounded-lg border ${isLight ? BORDER.light : BORDER.dark} ${effects.transition.normal} ${effects.hover.scale} hover:shadow-lg`,
    accent: `${isLight ? BG.surface.light : BG.surface.dark} rounded-lg border-2 ${effects.transition.normal}`,
  }),

  // Section header
  sectionHeader: (isLight: boolean) => ({
    wrapper: 'text-center space-y-3',
    title: `${isLight ? TEXT.light : TEXT.dark} ${typography.h3}`,
    subtitle: `${isLight ? TEXT.mutedLight : TEXT.mutedDark} ${typography.body} max-w-2xl mx-auto`,
  }),

  // Button styles
  button: {
    primary: 'bg-accent-teal text-white px-6 py-3 rounded-lg font-medium transition-colors hover:bg-accent-teal-700',
    secondary: 'bg-black/5 text-[#111111] px-6 py-3 rounded-lg font-medium transition-colors hover:bg-black/10',
    ghost: 'text-accent-teal hover:text-accent-teal-700 transition-colors',
  },
} as const

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Combine class strings, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Create a responsive class string
 * @example responsive('p-4', 'p-6', 'p-8') => 'p-4 md:p-6 lg:p-8'
 */
export function responsive(mobile: string, tablet?: string, desktop?: string): string {
  return cn(mobile, tablet && `md:${tablet}`, desktop && `lg:${desktop}`)
}
