#!/bin/bash

echo "🚀 Deploying MentorshipMatters to Vercel..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🌐 Deploying to Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "Your site is now live on Vercel!"
    else
        echo "❌ Deployment failed!"
    fi
else
    echo "❌ Build failed! Please fix the errors and try again."
fi