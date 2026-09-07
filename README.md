# 🧩 Portfolio — Bento Grid

A **personal portfolio** built with React + Vite, styled around a modern **Bento Grid** layout. Each card is an independent section (bio, projects, skills, LeetCode stats, GitHub/LeetCode activity heatmap, blogs, contact) wired together inside an interactive spotlight-and-glow system.

**Live →** [portfolio-bento-grid-sand.vercel.app](https://portfolio-bento-grid-sand.vercel.app)

---

## ✨ Features

- **MagicBento engine** — GSAP-powered global spotlight that tracks the cursor across all cards, applying per-card glow intensity via CSS custom properties
- **Bento Grid layout** — 10-column, 4-row responsive grid with glassmorphism card styling
- **Live integrations** — GitHub contributions heatmap, LeetCode stats & activity calendar, Medium blog feed
- **Spotify card** — playlist preview + embedded now-playing track
- **Contact form** — EmailJS-powered, no backend required
- **GIF → MP4** — animation assets served as `<video>` (autoplay/loop/muted) for ~91% smaller payload vs GIF
- **Dock navigation** — macOS-style magnifying icon dock for social links with animated rotating text

---

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19, Vite 7 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP, Framer Motion |
| Icons | Lucide React |
| Routing | React Router v7 |
| Email | @emailjs/browser |
| Heatmap | react-calendar-heatmap |
| Image CDN | Cloudinary |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # Bento grid assembly
│   └── HomeStage.jsx     # Outer glassy wrapper
├── components/
│   ├── MagicBento.jsx    # Spotlight engine + ParticleCard wrapper
│   ├── Description.jsx   # Hero card — profile, bio, resume
│   ├── LinksSection.jsx  # Social dock + rotating text
│   ├── SkillsSection.jsx # Scrollable tech stack
│   ├── ToolStack.jsx     # Daily tools + Spotify card
│   ├── ActivityHeatmap.jsx # GitHub / LeetCode heatmap toggle
│   ├── ProjectsSection.jsx # Horizontally scrolling project cards
│   ├── Blogs.jsx         # Medium RSS feed
│   └── ContactSection.jsx  # EmailJS contact form
└── utils/
    └── designSystem.js   # Shared typography + button style tokens
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### 1. Clone & install
```bash
git clone https://github.com/Darkshadow-123/Portfolio_BentoGrid.git
cd Portfolio_BentoGrid
npm install
```

### 2. Set up environment variables
Create a `.env` file in the project root:
```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_CLIENT_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

VITE_LEETCODE_USER=your_leetcode_username
VITE_GITHUB_USER=your_github_username
VITE_MEDIUM_RSS=https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your_medium_handle
```

### 3. Run dev server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SERVICE_ID` | EmailJS service ID |
| `VITE_CLIENT_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_LEETCODE_USER` | Your LeetCode username |
| `VITE_GITHUB_USER` | Your GitHub username |
| `VITE_MEDIUM_RSS` | RSS2JSON API URL for your Medium feed |

---

## 📦 Key Dependencies

```
react, react-dom         — UI framework
react-router-dom         — Client-side routing
tailwindcss              — Utility-first CSS (v4)
gsap                     — Spotlight / particle animations
motion                   — Component-level animations
@emailjs/browser         — Contact form (no backend)
react-calendar-heatmap   — Activity heatmaps
lucide-react             — Icon library
swiper                   — Touch-friendly sliders
```

---

## 📄 License

MIT — feel free to fork and customise for your own portfolio.
