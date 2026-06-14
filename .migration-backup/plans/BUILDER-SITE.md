# 🏗️ BUILDER SITE — Construction Company Landing Page

## Overview

A modern, single-page landing page for a construction company. **Corporate Professional** style with **Luxury Minimal** accents. Built with **Next.js App Router**, **Tailwind CSS**, **Shadcn UI**, and **Radix UI** per coding guidelines.

> **IMPORTANT**: This is a standalone page within the existing `qr-how-fast` project, not a separate project. It will live under `src/app/builder/page.tsx` as a Server Component.

---

## User Review Required

> **WARNING — Project Location**: This plan adds the landing page as a route inside the existing Next.js app at `/builder`. If you want a separate repo or directory instead, let me know before I start.

> **IMPORTANT — Images**: I will use the `generate_image` tool to create all hero, portfolio, and testimonial images. No placeholders.

---

## Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0F1B33` | Primary backgrounds, nav, footer |
| `--charcoal` | `#2D3748` | Body text, cards |
| `--gold` | `#D4AF37` | Accents, CTAs, highlights |
| `--white` | `#FAFAFA` | Backgrounds, text on dark |
| `--slate` | `#64748B` | Secondary text |
| `--light-gray` | `#F1F5F9` | Alternating section backgrounds |

### Typography (Google Fonts)
- **Headings**: `Montserrat` (700, 600) — strong, architectural feel
- **Body**: `Source Sans 3` (400, 500) — highly readable, not overused
- **Accent**: `Montserrat` (500, italic) — quotes, highlights

### Spacing & Layout
- Section padding: `py-24 md:py-32`
- Container max-width: `max-w-7xl`
- Generous whitespace between all elements
- Clean horizontal rules between sections (subtle `border-gold/20`)

### Animations
- **Scroll fade-in**: Intersection Observer — elements fade + slide up on enter
- **Hover**: Scale 1.03 on portfolio cards, gold underline on nav links
- **Testimonial carousel**: CSS scroll-snap with JS auto-advance
- No heavy libraries — vanilla JS + CSS transitions only

---

## Proposed Changes

### File Structure

```
src/app/builder/
├── page.tsx              [NEW] — Main Server Component (assembles all sections)
├── layout.tsx            [NEW] — Minimal layout (own fonts, no app shell)
├── builder.css           [NEW] — All custom styles (CSS variables, animations, sections)
└── components/
    ├── hero-section.tsx         [NEW]
    ├── about-section.tsx        [NEW]
    ├── services-section.tsx     [NEW]
    ├── portfolio-section.tsx    [NEW]
    ├── why-choose-section.tsx   [NEW]
    ├── testimonials-section.tsx [NEW] — 'use client' (carousel logic)
    ├── contact-section.tsx      [NEW] — 'use client' (form state)
    ├── footer-section.tsx       [NEW]
    ├── nav-bar.tsx              [NEW] — 'use client' (scroll spy, mobile menu)
    └── scroll-reveal.tsx        [NEW] — 'use client' (IntersectionObserver wrapper)
```

---

### Component Details

#### [NEW] `src/app/builder/layout.tsx`
Standalone layout that loads Montserrat + Source Sans 3 via `next/font/google`. Does NOT inherit the main app's `ClerkProvider` or `AuthProvider`. Contains only `<html>` + `<body>` + font variables.

#### [NEW] `src/app/builder/page.tsx`
Server Component — zero client JS. Renders all section components in order:
1. `NavBar`
2. `HeroSection`
3. `AboutSection`
4. `ServicesSection`
5. `PortfolioSection`
6. `WhyChooseSection`
7. `TestimonialsSection`
8. `ContactSection`
9. `FooterSection`

SEO: Custom `metadata` export with title, description, Open Graph tags.

#### [NEW] `src/app/builder/builder.css`
All styles in one file using CSS custom properties:
- `:root` variables for colors, spacing, font stacks
- `.section-fade-in` animation keyframes
- `.gold-underline` hover effect
- Portfolio grid hover overlay
- Testimonial carousel snap styles
- Responsive breakpoints (mobile-first)
- No Tailwind `@apply` — uses Tailwind utility classes directly in JSX

---

### Section Breakdown

#### 1. Hero Section (`hero-section.tsx`)
- Full-viewport height (`min-h-screen`)
- AI-generated background image of a modern glass building at golden hour
- Dark gradient overlay (`bg-gradient-to-b from-navy/80 to-navy/40`)
- Headline: `"Building the Future, One Structure at a Time"` — `Montserrat 700, text-5xl md:text-7xl`
- Subheading: `"Premium residential & commercial construction..."` — `Source Sans 3, text-xl`
- CTA button: `"Schedule a Consultation"` — gold bg, navy text, hover scale
- Sticky navigation bar at top (transparent → navy on scroll)

#### 2. About Section (`about-section.tsx`)
- Two-column layout (image left, text right) on desktop; stacked on mobile
- AI-generated image of construction team
- Company story paragraph (3-4 lines)
- Three value cards in a row: **Integrity** | **Innovation** | **Sustainability**
- Each card: icon (Lucide), title, 1-line description
- Gold accent line at top of each card

#### 3. Services Section (`services-section.tsx`)
- Section title: `"Our Services"` with gold underline accent
- 2x2 grid on desktop, single column on mobile
- Four service cards:
  1. 🏠 Custom Home Construction
  2. 🏢 Commercial Developments
  3. 🔨 Renovations & Remodeling
  4. 📋 Project Management
