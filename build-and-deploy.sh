#!/bin/bash

# Build & Deploy Script - Runs alongside dev server
# Usage: ./build-and-deploy.sh

set -e  # Exit on any error

echo "🧹 Cleaning build directories..."
cd /Users/anu/Work/anu-portfolio-exploration
rm -rf out node_modules/.cache .turbo

echo "📦 Building production site..."
NODE_ENV=production npx next build

echo "🚀 Deploying to S3..."
# Upload static assets with long cache
aws s3 sync out/ s3://anujaharsha.com/ \
  --region us-east-1 \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt" \
  --exclude "*.json"

# Upload HTML files with no cache (use find to handle nested directories)
echo "📄 Uploading HTML files..."
find out -name "*.html" -type f | while read -r file; do
  # Get relative path from out/
  relative_path="${file#out/}"
  aws s3 cp "$file" "s3://anujaharsha.com/$relative_path" \
    --region us-east-1 \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html"
done

# Upload sitemap and robots.txt
if [ -f "out/sitemap.xml" ]; then
  aws s3 cp out/sitemap.xml s3://anujaharsha.com/sitemap.xml \
    --region us-east-1 \
    --content-type "application/xml" \
    --cache-control "public, max-age=3600"
fi

if [ -f "out/robots.txt" ]; then
  aws s3 cp out/robots.txt s3://anujaharsha.com/robots.txt \
    --region us-east-1 \
    --content-type "text/plain" \
    --cache-control "public, max-age=3600"
fi

echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E1RKSKYEABLX6E \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site will be live at https://anujaharsha.com in 1-3 minutes"
