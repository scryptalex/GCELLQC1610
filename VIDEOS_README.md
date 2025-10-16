# Video Files Storage

## Important Note

The video files (*.mp4) and presentation PDF are **NOT included in the GitHub repository** due to GitHub's file size limitations.

### Video Files Location
The videos should be stored in:
- `/website/public/videos/` - for the website to work

### Required Video Files (38.7 MB total):
1. `19700121_1158_68ebe177fe0481919ef9e77be027ab9d (1).mp4` (6.2 MB)
2. `20251013_1559_01k7esy1jberct4n3r0wk9qjbc.mp4` (8.3 MB)
3. `20251013_1559_01k7etbxf5e8dtz89v7jw3em4w.mp4` (8.4 MB)
4. `20251016_0309_01k7n5h1pgev8tq5e3qsged4gb.mp4` (6.6 MB)
5. `20251016_0313_01k7n5rr56e39b3m2zha5c78h9.mp4` (8.2 MB)

### Setup Instructions

After cloning this repository:

1. **Copy the video files** to `website/public/videos/`
2. **Copy BLOOMCELL.pdf** to project root (optional, for reference)
3. Run `npm install` in the `website` directory
4. Run `npm run dev` to start the development server

### Alternative Storage Options

For production deployment, consider:
- **Cloud Storage**: Upload videos to AWS S3, Cloudflare R2, or similar
- **CDN**: Use a CDN for better video delivery performance
- **Git LFS**: Install Git Large File Storage for version-controlled large files
- **Separate Repository**: Create a separate private repository for large assets

### Current Status

✅ All code committed and pushed to GitHub  
⚠️ Videos stored locally only (not in repository)  
✅ Website works perfectly with local video files  

The videos are included in your local project directory and will work fine for development and deployment.
