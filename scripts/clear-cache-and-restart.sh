#!/bin/bash

# Script to clear all caches and restart dev server
# Run this after every 3 prompts to ensure changes reflect

echo "🧹 Clearing all caches and restarting server..."

# Kill all running Next.js and serve processes
echo "📛 Stopping all running servers..."
pkill -f "next dev" 2>/dev/null
pkill -f "serve" 2>/dev/null
sleep 2

# Clear Next.js cache
echo "🗑️  Clearing Next.js cache..."
rm -rf .next
echo "✅ Next.js cache cleared"

# Clear Chrome cache
echo "🗑️  Clearing Chrome cache..."
rm -rf ~/Library/Caches/Google/Chrome/Default/Cache/* 2>/dev/null
rm -rf ~/Library/Caches/Google/Chrome/Default/Code\ Cache/* 2>/dev/null
rm -rf ~/Library/Caches/Google/Chrome/Default/GPUCache/* 2>/dev/null
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/Service\ Worker/CacheStorage/* 2>/dev/null
echo "✅ Chrome cache cleared"

# Clear Cursor browser cache
echo "🗑️  Clearing Cursor browser cache..."
find ~/Library/Application\ Support/Cursor -name "Cache" -type d -exec rm -rf {}/* \; 2>/dev/null
find ~/Library/Application\ Support/Cursor -name "Code Cache" -type d -exec rm -rf {}/* \; 2>/dev/null
find ~/Library/Application\ Support/Cursor -name "GPUCache" -type d -exec rm -rf {}/* \; 2>/dev/null
echo "✅ Cursor cache cleared"

# Clear node_modules/.cache if it exists
if [ -d "node_modules/.cache" ]; then
    echo "🗑️  Clearing node_modules cache..."
    rm -rf node_modules/.cache
    echo "✅ Node modules cache cleared"
fi

# Clear npm cache (optional, commented out as it's slower)
# echo "🗑️  Clearing npm cache..."
# npm cache clean --force
# echo "✅ npm cache cleared"

echo ""
echo "✨ All caches cleared!"
echo ""
echo "🚀 Starting dev server..."
npm run dev:restart

echo ""
echo "✅ Done! Dev server should be running on http://localhost:3000"
echo "💡 Remember to hard refresh browsers (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)"

