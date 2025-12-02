import SignatureLogo from './SignatureLogo'

interface SectionDividerProps {
  isLightBackground?: boolean
  className?: string
}

/**
 * Subtle logo divider between major sections.
 * Creates brand continuity without being intrusive.
 */
export default function SectionDivider({ 
  isLightBackground = false,
  className = '' 
}: SectionDividerProps) {
  const logoColor = isLightBackground ? 'text-black' : 'text-white'
  const opacity = 'opacity-10'
  
  return (
    <div className={`flex justify-center pt-0 pb-8 md:pb-12 ${className}`}>
      <div className={`w-8 h-8 ${opacity}`}>
        <SignatureLogo className={`w-full h-full ${logoColor}`} />
      </div>
    </div>
  )
}

