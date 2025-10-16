# GoldenCell - Revolutionary Exosome Therapy Website

A modern, multilingual website for GoldenCell, featuring advanced exosome therapy information with stunning parallax video backgrounds and animations.

## 🌟 Features

- **Multi-language Support**: English, Russian, and Korean translations
- **Stunning Design**: Gold tones on platinum background inspired by premium regenerative medicine clinics
- **Parallax Video Backgrounds**: Immersive video experiences using Sora2-generated exosome animations
- **Responsive Design**: Optimized for all devices
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Smooth Animations**: Page transitions and scroll-based animations
- **Video Gallery**: Showcase of exosome therapy visualizations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gcell1610
```

2. Navigate to the website directory:
```bash
cd website
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
gcell1610/
├── website/
│   ├── app/
│   │   ├── [locale]/          # Internationalized pages
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── gallery/       # Video gallery
│   │   │   └── layout.tsx     # Layout with navigation
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Navigation bar with language switcher
│   │   ├── Footer.tsx         # Footer component
│   │   ├── VideoHero.tsx      # Parallax video hero section
│   │   ├── VideoSlideshow.tsx # Video slideshow component
│   │   └── TechnologySection.tsx
│   ├── messages/              # i18n translations
│   │   ├── en.json           # English
│   │   ├── ru.json           # Russian
│   │   └── ko.json           # Korean
│   ├── public/
│   │   ├── images/           # Logo and images
│   │   └── videos/           # Exosome videos
│   └── i18n.ts               # i18n configuration
├── BLOOMCELL.pdf             # Original presentation
└── *.mp4                     # Source video files
```

## 🎨 Design Features

- **Color Scheme**: 
  - Gold Primary: #D4AF37
  - Gold Light: #F4D03F
  - Gold Dark: #B8860B
  - Platinum: #E5E4E2
  
- **Typography**: Clean, modern sans-serif fonts
- **Animations**: Framer Motion for smooth page transitions
- **Videos**: Muted autoplay with parallax effects

## 🌍 Language Support

The website supports three languages:
- English (en) - Default
- Russian (ru)
- Korean (ko)

Language switching is available via the navigation bar.

## 📦 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Video Processing**: HTML5 Video API

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## 📝 Development Notes

- Videos are muted by default for autoplay compliance
- All videos are stored in `public/videos/`
- Logo is prominently displayed in gold tones
- Responsive breakpoints: mobile (< 768px), tablet (768px-1024px), desktop (> 1024px)

## 🔄 Git Commits

Regular commits are made to preserve work:
- Initial setup and configuration
- i18n implementation
- Component development
- Page creation
- Styling and animations

## 📄 License

© 2025 GoldenCell. All rights reserved.

## 🤝 Contributing

This is a private project for GoldenCell. For inquiries, please contact the development team.

## 📧 Contact

- Email: info@goldencell.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and modern web technologies
