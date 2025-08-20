#!/bin/bash

echo "🚀 Starting Docker setup for Gatsby Portfolio..."

# Step 1: Clean any existing builds
echo "📦 Cleaning previous builds..."
rm -rf public
rm -rf .cache

# Step 2: Install dependencies locally (if needed)
echo "🔧 Installing dependencies..."
npm install --legacy-peer-deps

# Step 3: Build the application
echo "🏗️  Building Gatsby application..."
npm run build

# Step 4: Check if build was successful
if [ -d "public" ]; then
    echo "✅ Build successful! Public folder created."
    echo "📁 Contents of public folder:"
    ls -la public/ | head -10
else
    echo "❌ Build failed! Public folder not found."
    exit 1
fi

echo "🎉 Ready for Docker build!"