- Each card: icon, title, 2-line description, `"Learn More →"` link
- Subtle border, hover: gold left-border + slight lift shadow

#### 4. Portfolio Section (`portfolio-section.tsx`)
- Section title: `"Our Portfolio"`
- 3x2 grid (6 projects), 2-col on tablet, 1-col on mobile
- Each card: AI-generated building image, dark overlay on hover
- Hover reveals: project name, location, type (e.g., "Residential")
- CSS `transform: scale(1.03)` + `opacity` transition on hover
- Images generated:
  1. Modern luxury villa
  2. Glass office tower
  3. Renovated heritage building
  4. Waterfront apartment complex
  5. Eco-friendly community center
  6. Industrial loft conversion

#### 5. Why Choose Us (`why-choose-section.tsx`)
- Navy background with white/gold text
- 4-column grid (2x2 on mobile)
- Each stat box:
  - Large number/icon in gold (`text-4xl font-bold`)
  - Title below
  - 1-line description
- Stats:
  1. `100+` Completed Projects
  2. `🌿` Eco-Friendly Materials
  3. `✓` On-Time Delivery Guarantee
  4. `🏆` Award-Winning Design

#### 6. Testimonials (`testimonials-section.tsx`) — `'use client'`
- Light gray background
- Horizontal scroll-snap carousel (CSS-driven, minimal JS)
- 3 testimonial cards:
  - AI-generated avatar photo
  - Quote text in italics
  - Client name, project type
  - Gold quotation mark decorative element
- Navigation dots below
- Auto-advance every 6 seconds (pauses on hover)
- Only client component: manages `activeIndex` state

#### 7. Contact Section (`contact-section.tsx`) — `'use client'`
- Two columns: form left, info right
- Form fields (Shadcn `Input` + `Textarea`):
  - Name, Email, Phone, Message
  - Submit button (gold, full-width on mobile)
- Form state: `isSubmitting`, `isSuccess` with `useState`
- Right column:
  - Phone, email, address with Lucide icons
  - Embedded Google Maps `<iframe>` (generic coordinates)
  - Social media links row
- Form submission: `console.log` for now (no backend)

#### 8. Footer (`footer-section.tsx`)
- Navy background
- 3-column grid: Logo + tagline | Quick Links | Contact Info
- Social media icons (LinkedIn, Instagram, Facebook, Twitter)
- Bottom bar: copyright `© 2026 BuildCraft Pro. All rights reserved.`
- Gold accent divider line

---

### AI-Generated Images (10 total)

| # | Description | Usage |
|---|---|---|
| 1 | Modern glass building at golden hour, architectural photography | Hero background |
| 2 | Construction team reviewing blueprints on site | About section |
| 3 | Luxury modern villa with pool, exterior shot | Portfolio 1 |
| 4 | Sleek glass office tower in city skyline | Portfolio 2 |
| 5 | Beautifully renovated heritage brick building | Portfolio 3 |
| 6 | Waterfront apartment complex, modern design | Portfolio 4 |
| 7 | Eco-friendly community center with green roof | Portfolio 5 |
| 8 | Industrial loft conversion interior, exposed brick | Portfolio 6 |
| 9 | Professional woman, headshot for testimonial | Testimonial 1 |
| 10 | Professional man, headshot for testimonial | Testimonial 2-3 |

---

## Implementation Phases

### Phase 1: Foundation (Files + Layout + CSS)
1. Create `src/app/builder/layout.tsx` with fonts
2. Create `src/app/builder/builder.css` with full design system
3. Create `src/app/builder/page.tsx` as Server Component shell
4. Create `scroll-reveal.tsx` client wrapper

### Phase 2: Static Sections (Server Components)
5. Build `nav-bar.tsx` (client — scroll spy)
6. Build `hero-section.tsx`
7. Build `about-section.tsx`
8. Build `services-section.tsx`
9. Build `portfolio-section.tsx`
10. Build `why-choose-section.tsx`
11. Build `footer-section.tsx`

### Phase 3: Interactive Sections (Client Components)
12. Build `testimonials-section.tsx` (carousel)
13. Build `contact-section.tsx` (form)

### Phase 4: Image Generation
14. Generate all 10 images with `generate_image` tool
15. Copy images to `public/img/builder/`

### Phase 5: Polish & Verify
16. Test responsive layout at all breakpoints
17. Verify scroll animations work
18. Check accessibility (focus states, alt text, semantic HTML)
19. Run `npm run build` to verify no errors

---

## Verification Plan

### Automated
- `npm run build` — no TypeScript or build errors
- Browser test at `/builder` route

### Visual
- Desktop (1440px), Tablet (768px), Mobile (375px) screenshots
- Verify all animations trigger on scroll
- Verify testimonial carousel auto-advances
- Verify contact form shows success state

---

## Coding Guidelines Compliance

| Guideline | How Applied |
|---|---|
| Functional TypeScript | All components are functions, no classes |
| Server Components first | Only 3 client components (nav, testimonials, contact) |
| Tailwind mobile-first | All responsive styles use `md:` / `lg:` prefixes |
| Shadcn UI | Form inputs use Shadcn `Input`, `Textarea`, `Button` |
| No barrel imports | Direct imports from each component file |
| Descriptive variables | `isSubmitting`, `hasError`, `activeIndex` |
| Named exports | All components use `export function` |
| Lowercase-dash dirs | `src/app/builder/components/` |
| Performance | No unnecessary `useEffect`, minimal client JS |
