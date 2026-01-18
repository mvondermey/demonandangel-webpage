# Demon and Angel Website

A modern, SEO-optimized website for demonandangel.com built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful dark theme with gradient accents representing duality
- **SEO Optimized**: 
  - Comprehensive meta tags on every page
  - Open Graph and Twitter Card support
  - Structured data (JSON-LD) for rich snippets
  - Auto-generated sitemap.xml and robots.txt
  - Semantic HTML structure
- **Multiple Landing Pages**:
  - Home - Main landing page with hero, features, products, testimonials
  - About - Company story, values, team, timeline
  - Products - Product catalog with categories
  - Services - Consultations, workshops, events, custom orders
  - Blog - Articles and spiritual insights
  - Contact - Contact form and information
  - FAQ - Frequently asked questions
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance**: Optimized images, lazy loading, minimal JavaScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server runs at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Auto-generated sitemap
│   ├── robots.ts       # Robots.txt configuration
│   ├── about/          # About page
│   ├── products/       # Products pages
│   ├── services/       # Services pages
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   └── faq/            # FAQ page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
```

## SEO Configuration

Each page includes:
- Unique title and description
- Targeted keywords
- Open Graph metadata
- Twitter Card metadata
- Canonical URLs

The site also includes:
- JSON-LD structured data for organization
- Auto-generated XML sitemap
- Optimized robots.txt

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `demon` colors: Red tones
- `angel` colors: Blue tones

### Content

Update content in each page file under `src/app/`

### Metadata

Global metadata is in `src/app/layout.tsx`
Page-specific metadata is exported from each page file

## Deployment

This site is optimized for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

```bash
# Build for production
npm run build
```

## License

© 2024 Demon and Angel. All rights reserved.
