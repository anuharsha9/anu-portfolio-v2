#!/bin/bash

# Script to start Next.js dev server with automatic cleanup
# This prevents 404 errors from stale build cache

echo "🧹 Cleaning build cache..."
rm -rf .next

echo "🚀 Starting Next.js dev server..."
next dev

