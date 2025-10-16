# 🚀 Quick Start Guide - GoldenCell Website

## Welcome!

Your GoldenCell website is ready to go! Follow these simple steps to get started.

## ✅ Current Status

✓ Git repository initialized and configured  
✓ Next.js website with TypeScript  
✓ Multi-language support (EN, RU, KO)  
✓ All pages created (Home, About, Technology, Treatments, Research, Gallery, Contact)  
✓ Videos imported and configured  
✓ Logo installed  
✓ Gold & Platinum theme applied  
✓ Parallax animations implemented  
✓ Development server ready  

## 🎯 Next Steps

### 1. View Your Website

The development server is already running! Click the preview browser button to view:
- **Local URL**: http://localhost:3000

### 2. Test All Pages

Navigate through:
- Home (/) - Hero with parallax video
- About (/about) - Company information
- Technology (/technology) - Technical details
- Treatments (/treatments) - Treatment options
- Research (/research) - Research & publications
- Gallery (/gallery) - Video showcase
- Contact (/contact) - Contact form

### 3. Test Language Switching

Use the language switcher in the navigation:
- **EN** - English
- **RU** - Russian (Русский)
- **KO** - Korean (한국어)

## 📝 Making Changes

### Edit Content

**Translations**: Edit files in `website/messages/`
- `en.json` - English text
- `ru.json` - Russian text
- `ko.json` - Korean text

**Styles**: Edit `website/app/globals.css` for global styling

**Components**: Edit files in `website/components/`

### Commit Changes

```bash
# Quick commit using the helper script
./dev-helper.sh
# Choose option 4 (Commit changes)

# Or manually:
git add -A
git commit -m "Your commit message"
```

## 🌐 Push to GitHub

### Option 1: Use Setup Script

```bash
./setup-github.sh
# Follow the prompts
```

### Option 2: Manual Setup

1. Create repository on GitHub: https://github.com/new
2. Name it: `goldencell-website`
3. Don't initialize with README
4. Copy the repository URL

```bash
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## 🚀 Deploy to Production

### Easiest: Vercel (Recommended)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import `goldencell-website`
5. Click "Deploy"
6. **Done!** Your site is live in ~2 minutes

See `DEPLOYMENT.md` for more deployment options.

## 🎨 Customization Tips

### Change Colors

Edit `website/app/globals.css`:
```css
:root {
  --gold-primary: #D4AF37;  /* Change this */
  --gold-light: #F4D03F;    /* And this */
  --gold-dark: #B8860B;     /* And this */
  --platinum: #E5E4E2;      /* Background color */
}
```

### Replace Videos

1. Add your videos to `website/public/videos/`
2. Update video paths in components
3. Ensure videos are muted for autoplay

### Change Logo

Replace `website/public/images/logo.png` with your logo

## 🛠️ Useful Commands

```bash
# Start dev server (if not running)
cd website && npm run dev

# Build for production
cd website && npm run build

# Check for errors
cd website && npx tsc --noEmit

# Clean cache
rm -rf website/.next
```

Or use the helper script:
```bash
./dev-helper.sh
```

## 📁 Project Structure

```
gcell1610/
├── website/              # Main Next.js application
│   ├── app/[locale]/    # Pages (supports EN, RU, KO)
│   ├── components/      # Reusable components
│   ├── messages/        # Translations
│   └── public/          # Static assets (videos, images)
├── README.md            # Project documentation
├── DEPLOYMENT.md        # Deployment guide
├── setup-github.sh      # GitHub setup helper
└── dev-helper.sh        # Development helper
```

## 🔄 Regular Workflow

1. Make changes to files
2. View changes in browser (auto-refresh)
3. Test thoroughly
4. Commit: `./dev-helper.sh` → Option 4
5. Push: `./dev-helper.sh` → Option 5

## 📊 Current Features

✅ Responsive design (mobile, tablet, desktop)  
✅ Smooth scroll animations  
✅ Parallax video backgrounds  
✅ Video slideshow with controls  
✅ Language switcher  
✅ Contact form  
✅ Loading animations  
✅ Custom scrollbar  
✅ Gold gradient text effects  
✅ Navigation with mobile menu  

## 🎥 Video Features

- Muted autoplay (browser-friendly)
- Parallax effects on hero
- Slideshow with thumbnails
- Gallery with modal view
- Background videos on multiple pages

## 🌍 Languages

All pages are translated into:
- English (default)
- Russian (Русский)
- Korean (한국어)

## ⚡ Performance

- Next.js 15 with Turbopack (fast refresh)
- Optimized images and videos
- Code splitting
- Lazy loading

## 📝 To-Do (Optional Enhancements)

- [ ] Add contact form backend (e.g., EmailJS, SendGrid)
- [ ] Set up Google Analytics
- [ ] Add SEO metadata for each page
- [ ] Optimize videos further if needed
- [ ] Add more content from BLOOMCELL.pdf
- [ ] Set up custom domain
- [ ] Add testimonials section
- [ ] Implement blog/news section

## 🆘 Need Help?

- Check `DEPLOYMENT.md` for deployment issues
- Check `README.md` for detailed documentation
- Review Git commits: `git log --oneline`
- Check browser console for errors

## 🎉 You're All Set!

Your GoldenCell website is ready to impress! The design is inspired by premium regenerative medicine clinics with:

- ✨ Large, bright gold logo
- 🎨 Gold tones on platinum background
- 🎬 Parallax video covers
- 🌐 Multi-language support
- 📱 Fully responsive
- ⚡ Fast and modern

**Happy coding! 🚀**

---

**Pro Tip**: Commit frequently! Use `git commit` every time you complete a feature or make significant changes. This project is already set up with Git to prevent data loss.
