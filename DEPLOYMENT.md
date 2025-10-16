# GoldenCell Website - Deployment Guide

## 📋 Pre-Deployment Checklist

- [ ] All pages tested locally
- [ ] Videos are properly muted and autoplay
- [ ] All translations (EN, RU, KO) are complete
- [ ] Images and assets are optimized
- [ ] Git repository is up to date
- [ ] Environment variables are configured

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is built by the creators of Next.js and provides the best deployment experience.

#### Step 1: Push to GitHub

```bash
# If you haven't already, run the setup script
./setup-github.sh

# Or manually:
# Create a new repository on GitHub
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/goldencell-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `goldencell-website` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes at `your-project.vercel.app`

#### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., goldencell.com)
3. Follow DNS configuration instructions

---

### Option 2: Netlify

#### Step 1: Build Settings

Create `netlify.toml` in project root:

```toml
[build]
  command = "cd website && npm run build"
  publish = "website/.next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import existing project"
3. Connect to GitHub and select your repository
4. Build settings are auto-detected from netlify.toml
5. Click "Deploy"

---

### Option 3: AWS Amplify

#### Step 1: AWS Setup

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd website
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: website/.next
    files:
      - '**/*'
  cache:
    paths:
      - website/node_modules/**/*
```

5. Click "Save and deploy"

---

### Option 4: Docker + Cloud Run/ECS

#### Step 1: Create Dockerfile

```dockerfile
# In website/ directory
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Step 2: Update next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... rest of config
};
```

#### Step 3: Build and Deploy

```bash
# Build image
docker build -t goldencell-website ./website

# Test locally
docker run -p 3000:3000 goldencell-website

# Push to container registry (GCP/AWS/Azure)
# Then deploy to your cloud platform
```

---

## 🔧 Environment Variables

If you need environment variables, create `.env.local`:

```env
# Add any API keys or secrets here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Important**: Never commit `.env.local` to Git!

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**:
   ```bash
   # If logo.png is large
   cd website/public/images
   # Use an image optimizer
   ```

2. **Optimize Videos** (if needed):
   ```bash
   # Compress videos using ffmpeg
   ffmpeg -i input.mp4 -vcodec h264 -acodec mp3 -crf 28 output.mp4
   ```

3. **Analyze Bundle**:
   ```bash
   cd website
   npm run build
   ```

---

## 🌐 CDN & Caching

### Vercel (Automatic)
- Global CDN included
- Automatic image optimization
- Edge caching enabled

### Cloudflare (Optional Enhancement)
1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your domain
3. Update nameservers
4. Enable:
   - Auto Minify (JS, CSS, HTML)
   - Brotli compression
   - Caching rules for videos

---

## 📱 Testing Checklist

After deployment, test:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Language switcher (EN/RU/KO)
- [ ] Videos autoplay and are muted
- [ ] Contact form (if backend connected)
- [ ] Mobile responsive design
- [ ] All pages load quickly (< 3s)
- [ ] Logo displays prominently
- [ ] Gold/platinum color scheme correct

---

## 🔒 Security

### Headers (add to next.config.ts)

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

---

## 📈 Analytics (Optional)

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `app/[locale]/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
  strategy="afterInteractive"
/>
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
cd website
rm -rf .next node_modules
npm install
npm run build
```

### Videos Don't Play
- Ensure videos are in public/videos/
- Check MIME types
- Verify muted and playsInline attributes

### i18n Not Working
- Check middleware.ts is in correct location
- Verify locale files exist in messages/
- Clear browser cache

---

## 📞 Support

For deployment issues:
1. Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
2. Review platform-specific guides
3. Check Git commit history

---

## 🎉 Post-Deployment

After successful deployment:

1. ✅ Share URL with team
2. ✅ Set up monitoring (Vercel Analytics, etc.)
3. ✅ Configure custom domain
4. ✅ Set up SSL certificate (automatic on Vercel/Netlify)
5. ✅ Test all features in production
6. ✅ Submit to search engines

---

**Recommended Deployment**: Vercel (fastest and easiest for Next.js)

**Estimated Time**: 5-10 minutes for complete deployment
