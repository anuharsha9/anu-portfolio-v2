#!/bin/bash
# Start Next.js dev server on port 3000

cd "$(dirname "$0")"

# Kill any existing Next.js processes
echo "Killing existing Next.js processes..."
pkill -9 -f "next" || true
sleep 2

# Clear cache
echo "Clearing cache..."
rm -rf .next out node_modules/.cache .turbo .swc

# Start dev server on port 3000
echo "Starting dev server on port 3000..."
PORT=3000 npm run dev
