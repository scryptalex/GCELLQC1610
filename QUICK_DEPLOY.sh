#!/bin/bash

# Quick Deploy Script for GoldenCell Website
# This will deploy your site WITH videos to Vercel

echo "🚀 GoldenCell Quick Deploy"
echo "=========================="
echo ""

# Check if we're in the right directory
if [ ! -d "website" ]; then
    echo "❌ Error: Please run this from the gcell1610 directory"
    exit 1
fi

echo "📦 Step 1: Installing Vercel CLI..."
npm install -g vercel

echo ""
echo "🔐 Step 2: Login to Vercel"
echo "This will open a browser window. Please login to continue."
vercel login

echo ""
echo "🎬 Step 3: Checking videos..."
VIDEO_COUNT=$(ls -1 website/public/videos/*.mp4 2>/dev/null | wc -l)
echo "Found $VIDEO_COUNT video files"

if [ $VIDEO_COUNT -eq 0 ]; then
    echo "⚠️  Warning: No videos found! Copying from Downloads..."
    cp ~/Downloads/20251016_0313_01k7n5rr56e39b3m2zha5c78h9.mp4 website/public/videos/
    cp ~/Downloads/20251016_0319_01k7n5rr56e39b3m2zha5c78h9.mp4 website/public/videos/
    cp ~/Downloads/20251016_0309_01k7n5h1pgev8tq5e3qsged4gb.mp4 website/public/videos/
    cp ~/Downloads/20251013_1559_01k7esy1jberct4n3r0wk9qjbc.mp4 website/public/videos/
    cp ~/Downloads/20251013_1559_01k7etbxf5e8dtz89v7jw3em4w.mp4 website/public/videos/
    echo "✅ Videos copied!"
fi

echo ""
echo "🚀 Step 4: Deploying to Vercel..."
echo "This will deploy WITH videos (may take 2-3 minutes)"
cd website
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your live demo URL will be shown above ⬆️"
echo "Example: https://goldencell-xyz.vercel.app"
echo ""
echo "Share this link to demonstrate your website! 🎉"
