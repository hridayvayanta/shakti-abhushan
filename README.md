# SHAKTI ABHUSHAN — Immersive 3D Luxury Ecommerce Website
*Tradition, Worn Beautifully • Handcrafted Indian Brass Jewellery*

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Three.js / React Three Fiber / Drei**, and **Lucide Icons**.

---

## 🏛️ Brand Identity & Palette
- **Single Source of Truth Logo:** Exact attached brand emblem preserved in `public/brand/shakti-abhushan-logo.jpg` and `public/brand/shakti-abhushan-logo.png`.
- **Primary Dark Forest Green:** `#061507`
- **Secondary Dark Green Surface:** `#0A1B0D`
- **Antique Brand Gold:** `#C39C69`
- **Warm Metallic Gold Highlight:** `#D2A870`
- **Supporting Ivory:** `#F3EBDD`
- **Typography:** *Cormorant Garamond* (Editorial Serif) paired with *Manrope* (Clean Humanist Sans).

---

## ✨ Signature Features Built

### 1. The Living Jewellery Box (3D Hero Experience)
- Realistic 3D lacquered dark green jewellery box with antique gold filigree trims and back-hinge pivot mechanism.
- The box lid lifts and opens smoothly as visitors scroll or click.
- An intricate handcrafted royal brass choker emerges from the inner forest green velvet cushion, illuminated by a warm golden spotlight.
- Real-time PBR brass metallic reflections, gentle floating motions, and ambient gold particle field.
- Interactive OrbitControls allowing visitors to drag and inspect from angles.
- Reduced motion toggle for immediate accessibility.

### 2. The Floating Jewellery Universe (3D Spatial Constellation)
- Interactive 3D orbital gallery with 4 distinct royal Indian brass models:
  - **Royal Meenakari Choker** (Collar Torques & Haars)
  - **Temple Mayur Jhumkas** (Earrings & Resonant Bells)
  - **Gajraj Openable Kada** (Elephant Finial Bangles & Cuffs)
  - **Padma Statement Ring** (Blooming Lotus Rings & Accessories)
- Orbiting disks with golden halos, interactive mouse-driven perspective, and direct category navigation on click.

### 3. Interactive 360° Product Viewer & High-Resolution Multi-Angle Gallery
- On every product detail page (`/product/:id`), visitors can toggle between:
  - **3D Interactive Model:** 360° drag-to-rotate, pinch/scroll zoom, auto-rotation toggle, and dynamic lighting presets (*Darbar Lamp*, *Candlelight*, *Studio Daylight*).
  - **Multi-Angle Gallery:** Ultra high-resolution editorial photography, craftsmanship close-ups, and macro filigree angles.

### 4. Direct WhatsApp Checkout Flow (No Traditional Payment Gateway Needed)
- Shopping bag with persistent `localStorage` support, slide-over drawer, quantity adjustments, and live INR (₹) subtotal calculation.
- **Accurate Pre-Handoff Order Summary Modal:** Shows exact line items, optional customer name, delivery city/pin code, and custom gifting notes.
- Composes a prefilled, URL-encoded WhatsApp message:
  ```text
  ✨ SHAKTI ABHUSHAN — Order Enquiry ✨

  Hello Shakti Abhushan! I would like to order:

  1. Mayur Antique Brass Jhumkas (Standard Antique Finish)
     • Qty: 1 | ₹2,450 each | ₹2,450
  2. Rajwada Meenakari Brass Choker (Standard Antique Finish)
     • Qty: 1 | ₹4,850 each | ₹4,850

  Product Subtotal: ₹7,300

  Please confirm availability, delivery charges and payment details. Thank you!
  ```
- Uses official WhatsApp click-to-chat `https://wa.me/<number>?text=...`.
- Configurable business WhatsApp number (with built-in UI setting so store managers can easily update it).

### 5. Complete Page Suite & Client Services
- **Home (`/`)**: 3D Living Box hero, 3 Pillars of Brass Craft, 3D Floating Universe, Curated Signature Pieces, Editorial Chambers, and WhatsApp concierge banner.
- **Shop All (`/shop`)**: Complete catalogue with category filtering, instant search, price/alphabetical sorting, and direct Add-to-Bag actions.
- **Collections (`/collections`)**: Editorial showcases for Necklaces, Earrings, Bangles, Rings, and Bridal Sets.
- **Product Detail (`/product/:id`)**: Dual 3D/Gallery viewer, specs accordion (Base Metal, Patina, Weight, Dimensions, Care), and instant WhatsApp purchase.
- **Our Story (`/story`)**: The Maison's heritage, hereditary thathera repoussé technique, and the alchemy of brass.
- **Care Guide (`/care`)**: Practical instructions on caring for antique brass patinas and velvet pouch storage.
- **Shipping (`/shipping`)**, **Returns (`/returns`)**, **Privacy (`/privacy`)**, and **Terms (`/terms`)**: Transparent, handcrafted-jewellery-aligned policies.

---

## 🚀 Running the Project

```bash
cd /Users/hridayvayanta/.gemini/antigravity/scratch/shakti-abhushan

# Development server
npm run dev

# Production build test
npm run build
```
