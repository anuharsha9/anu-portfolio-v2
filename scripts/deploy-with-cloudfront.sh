#!/bin/bash

# Enhanced S3 Deployment Script with CloudFront Invalidation
# Usage: ./scripts/deploy-with-cloudfront.sh [bucket-name] [cloudfront-distribution-id] [region]

BUCKET_NAME="${1}"
CLOUDFRONT_DIST_ID="${2}"
REGION="${3:-us-east-1}"

# Check if required parameters are provided
if [ -z "$BUCKET_NAME" ]; then
    echo "❌ Error: S3 bucket name is required"
    echo "Usage: ./scripts/deploy-with-cloudfront.sh <bucket-name> <cloudfront-distribution-id> [region]"
    exit 1
fi

if [ -z "$CLOUDFRONT_DIST_ID" ]; then
    echo "❌ Error: CloudFront distribution ID is required"
    echo "Usage: ./scripts/deploy-with-cloudfront.sh <bucket-name> <cloudfront-distribution-id> [region]"
    exit 1
fi

echo "🚀 Deploying to S3 with CloudFront invalidation..."
echo "Bucket: $BUCKET_NAME"
echo "CloudFront Distribution: $CLOUDFRONT_DIST_ID"
echo "Region: $REGION"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    echo "   Visit: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if bucket exists
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "❌ Bucket does not exist: $BUCKET_NAME"
    echo "   Please create the bucket first or check the bucket name."
    exit 1
else
    echo "✅ Bucket exists: $BUCKET_NAME"
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
echo "✅ S3 deployment complete!"

# Create CloudFront invalidation
echo ""
echo "🔄 Creating CloudFront invalidation..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DIST_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

if [ $? -eq 0 ] && [ ! -z "$INVALIDATION_ID" ]; then
    echo "✅ CloudFront invalidation created successfully!"
    echo "   Invalidation ID: $INVALIDATION_ID"
    echo "   Status: In progress (this may take a few minutes to complete)"
    echo ""
    echo "   Check status with:"
    echo "   aws cloudfront get-invalidation --distribution-id $CLOUDFRONT_DIST_ID --id $INVALIDATION_ID"
else
    echo "❌ Failed to create CloudFront invalidation"
    exit 1
fi

echo ""
echo "🎉 Deployment complete!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "📝 Next steps:"
echo "   - CloudFront cache invalidation is in progress"
echo "   - Changes will be live in a few minutes"
