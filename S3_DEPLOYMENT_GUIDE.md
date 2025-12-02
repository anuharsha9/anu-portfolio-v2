# S3 Deployment Guide
## Step-by-Step Instructions for Deploying to Amazon S3

**Date:** December 1, 2024  
**Project:** Anuja Harsha Nimmagadda Portfolio

---

## Prerequisites ✅

- AWS Account with S3 access
- AWS CLI installed and configured (optional, but recommended)
- Existing S3 bucket (you mentioned you already have one)
- Backup of current website (you mentioned you already have a backup)

---

## Step 1: Build the Static Site 🏗️

### 1.1 Clean Build
```bash
cd /Users/anu/Work/anu-portfolio
npm run build
```

This will:
- Generate sitemap.xml
- Build the static site
- Output everything to the `out/` directory

### 1.2 Verify Build Output
```bash
ls -la out/
```

You should see:
- `index.html`
- `me/` directory
- `work/` directory
- `images/` directory
- `videos/` directory
- `sitemap.xml`
- `robots.txt`
- All other static assets

---

## Step 2: Prepare S3 Bucket 🪣

### 2.1 Delete Existing Content (if needed)

**Option A: Using AWS Console**
1. Go to AWS S3 Console
2. Select your bucket
3. Select all files/folders
4. Click "Delete"
5. Confirm deletion

**Option B: Using AWS CLI**
```bash
aws s3 rm s3://your-bucket-name --recursive
```

### 2.2 Configure Bucket for Static Website Hosting

1. Go to your S3 bucket in AWS Console
2. Click on **"Properties"** tab
3. Scroll to **"Static website hosting"**
4. Click **"Edit"**
5. Enable static website hosting:
   - **Index document:** `index.html`
   - **Error document:** `404.html` (or `index.html` if you want SPA behavior)
6. Click **"Save changes"**

### 2.3 Set Bucket Policy (for Public Access)

1. Go to **"Permissions"** tab
2. Click **"Bucket policy"**
3. Add this policy (replace `your-bucket-name`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

4. Click **"Save changes"**

### 2.4 Block Public Access Settings

1. In **"Permissions"** tab, click **"Block public access"**
2. Click **"Edit"**
3. **Uncheck** "Block all public access" (or configure as needed)
4. Click **"Save changes"**
5. Confirm by typing "confirm"

---

## Step 3: Upload Files to S3 📤

### Option A: Using AWS Console (Manual Upload)

1. Go to your S3 bucket
2. Click **"Upload"**
3. Click **"Add files"** or **"Add folder"**
4. Navigate to `/Users/anu/Work/anu-portfolio/out/`
5. Select **ALL** files and folders from the `out/` directory
6. Click **"Upload"**
7. Wait for upload to complete

**⚠️ Important:** Upload the **contents** of the `out/` folder, NOT the `out/` folder itself.

### Option B: Using AWS CLI (Recommended - Faster)

```bash
# Navigate to project directory
cd /Users/anu/Work/anu-portfolio

# Upload entire out/ directory to S3
aws s3 sync out/ s3://your-bucket-name/ --delete

# Set correct content types
aws s3 cp out/ s3://your-bucket-name/ --recursive --exclude "*" --include "*.html" --content-type "text/html"
aws s3 cp out/ s3://your-bucket-name/ --recursive --exclude "*" --include "*.css" --content-type "text/css"
aws s3 cp out/ s3://your-bucket-name/ --recursive --exclude "*" --include "*.js" --content-type "application/javascript"
aws s3 cp out/ s3://your-bucket-name/ --recursive --exclude "*" --include "*.json" --content-type "application/json"
aws s3 cp out/ s3://your-bucket-name/ --recursive --exclude "*" --include "*.xml" --content-type "application/xml"
aws s3 cp out/ s3://your-bucket-name/ --recursive --exclude "*" --include "*.txt" --content-type "text/plain"
```

### Option C: Using S3 Sync Script (Best for Updates)

Create a script `scripts/deploy-s3.sh`:

```bash
#!/bin/bash

BUCKET_NAME="your-bucket-name"
REGION="us-east-1"  # Change to your region

echo "🚀 Deploying to S3..."
echo "Bucket: $BUCKET_NAME"
echo "Region: $REGION"

# Build the site
echo "📦 Building site..."
npm run build

# Sync files
echo "📤 Uploading files..."
aws s3 sync out/ s3://$BUCKET_NAME/ \
  --region $REGION \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt"

# Upload HTML files with shorter cache
aws s3 sync out/ s3://$BUCKET_NAME/ \
  --region $REGION \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --include "*.html"

# Upload sitemap and robots.txt
aws s3 cp out/sitemap.xml s3://$BUCKET_NAME/sitemap.xml \
  --region $REGION \
  --content-type "application/xml" \
  --cache-control "public, max-age=3600"

aws s3 cp out/robots.txt s3://$BUCKET_NAME/robots.txt \
  --region $REGION \
  --content-type "text/plain" \
  --cache-control "public, max-age=3600"

echo "✅ Deployment complete!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
```

Make it executable:
```bash
chmod +x scripts/deploy-s3.sh
```

---

## Step 4: Verify Deployment ✅

### 4.1 Check Website URL

After enabling static website hosting, AWS will provide you with a website endpoint:

**Format:** `http://your-bucket-name.s3-website-region.amazonaws.com`

You can find this in:
- S3 Console → Your Bucket → Properties → Static website hosting → **Bucket website endpoint**

### 4.2 Test All Pages

Visit and test:
- ✅ Homepage: `http://your-bucket-name.s3-website-region.amazonaws.com/`
- ✅ About: `http://your-bucket-name.s3-website-region.amazonaws.com/me/`
- ✅ ReportCaster: `http://your-bucket-name.s3-website-region.amazonaws.com/work/reportcaster/`
- ✅ ML Functions: `http://your-bucket-name.s3-website-region.amazonaws.com/work/ml-functions/`
- ✅ IQ Plugin: `http://your-bucket-name.s3-website-region.amazonaws.com/work/iq-plugin/`
- ✅ 404 Page: `http://your-bucket-name.s3-website-region.amazonaws.com/nonexistent-page`

### 4.3 Check Console for Errors

Open browser DevTools (F12) and check:
- No 404 errors for assets
- No JavaScript errors
- Images load correctly
- Videos load correctly

---

## Step 5: Set Up Custom Domain (Optional) 🌐

### 5.1 Using CloudFront (Recommended)

1. **Create CloudFront Distribution:**
   - Origin: Your S3 bucket website endpoint
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Default Root Object: `index.html`
   - Error Pages: Add custom error responses for 404 → `/404.html` (or `/index.html`)

2. **Add SSL Certificate:**
   - Request certificate in AWS Certificate Manager
   - Use for CloudFront distribution

3. **Configure Custom Domain:**
   - Add CNAME record pointing to CloudFront distribution
   - Update CloudFront with your domain

### 5.2 Using Route 53 (If you have domain)

1. Create hosted zone
2. Create A record (alias) pointing to CloudFront
3. Update nameservers at your domain registrar

---

## Step 6: Post-Deployment Checklist ✅

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Videos play correctly
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] 404 page displays for invalid URLs
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Google Analytics tracking (if configured)
- [ ] Social sharing previews work (Open Graph)
- [ ] HTTPS enabled (if using CloudFront)

