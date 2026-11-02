# SHAKTI ABHUSHAN — Luxury Indian Brass Jewellery Ecommerce

> **Live Website:** [https://hridayvayanta.github.io/shakti-abhushan/](https://hridayvayanta.github.io/shakti-abhushan/)  
> **GitHub Repository:** [https://github.com/hridayvayanta/shakti-abhushan](https://github.com/hridayvayanta/shakti-abhushan)

---

## 🏛️ Brand & Creative Vision

A luxury Indian brass jewellery ecommerce showroom inspired by clean, light, editorial Indian boutiques (such as *Adore by Priyanka*).

- **Brand Logo:** Official emblem preserved unaltered as the single source of truth (`public/brand/shakti-abhushan-logo.png`).
- **Header & Footer:** Deep Forest Green (`#061507`) with Antique Gold (`#C39C69`) detailing.
- **Main Body Aesthetic:** Clean, bright warm ivory (`#F9F7F2`) and pure white (`#FFFFFF`) with generous whitespace, delicate borders, and refined editorial typography (*Cormorant Garamond* & *Manrope*).
- **Checkout Flow:** Direct WhatsApp commerce with prefilled line-item breakdowns, address, and live INR totals.

---

## ✨ Features & Architecture

### 1. Cinematic Continuous Hero Video
- Seamless full-bleed looping video background (`public/videos/shakti-abhushan-hero.mp4`) with smooth poster fallback.
- Uninterrupted playback: muted, looping, without obstructive UI overlays.
- Editorial headline: *"Tradition, Worn Beautifully"*, live collection shortcuts, and WhatsApp concierge trigger.

### 2. Shoppable Video Reels (9:16 Portrait)
- Vertical Instagram/Reels-style shopping experience ("See It. Love It. Wear It.").
- Shows jewellery movement, acoustics, and scale on real models.
- Interactive lightbox with instant **Add to Bag** drawer integration and product detail links.

### 3. Editorial Showcase & Category Explorer
- GSAP ScrollTrigger image reveal and frame expansion animations.
- Refined ivory category cards for *Necklaces & Chokers*, *Earrings & Jhumkas*, *Bangles & Kadas*, *Rings & Accessories*, and *Bridal Sets*.

### 4. Comprehensive Product Catalog & Detail Pages
- 12 authentic brass jewellery pieces complete with accurate weights, dimensions, micron patina finishes, and care guidelines.
- Multi-angle photography galleries, quick-view modals, and related recommendations.

### 5. Direct WhatsApp Checkout Drawer & Modal
- Persistent cart state in `localStorage`.
- Order modal capturing customer name, delivery city, and gift notes.
- Formats structured order messages sent directly to WhatsApp (`0000000000`).

---

## 🚀 Local Development

```bash
# Clone repository
git clone https://github.com/hridayvayanta/shakti-abhushan.git
cd shakti-abhushan

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Visit [http://localhost:5173/shakti-abhushan/](http://localhost:5173/shakti-abhushan/) in your browser.

---

## 📦 Production Build & Deployment

```bash
# Production type-check & build
npm run build

# Deploy to GitHub Pages (automated via GitHub Actions on push to main)
```

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys changes to GitHub Pages upon pushing to the `main` branch.
