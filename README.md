# 🏗️ ProtApp — Official Marketing Website

> **Investment, Procurement & Project Tracking System**  
> Built by [AnkaraBT](https://ankarabt.com) · Developed by [Heen Technology](https://heentechnology.co.uk)

---

## 📌 Overview

This repository contains the official multi-page, multi-language marketing website for **ProtApp** — a comprehensive, web-based platform that allows institutions to manage the full lifecycle of their projects in one place. From budget planning and EKAP-integrated procurement, to GIS-powered tracking and digital archiving, ProtApp brings total visibility and control to institutional project management.

The site is built with **pure HTML5 + Tailwind CSS** — no frameworks, no build tools. JavaScript is used only for scroll reveal animations and language switching. Open any HTML file in a browser and it works immediately.

---

## 🌐 Live Preview

> _Coming soon — link will be added upon deployment._

---

## 🧩 What is ProtApp?

ProtApp (Project Tracking Application) is a product of AnkaraBT designed for public and private sector institutions that manage large-scale investment and construction projects. It provides:

- ✅ **Centralized project management** across all departments
- ✅ **Role-based access control** — users only see what they're authorized for
- ✅ **EKAP integration** — Turkey's official public procurement platform
- ✅ **GIS visualization** — track projects geographically on interactive maps
- ✅ **Digital archive** — all documents stored and searchable electronically
- ✅ **Real-time dashboards** — dynamic, graphical reports for decision-makers

---

## 📁 Project Structure

```
ProtApp/
│
├── index.html                  # Home page (EN)
├── index-tr.html               # Home page (TR)
├── index-ar.html               # Home page (AR)
│
├── features.html               # Features & Modules page (EN)
├── features-tr.html            # Features & Modules page (TR)
├── features-ar.html            # Features & Modules page (AR)
│
├── how-it-works.html           # Process / How It Works page (EN)
├── how-it-works-tr.html        # Process / How It Works page (TR)
├── how-it-works-ar.html        # Process / How It Works page (AR)
│
├── contact.html                # Contact Us page (EN)
├── contact-tr.html             # Contact Us page (TR)
├── contact-ar.html             # Contact Us page (AR)
│
├── book.html                   # Interactive 3D flip book — ProtApp brochure (EN)
├── book-tr.html                # Interactive 3D flip book (TR)
├── book-ar.html                # Interactive 3D flip book (AR)
│
├── reveal.css                  # Scroll reveal animation styles
├── reveal.js                   # Scroll reveal animation logic
├── translate.js                # Language switching utility
│
├── logo.png                    # ProtApp logo
├── hero-illustration.png       # Hero section 3D illustration
├── man.png                     # Character illustration asset
├── photo.png                   # Additional photo asset
├── image.png                   # Supplementary image asset
│
└── README.md                   # You are here
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/protapp-website.git
cd protapp-website
```

### 2. Open in browser

No build step required. Just open the file directly:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or drag and drop `index.html` into any modern browser.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and content for all pages |
| Tailwind CSS (CDN) | All styling via utility classes |
| Vanilla JavaScript | Scroll reveal animations, page flip logic |
| `reveal.css` / `reveal.js` | Custom scroll-triggered entrance animations |
| `translate.js` | Language switcher (EN / TR / AR) |
| Google Fonts | Typography (serif + sans-serif pairing) |
| CSS 3D Transforms | Realistic page-flip effect in book pages |

> ⚠️ **No npm. No build process. No frameworks.** This was a deliberate constraint — the site must work as pure static files.

---

## 🌍 Multi-Language Support

The site supports **three languages**, each with its own dedicated set of HTML files:

| Language | Code | Direction | Pages |
|---|---|---|---|
| English | `EN` | LTR | index, features, how-it-works, contact, book |
| Turkish | `TR` | LTR | index-tr, features-tr, how-it-works-tr, contact-tr, book-tr |
| Arabic | `AR` | RTL | index-ar, features-ar, how-it-works-ar, contact-ar, book-ar |

Language switching is handled client-side by `translate.js`. The navbar on every page includes `EN | TR | AR` switcher links.

---

## 📖 Pages & Features

### `index.html` — Home Page

| Section | Description |
|---|---|
| **Navbar** | ProtApp logo, nav links (Home / Features / Process / Contact), EN\|TR\|AR switcher, "Request a Demo" CTA |
| **Hero** | Blue gradient background, bold 3-line headline, description, two CTA buttons, 3D hero illustration |
| **What is ProtApp?** | Embedded interactive flip book showing the ProtApp speech/brochure with page navigation |
| **Powerful Features** | Preview of 3 key modules with "See All 9 Modules →" link to features.html |
| **CTA Banner** | "Ready to Transform Your Project Management?" with two action buttons |
| **Footer** | ProtApp logo, copyright (© 2026 AnkaraBT), nav links, tagline |

### `features.html` — Features & Modules

| Section | Description |
|---|---|
| **Page Hero** | Blue gradient header — "Features & Modules" with subtitle |
| **9 Module Cards** | Full 3-column grid covering all ProtApp modules with emoji icons and descriptions |

Modules covered:
1. Project Plan Creation
2. Project Resource Management
3. Control Organization Setup
4. Supplier Management
5. EKAP-Integrated Tendering
6. Budget & Progress Payments
7. Performance Monitoring
8. Approval & Acceptance Workflows
9. Digital Archive Operations

### `how-it-works.html` — Process Page

| Section | Description |
|---|---|
| **Page Hero** | Blue gradient header — "How It Works" |
| **4-Step Timeline** | Large numbered blue circles connected by a horizontal line: Plan → Procure → Track → Archive |
| **Benefits** | Institutional benefit highlights below the timeline |

### `contact.html` — Contact Page

| Section | Description |
|---|---|
| **Page Hero** | Blue gradient header — "Get in Touch" |
| **3 Office Cards** | Turkey 🇹🇷 (Ankara), USA 🇺🇸 (Franklin Park, IL), UK 🇬🇧 (London) — each with address, phone, email |
| **Social Links** | LinkedIn, Instagram, YouTube icons |

### `book.html` — Interactive 3D Flip Book

| Feature | Detail |
|---|---|
| **Open book spread** | Two pages side by side with realistic spine shadow |
| **Page curl animation** | CSS 3D `rotateY` transform, smooth ease-in-out |
| **Paper texture** | Diagonal crosshatch via `repeating-linear-gradient` |
| **Navigation** | Left/right arrow buttons + page counter (e.g. "Pages 1–2 / 16") |
| **Keyboard support** | `←` `→` arrow keys to turn pages |
| **Content** | ProtApp speech, modules, process, and contact info across 16 pages |

---

## 🎨 Design System

```
Color Palette:
  Hero/Header BG:   #3B82F6 → #93C5FD  (blue gradient, top to bottom)
  Page Background:  #FFFFFF  (white)
  Dark Footer:      #0F172A  (near black / slate-950)
  Accent Blue:      #3B82F6  (blue-600)
  Text Primary:     #1E293B  (dark slate)
  Text Muted:       #64748B  (slate-500)
  Card Border:      #E2E8F0  (slate-200)

Typography:
  Headings:         font-bold, large sizes, dark navy
  Body:             text-base, leading-relaxed, slate-600
  Nav Links:        text-sm, font-medium, slate-500

Components:
  Cards:            rounded-xl, shadow-sm, border border-slate-200
  CTA Buttons:      rounded-full, bg-blue-600, text-white
  Page Heroes:      Blue gradient, white centered text
  Footer:           bg-slate-950, white text, tagline bottom-left
```

---

## 🏢 About AnkaraBT

AnkaraBT (Ankara Bilgi Teknolojileri) is a Turkish software company headquartered at Hacettepe University Technopolis, Ankara. ProtApp is one of ten software products in their portfolio, which also includes CarbonIT, Tabip, SayApp, RealIT, ERPlus, GIS, and others.

| Office | Location | Contact |
|---|---|---|
| 🇹🇷 Turkey | Hacettepe Üniversitesi Teknokent, 3. ArGe Binası No:1-2, Beytepe/Ankara | info@ankarabt.com · +90 (312) 299 23 50 |
| 🇺🇸 USA | TOBB Trade Center, 11417 Irving Park RD, Suite B-3-1, Franklin Park, IL 60131 | info@msysoftware.com · +90 532 449 69 72 |
| 🇬🇧 UK | Queen Elizabeth Olympic Park, Here East, Plexal, London E20 3BS | Info@Heentechnology.co.uk · +44 (7448) 995050 |

🌐 [ankarabt.com](https://ankarabt.com)

---

## 👨‍💻 Development

This site was developed by the team at **Heen Technology** on behalf of AnkaraBT.

📧 Info@Heentechnology.co.uk  
🌐 [heentechnology.co.uk](https://heentechnology.co.uk)

---

## 📄 License

This project is proprietary software owned by AnkaraBT / Heen Technology.  
All rights reserved. No part of this codebase may be reproduced or distributed without written permission.

---

## 🗺️ Roadmap

- [x] English version — all pages
- [x] Turkish version — all pages
- [x] Arabic (RTL) version — all pages
- [x] Interactive 3D flip book (EN / TR / AR)
- [x] Scroll reveal animations (`reveal.js`)
- [x] Multi-language navbar switcher (`translate.js`)
- [x] Contact page with 3 international offices
- [x] Features page with all 9 modules
- [x] How It Works — 4-step process page
- [ ] Mobile hamburger menu (fully functional)
- [ ] Deploy to GitHub Pages or Netlify
- [ ] SEO meta tags and Open Graph images
- [ ] Live demo request form (with email integration)
- [ ] GIS map preview section

---

<div align="center">

**Built for institutions. Designed for clarity.**

*ProtApp · AnkaraBT · © 2026*

</div>