---

## Step 7: Future Updates 🔄

### Quick Update Process

1. Make changes to code
2. Run `npm run build`
3. Upload `out/` contents to S3 (using sync or manual upload)
4. Clear CloudFront cache (if using CloudFront):
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DISTRIBUTION_ID \
     --paths "/*"
   ```

### Automated Deployment (Optional)

Set up GitHub Actions or CI/CD pipeline to:
- Build on push
- Deploy to S3 automatically
- Invalidate CloudFront cache

---

## Troubleshooting 🔧

### Issue: 404 Errors for Routes

**Solution:** Ensure `trailingSlash: true` is set in `next.config.js` (already configured)

### Issue: Images Not Loading

**Solution:** 
- Check file paths (should be relative, starting with `/`)
- Verify images uploaded correctly
- Check S3 bucket permissions

### Issue: Videos Not Playing

**Solution:**
- Verify video files uploaded
- Check video file sizes (should be optimized)
- Test video URLs directly

### Issue: Styles Not Loading

**Solution:**
- Check CSS files uploaded
- Verify content-type headers
- Clear browser cache

### Issue: JavaScript Errors

**Solution:**
- Check browser console for errors
- Verify all JS files uploaded
- Check for CORS issues

---

## Important Notes 📝

1. **File Structure:** Upload the **contents** of `out/`, not the `out/` folder itself
2. **Trailing Slashes:** Next.js is configured with `trailingSlash: true` for S3 compatibility
3. **Static Export:** Site is configured for static export (`output: 'export'`)
4. **Cache Control:** Set appropriate cache headers for assets
5. **HTTPS:** Use CloudFront for HTTPS (S3 static hosting is HTTP only)

---

## Quick Reference Commands 📋

```bash
# Build
npm run build

# Deploy (if using AWS CLI)
aws s3 sync out/ s3://your-bucket-name/ --delete

# Check bucket contents
aws s3 ls s3://your-bucket-name/ --recursive

# Clear CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## Support 🆘

If you encounter issues:
1. Check AWS S3 Console for errors
2. Verify bucket permissions
3. Check CloudFront logs (if using)
4. Review browser console for errors
5. Test with direct S3 website endpoint first

---

**Good luck with your deployment! 🚀**



