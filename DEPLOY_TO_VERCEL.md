# 🚀 Deploy GoldenCell Website to Vercel

## Quick Deploy (Recommended)

Click the button below to deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/scryptalex/GCELLQC1610)

## Manual Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with GitHub
3. Click **"Add New Project"**
4. **Import** `scryptalex/GCELLQC1610` repository
5. **Configure**:
   - Framework Preset: **Next.js**
   - Root Directory: **website**
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **"Deploy"**

**⚠️ Important: Upload Videos After Deployment**

After deployment, you need to add the video files:

#### Method 1: Use Vercel Blob Storage (Recommended)
```bash
cd website
npm install @vercel/blob
# Upload videos via Vercel dashboard or CLI
```

#### Method 2: Add Videos to Repository
- Videos were excluded due to file size
- See `VIDEOS_README.md` for the list of required files
- Contact the project owner for the original video files

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
cd website
vercel

# Production deployment
vercel --prod
```

### Environment Configuration

No environment variables required for basic deployment.

### Post-Deployment Steps

1. **Configure Custom Domain** (optional):
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., goldencell.com)
   - Follow DNS configuration instructions

2. **Add Videos**:
   - Upload to Vercel Blob Storage, or
   - Use cloud storage (AWS S3, Cloudflare R2), or
   - Commit smaller compressed versions

3. **Test**:
   - ✅ Homepage loads
   - ✅ Language switcher works (EN/RU/KO)
   - ✅ Navigation works
   - ✅ All pages accessible
   - ⚠️ Videos may be missing (needs manual upload)

## Demo Link Structure

Your deployed site will be available at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild locally
cd website
rm -rf .next node_modules
npm install
npm run build
```

### Videos Not Loading
- Videos are not in the repository (too large)
- Upload them manually after deployment
- See `website/public/videos/README.md`

### 404 Errors
- Make sure root directory is set to `website` in Vercel
- Check that all routes are under `[locale]` folder

## Performance Optimization

After deployment, enable:
- ✅ **Analytics** - Vercel Analytics
- ✅ **Speed Insights** - Real User Monitoring  
- ✅ **Image Optimization** - Automatic via Next.js
- ✅ **Edge Network** - Automatic CDN

## Support

- **Repository**: https://github.com/scryptalex/GCELLQC1610
- **Documentation**: See README.md and other docs in repo
- **Vercel Docs**: https://vercel.com/docs

---

**Estimated Deployment Time**: 2-5 minutes

**Note**: The website code is fully functional. Videos need to be added separately due to file size constraints.
