#!/bin/bash

# Auto-restart script that ensures clean cache before starting
# This script should be used instead of direct `npm run dev`

echo "🧹 Cleaning Next.js cache..."
rm -rf .next

echo "🚀 Starting dev server with clean cache..."
npm run dev

