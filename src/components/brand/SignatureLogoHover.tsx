import React from 'react'
import SignatureLogo from './SignatureLogo'

interface SignatureLogoHoverProps {
  className?: string
}

/**
 * Small, interactive logo for nav / clickable brand elements.
 * Pure CSS/Tailwind hover effects: scale up + soft glow.
 */
export default function SignatureLogoHover({ className = '' }: SignatureLogoHoverProps) {
  return (
    <div
      className={`w-7 h-7 text-white/90 transition-all duration-300 hover:scale-[1.05] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${className}`}
    >
      <SignatureLogo className="w-full h-full" />
    </div>
  )
}

