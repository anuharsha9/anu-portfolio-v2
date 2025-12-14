#!/usr/bin/env node
/**
 * Generate favicon PNG files from the signature SVG
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/brand/signature/signature-icon.svg');
const outputDir = path.join(__dirname, '../public/brand/signature');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('📷 Generating favicon PNG files...\n');

  // Read the SVG
  const svgBuffer = fs.readFileSync(svgPath);

  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    
    await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
      })
      .png()
      .toFile(outputPath);
    
    console.log(`  ✅ ${name} (${size}x${size})`);
  }

  console.log('\n✅ All favicon files generated successfully!');
}

generateFavicons().catch(err => {
  console.error('❌ Error generating favicons:', err);
  process.exit(1);
});
