const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Images to optimize (large files > 1MB)
const largeImages = [
  { src: 'public/images/suitcase-cover.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/case-study/ReportCaster/RC legacy distrubtion ui in basic schedule.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/case-study/iq-plugin/iq-cover.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/anuja-portrait.jpg', maxWidth: 1920, quality: 85 },
  { src: 'public/images/case-study/ReportCaster/rc-cover.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/Infinite-Cover.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/Kedazzle-cover.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/case-study/ml-functions/ml-functions-cover.png', maxWidth: 1920, quality: 85 },
  { src: 'public/images/anu-photo.jpeg', maxWidth: 1920, quality: 85 },
];

// Get all images in case-study root that might be unused
const caseStudyRootImages = [
  'public/images/case-study/Access List starting point.png',
  'public/images/case-study/After.png',
  'public/images/case-study/Before.png',
  'public/images/case-study/Distribution Dialog.png',
  'public/images/case-study/Distribution List starting point.png',
  'public/images/case-study/Early explorations - 1.png',
  'public/images/case-study/Early explorations - 2.png',
  'public/images/case-study/Final exploration UI.png',
  'public/images/case-study/Group 13.png',
  'public/images/case-study/Group 14.png',
  'public/images/case-study/Initiating ReportCaster.png',
  'public/images/case-study/Iteration 3.png',
  'public/images/case-study/Job Log.png',
  'public/images/case-study/Job log dialog.png',
  'public/images/case-study/Main scheduler starting point.png',
  'public/images/case-study/RC legacy - distribution dialog.png',
  'public/images/case-study/RC legacy access list UI.png',
  'public/images/case-study/RC legacy admin status.png',
  'public/images/case-study/RC legacy distribution list UI.png',
  'public/images/case-study/RC legacy distrubtion ui in basic schedule.png',
  'public/images/case-study/RC legacy explorer.png',
  'public/images/case-study/RC legacy schedule dialog distribution.png',
  'public/images/case-study/RC legacy schedule dialog properties.png',
  'public/images/case-study/ReportCaster Basic Workflow.png',
  'public/images/case-study/ReportCaster Explorer.png',
  'public/images/case-study/ReportCaster Status (Admin).png',
  'public/images/case-study/Schedule Dialog - distribution.png',
  'public/images/case-study/Schedule Dialog - Job Log.png',
  'public/images/case-study/Schedule Dialog - Properties.png',
  'public/images/case-study/Schedule Dialog - Recurrences.png',
  'public/images/case-study/Schedule dialog - tasks.png',
  'public/images/case-study/Table Styling Guide.png',
  'public/images/case-study/Task Dialog.png',
  'public/images/case-study/industry comparison of rc with other schedulers.png',
];

async function optimizeImage(imagePath, maxWidth = 1920, quality = 85) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.log(`⚠️  File not found: ${imagePath}`);
      return;
    }

    const stats = fs.statSync(imagePath);
    const originalSize = stats.size;
    const ext = path.extname(imagePath).toLowerCase();
    const isJpeg = ['.jpg', '.jpeg'].includes(ext);
    const isPng = ext === '.png';

    if (!isJpeg && !isPng) {
      console.log(`⚠️  Skipping non-image file: ${imagePath}`);
      return;
    }

    console.log(`\n🔄 Optimizing: ${imagePath}`);
    console.log(`   Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }

    const tempPath = imagePath + '.tmp';
    let sharpInstance = image.resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true,
    });

    if (isJpeg) {
      sharpInstance = sharpInstance.jpeg({ quality, mozjpeg: true });
    } else if (isPng) {
      sharpInstance = sharpInstance.png({ quality: Math.round(quality * 0.9), compressionLevel: 9 });
    }

    await sharpInstance.toFile(tempPath);
    
    // Replace original with optimized version
    fs.renameSync(tempPath, imagePath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`   ✅ Optimized size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   📉 Reduction: ${reduction}%`);
  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // Optimize large images
  for (const img of largeImages) {
    await optimizeImage(img.src, img.maxWidth, img.quality);
  }

  console.log('\n\n📋 Case Study Root Images (potentially unused):');
  console.log('   These images are in /case-study/ root and may be unused:');
  caseStudyRootImages.forEach(img => {
    if (fs.existsSync(img)) {
      const stats = fs.statSync(img);
      console.log(`   - ${path.basename(img)} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    }
  });
  console.log('\n   ⚠️  Review these manually before deleting.');

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);

