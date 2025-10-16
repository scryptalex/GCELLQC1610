#!/bin/bash

# GitHub Setup Script for GoldenCell Website
# This script helps you create a GitHub repository and push your code

echo "🌟 GoldenCell GitHub Setup Script"
echo "=================================="
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

echo "✅ Git repository detected"
echo ""

# Check current status
echo "📊 Current Git Status:"
git status --short
echo ""

# Ask for GitHub repository URL
echo "📝 Please create a new repository on GitHub first:"
echo "   1. Go to https://github.com/new"
echo "   2. Name it: goldencell-website (or your preferred name)"
echo "   3. Don't initialize with README, .gitignore, or license"
echo "   4. Copy the repository URL"
echo ""

read -p "Enter your GitHub repository URL (e.g., https://github.com/username/goldencell-website.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

# Add remote
echo ""
echo "🔗 Adding GitHub remote..."
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"

# Verify remote
echo "✅ Remote added: $(git remote get-url origin)"
echo ""

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Your repository is now available at:"
    echo "   ${REPO_URL%.git}"
    echo ""
    echo "📝 Next steps:"
    echo "   - Set up GitHub Pages if needed"
    echo "   - Configure deployment settings"
    echo "   - Add collaborators if working in a team"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   - Your GitHub authentication"
    echo "   - Repository permissions"
    echo "   - Network connection"
    echo ""
    echo "You can manually push later with:"
    echo "   git push -u origin main"
fi

echo ""
echo "📊 Repository information:"
git remote -v
