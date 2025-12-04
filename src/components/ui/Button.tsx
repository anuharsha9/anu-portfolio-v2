'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { buttonHover, buttonTap } from '@/lib/animations'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  href?: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  target,
  rel,
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-x-2 px-5 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300'
  
  // Add animation class for primary buttons
  const animationClass = variant === 'primary' ? 'btn-animated' : ''

  const variantClasses = {
    primary:
      'text-white hover:translate-y-[-2px]',
    ghost:
      'bg-transparent border border-current/20 text-current hover:translate-y-[-2px] hover:bg-accent-teal/10 hover:border-accent-teal/30',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${animationClass} ${className}`
  
  // Apply primary button styling with teal accent
  const primaryStyle = variant === 'primary' ? {
    backgroundColor: 'var(--accent-teal)',
  } : {}

  if (href) {
    return (
      <motion.div 
        whileHover={buttonHover} 
        whileTap={buttonTap}
      >
        <Link 
          href={href} 
          target={target} 
          rel={rel} 
          className={classes} 
          style={primaryStyle}
          aria-label={typeof children === 'string' ? children : undefined}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      style={primaryStyle}
      whileHover={buttonHover}
      whileTap={buttonTap}
      aria-label={typeof children === 'string' ? children : undefined}
      type="button"
    >
      {children}
    </motion.button>
  )
}
