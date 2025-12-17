#!/usr/bin/env node
/**
 * Generate favicon PNG files from the signature SVG with rounded corners
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/anuja-sign.svg');
const publicDir = path.join(__dirname, '../public');
const brandDir = path.join(__dirname, '../public/brand/signature');

// All favicon sizes needed
const favicons = [
  // Root public directory
  { name: 'favicon-16x16.png', size: 16, dir: publicDir },
  { name: 'favicon-32x32.png', size: 32, dir: publicDir },
  { name: 'apple-touch-icon.png', size: 180, dir: publicDir },
  { name: 'icon-192.png', size: 192, dir: publicDir },
  { name: 'icon-512.png', size: 512, dir: publicDir },
  // Brand/signature directory
  { name: 'favicon-16x16.png', size: 16, dir: brandDir },
  { name: 'favicon-32x32.png', size: 32, dir: brandDir },
  { name: 'apple-touch-icon.png', size: 180, dir: brandDir },
  { name: 'favicon-192x192.png', size: 192, dir: brandDir },
  { name: 'favicon-512x512.png', size: 512, dir: brandDir },
];

/**
 * Create a rounded rectangle SVG mask
 * @param {number} size - Width and height of the mask
 * @param {number} radius - Corner radius (as percentage of size, e.g., 0.2 = 20%)
 */
function createRoundedMask(size, radiusPercent = 0.38) {
  const radius = Math.round(size * radiusPercent);
  return Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/>
    </svg>
  `);
}

/**
 * Generate a favicon with rounded corners
 */
async function generateRoundedFavicon(svgBuffer, size, outputPath) {
  // First, resize the SVG to the target size
  const resizedImage = await sharp(svgBuffer)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 } // White background
    })
    .png()
    .toBuffer();

  // Create rounded mask
  const mask = createRoundedMask(size);

  // Apply the rounded mask
  const roundedImage = await sharp(resizedImage)
    .composite([
      {
        input: await sharp(mask).resize(size, size).png().toBuffer(),
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(outputPath);

  return roundedImage;
}

async function generateFavicons() {
  console.log('📷 Generating favicon PNG files with rounded corners...\n');

  // Read the SVG
  const svgBuffer = fs.readFileSync(svgPath);

  for (const { name, size, dir } of favicons) {
    const outputPath = path.join(dir, name);

    await generateRoundedFavicon(svgBuffer, size, outputPath);

    const relativePath = path.relative(publicDir, outputPath);
    console.log(`  ✅ ${relativePath || name} (${size}x${size})`);
  }

  // Generate favicon.ico (multi-size ICO file) - using 32x32 as base
  const icoPath = path.join(publicDir, 'favicon.ico');
  const tempPngPath = icoPath.replace('.ico', '-temp.png');

  await generateRoundedFavicon(svgBuffer, 32, tempPngPath);

  // Copy the 32x32 PNG as ICO (browsers accept PNG as ICO)
  const tempPng = fs.readFileSync(tempPngPath);
  fs.writeFileSync(icoPath, tempPng);
  fs.unlinkSync(tempPngPath);
  console.log(`  ✅ favicon.ico (32x32)`);

  console.log('\n✅ All favicon files generated with rounded corners!');
}

generateFavicons().catch(err => {
  console.error('❌ Error generating favicons:', err);
  process.exit(1);
});
