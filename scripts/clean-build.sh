#!/bin/bash

# Comprehensive build cleanup script
# Removes all build artifacts, caches, and temporary files

echo "🧹 Starting comprehensive cleanup..."

# Remove Next.js build artifacts
echo "  Removing .next directory..."
rm -rf .next

# Remove static export output
echo "  Removing out directory..."
rm -rf out

# Remove Next.js cache
echo "  Removing Next.js cache..."
rm -rf node_modules/.cache

# Remove Turbo cache (if exists)
echo "  Removing Turbo cache..."
rm -rf .turbo

# Remove TypeScript build info
echo "  Removing TypeScript build info..."
find . -name "*.tsbuildinfo" -delete 2>/dev/null || true

# Remove ESLint cache
echo "  Removing ESLint cache..."
rm -rf .eslintcache

# Remove any lock files that might cause issues (keep package-lock.json)
# rm -rf yarn.lock pnpm-lock.yaml

echo "✅ Cleanup complete! All build artifacts and caches removed."
