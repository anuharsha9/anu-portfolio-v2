# Image Optimization Guide

## Current Status
- Images use Next.js `Image` component with `loading="lazy"` ✅
- `unoptimized: true` in next.config.js (required for static export) ⚠️
- No WebP conversion or responsive srcset ❌
- Images are not compressed ❌

## Recommended Approach

Since Next.js static export requires `unoptimized: true`, we need to manually optimize images before adding them to the project.

### Tools
1. **ImageMagick** (CLI) - For batch compression
2. **Squoosh** (Web) - For manual optimization
3. **Sharp** (Node.js) - For automated scripts

### Target Settings
- **Quality**: 70-80% (good balance of size vs quality)
- **Format**: WebP with JPG fallback
- **Max Width**: 1920px for full-width images
- **Max File Size**: < 500KB per image (aim for < 200KB when possible)

### Priority Images to Optimize
1. Case study cover images (largest impact)
2. Hero section images
3. Case study process images (if > 500KB)
4. Testimonial images (if any)

### Manual Process
1. Use Squoosh.app to optimize individual images
2. Export as WebP
3. Keep original JPG as fallback
4. Replace in `/public/images/` directory

### Automated Script (Future)
```bash
# Install sharp
npm install --save-dev sharp

# Run optimization script
node scripts/optimize-images.js
```

## Notes
- Static export limitation prevents Next.js automatic optimization
- Manual optimization is required before build
- Consider creating optimized versions in a separate folder structure

