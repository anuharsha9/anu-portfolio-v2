const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// OG Image dimensions (standard)
const WIDTH = 1200
const HEIGHT = 630

// Colors from your design system
const BG_DARK = '#0B0C0E'
const BG_DARK_ALT = '#111217'
const ACCENT_TEAL = '#0D9488'
const TEXT_PRIMARY = '#F5F5F5'
const TEXT_MUTED = '#A0A3B1'

async function generateOGImage() {
  try {
    // Create SVG with text and logo
    const svg = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${BG_DARK};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${BG_DARK_ALT};stop-opacity:1" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:transparent;stop-opacity:1" />
            <stop offset="50%" style="stop-color:${ACCENT_TEAL};stop-opacity:1" />
            <stop offset="100%" style="stop-color:transparent;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradient)"/>
        
        <!-- Accent line at bottom -->
        <rect x="0" y="${HEIGHT - 4}" width="${WIDTH}" height="4" fill="url(#accentGradient)"/>
        
        <!-- Main Content -->
        <g transform="translate(${WIDTH / 2}, ${HEIGHT / 2 - 40})">
          <!-- Signature Logo (centered above name) -->
          <g transform="translate(0, -120) scale(0.2)" opacity="0.8">
            <path
              d="M165.51,328.44c-6.84.4,24.01-59.95,26.26-64.59M191.76,263.85c.92-1.9,1.86-3.85,2.8-5.84M191.76,263.85c-6.63.27-12.92.52-18.73.77M191.76,263.85c14.52-.59,30.69-1.23,47.12-1.9M194.57,258.02c-7.34,2.23-14.61,4.45-21.54,6.6M194.57,258.02c16.36-4.97,33.13-9.99,47.56-14.48M194.57,258.02c59.09-112.31,80.8-280.21,47.56-14.48M242.12,243.53c-.99,5.86-2.07,11.98-3.24,18.42M242.12,243.53c25.94-8.08,53.29-15.76,75.95-31.15M238.88,261.96c17.35-.7,34.97-1.43,51.25-2.14M238.88,261.96c-5.13,28.16-11.09,56.17-17.31,84.11M221.57,346.07c30.4-20.54,50.18-55.43,68.56-86.26M221.57,346.07c-30.06,134.96-215.51-11.86-136.56-49.9M221.57,346.07c-38.96,26.33-145.63,9.02-136.56-49.9M85.02,296.17c27.97-13.48,58.4-22.35,88.02-31.55M85.02,296.17c5.68-36.91,64.18-30.56,88.02-31.55M318.08,212.38c-8.81,14.98-19.01,32.43-27.95,47.43M318.08,212.38c59.48-40.34,49.71-84.53,0,0ZM290.13,259.81c42.97-1.88,25.93-1.71,68.86-3.51"
              stroke="${TEXT_PRIMARY}"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </g>
          
          <!-- Name -->
          <text
            x="0"
            y="0"
            font-family="'DM Serif Display', serif"
            font-size="72"
            font-weight="400"
            fill="${TEXT_PRIMARY}"
            text-anchor="middle"
            letter-spacing="-0.02em"
          >
            Anuja Harsha Nimmagadda
          </text>
          
          <!-- Title -->
          <text
            x="0"
            y="100"
            font-family="'DM Serif Display', serif"
            font-size="32"
            font-weight="400"
            fill="${ACCENT_TEAL}"
            text-anchor="middle"
            letter-spacing="0.01em"
          >
            Principal UX Designer
          </text>
          
          <!-- Tagline -->
          <text
            x="0"
            y="160"
            font-family="'Inter Tight', system-ui, sans-serif"
            font-size="24"
            font-weight="300"
            fill="${TEXT_MUTED}"
            text-anchor="middle"
          >
            Transforming complex enterprise systems into intuitive experiences
          </text>
        </g>
      </svg>
    `

    // Convert SVG to PNG/JPEG
    const outputPath = path.join(process.cwd(), 'public', 'images', 'og-image.jpg')
    
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outputPath)

    console.log(`✅ OG image generated successfully at ${outputPath}`)
    console.log(`   Dimensions: ${WIDTH}x${HEIGHT}px`)
    console.log(`   Format: JPEG (90% quality)`)
  } catch (error) {
    console.error('❌ Error generating OG image:', error)
    process.exit(1)
  }
}

generateOGImage()

