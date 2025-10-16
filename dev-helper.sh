#!/bin/bash

# GoldenCell Website - Development Helper Script
# Quick commands for common tasks

echo "🌟 GoldenCell Website Helper"
echo "============================"
echo ""

function show_menu() {
    echo "Choose an action:"
    echo "1) Start development server"
    echo "2) Build for production"
    echo "3) Run production preview"
    echo "4) Commit changes to Git"
    echo "5) Push to GitHub"
    echo "6) Check for errors"
    echo "7) Install dependencies"
    echo "8) Clean build cache"
    echo "9) Exit"
    echo ""
}

function start_dev() {
    echo "🚀 Starting development server..."
    cd website && npm run dev
}

function build_prod() {
    echo "🏗️  Building for production..."
    cd website && npm run build
}

function preview() {
    echo "👀 Starting production preview..."
    cd website && npm run build && npm start
}

function git_commit() {
    echo "📝 Current changes:"
    git status --short
    echo ""
    read -p "Enter commit message: " message
    if [ -n "$message" ]; then
        git add -A
        git commit -m "$message"
        echo "✅ Committed!"
    else
        echo "❌ No message provided"
    fi
}

function git_push() {
    echo "📤 Pushing to GitHub..."
    git push origin main
    if [ $? -eq 0 ]; then
        echo "✅ Pushed successfully!"
    else
        echo "❌ Push failed"
    fi
}

function check_errors() {
    echo "🔍 Checking for errors..."
    cd website
    echo ""
    echo "TypeScript check:"
    npx tsc --noEmit
    echo ""
    echo "Linting:"
    npm run lint 2>/dev/null || echo "Lint script not configured"
}

function install_deps() {
    echo "📦 Installing dependencies..."
    cd website && npm install
}

function clean_cache() {
    echo "🧹 Cleaning build cache..."
    cd website
    rm -rf .next
    rm -rf node_modules/.cache
    echo "✅ Cache cleaned!"
}

# Main loop
while true; do
    show_menu
    read -p "Enter choice [1-9]: " choice
    echo ""
    
    case $choice in
        1) start_dev ;;
        2) build_prod ;;
        3) preview ;;
        4) git_commit ;;
        5) git_push ;;
        6) check_errors ;;
        7) install_deps ;;
        8) clean_cache ;;
        9) echo "👋 Goodbye!"; exit 0 ;;
        *) echo "❌ Invalid choice" ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
    clear
done
