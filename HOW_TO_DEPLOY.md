# 🚀 Deploy GoldenCell Website WITH Videos - Step by Step

## Current Status
✅ All 5 videos are in `website/public/videos/` (40MB total)
✅ Videos work perfectly on localhost
✅ English, Russian, Korean all working
✅ Navigation buttons working
⚠️ Videos are NOT in GitHub (too large)

## FASTEST METHOD: Vercel CLI Deploy (2 minutes)

This deploys directly from your local folder (includes videos).

### Step 1: Run the deploy script
```bash
cd /Users/icrypto/anthropic-claude-project/gcell1610
./QUICK_DEPLOY.sh
```

That's it! The script will:
1. Install Vercel CLI
2. Login to Vercel (opens browser)
3. Check videos are present
4. Deploy WITH videos included
5. Give you a live URL like: `https://goldencell-abc123.vercel.app`

### Step 2: Share the link
You'll get a production URL that you can share immediately! 🎉

---

## Alternative: Manual Vercel Deploy

If you prefer to do it manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Login (opens browser)
vercel login

# Deploy from website folder
cd website
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Select your account**
- Link to existing project? **N**
- Project name? **goldencell** (or whatever you want)
- Directory? **Press Enter** (current directory)
- Override settings? **N**

Wait 2-3 minutes... Done! You'll get a URL.

---

## Why This Works

Vercel CLI deploys from your **local files**, not from GitHub:
- ✅ Includes your videos (40MB)
- ✅ Includes all code changes
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ No configuration needed

The 100MB limit on Vercel is for **total deployment size**, and your site is ~80MB with videos, so you're good!

---

## After Deployment

Your live site will have:
- ✅ All 5 exosome videos playing
- ✅ English/Russian/Korean languages
- ✅ Working navigation
- ✅ Gold/platinum theme
- ✅ Parallax video effects

Just share the URL and you're done! 🚀

---

## Troubleshooting

**Q: What if videos don't show up?**
A: Check that videos are in `website/public/videos/` before deploying:
```bash
ls -lh website/public/videos/*.mp4
```
Should show 5 files.

**Q: Can I redeploy if I make changes?**
A: Yes! Just run `./QUICK_DEPLOY.sh` again or `vercel --prod` from website folder.

**Q: What if I want to use Git for deployment?**
A: See `DEPLOY_WITH_VIDEOS.md` for cloud storage options (keeps videos separate).

---

## Ready to deploy?

```bash
./QUICK_DEPLOY.sh
```

That's literally it! 🎉
