'use client'

import { useState } from 'react'
import SocialShareButtons from './SocialShareButtons'

interface SharePortfolioButtonProps {
  className?: string
}

export default function SharePortfolioButton({ className = '' }: SharePortfolioButtonProps) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://anujaharsha.com'
  const portfolioTitle = 'Anuja Harsha Nimmagadda - Principal UX Designer Portfolio'
  const portfolioDescription = 'Principal UX Designer specializing in enterprise design, legacy modernization, and AI/ML UX. 13+ years transforming complex systems into intuitive experiences.'

  return (
    <div className={className}>
      <SocialShareButtons
        title={portfolioTitle}
        url={siteUrl}
        description={portfolioDescription}
      />
    </div>
  )
}

