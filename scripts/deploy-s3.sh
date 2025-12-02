#!/bin/bash

# S3 Deployment Script
# Usage: ./scripts/deploy-s3.sh [bucket-name] [region]

BUCKET_NAME="${1:-your-bucket-name}"
REGION="${2:-us-east-1}"

echo "🚀 Deploying to S3..."
echo "Bucket: $BUCKET_NAME"
echo "Region: $REGION"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    echo "   Visit: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if bucket exists
if ! aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "✅ Bucket exists: $BUCKET_NAME"
else
    echo "❌ Bucket does not exist: $BUCKET_NAME"
    echo "   Please create the bucket first or check the bucket name."
    exit 1
fi

# Build the site
echo "📦 Building site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Build output directory 'out' not found."
    exit 1
fi

# Sync static assets with long cache
echo "📤 Uploading static assets..."
aws s3 sync out/ s3://$BUCKET_NAME/ \
  --region $REGION \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt" \
  --exclude "*.json"

# Upload HTML files with shorter cache
echo "📄 Uploading HTML files..."
aws s3 sync out/ s3://$BUCKET_NAME/ \
  --region $REGION \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --content-type "text/html" \
  --include "*.html"

# Upload sitemap
if [ -f "out/sitemap.xml" ]; then
    echo "🗺️  Uploading sitemap..."
    aws s3 cp out/sitemap.xml s3://$BUCKET_NAME/sitemap.xml \
      --region $REGION \
      --content-type "application/xml" \
      --cache-control "public, max-age=3600"
fi

# Upload robots.txt
if [ -f "out/robots.txt" ]; then
    echo "🤖 Uploading robots.txt..."
    aws s3 cp out/robots.txt s3://$BUCKET_NAME/robots.txt \
      --region $REGION \
      --content-type "text/plain" \
      --cache-control "public, max-age=3600"
fi

# Upload JSON files (if any)
echo "📋 Uploading JSON files..."
aws s3 sync out/ s3://$BUCKET_NAME/ \
  --region $REGION \
  --cache-control "public, max-age=3600" \
  --content-type "application/json" \
  --include "*.json"

echo ""
echo "✅ Deployment complete!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "📝 Next steps:"
echo "   1. Verify the website is accessible at the URL above"
echo "   2. Set up CloudFront for HTTPS (optional but recommended)"
echo "   3. Configure custom domain (if applicable)"

