# Architecture Notes

## Purpose
This file summarizes the structural and architectural changes made during the recent full-site improvement pass. It is intended as a quick local reference for future edits.

## High-Level Direction
The site was moved toward a more component-driven marketing structure so public pages share the same layout patterns, CTA behavior, and SEO foundations.

## Core Architectural Changes
### 1. Shared page-building components
The following reusable components were introduced to reduce repetition across pages:

- `src/components/MarketingHero.tsx`
  - Standard hero section for marketing and landing pages
  - Supports eyebrow text, title, description, highlights, primary/secondary actions, and supporting links

- `src/components/PageCTA.tsx`
  - Standard closing CTA block used at the end of public pages
  - Keeps conversion paths consistent across the site

- `src/components/LegalPageIntro.tsx`
  - Shared intro/header block for legal pages
  - Preserves legal content while improving readability and navigation

### 2. Shared SEO and schema helpers
SEO and structured data were centralized further so page metadata is more consistent:

- `src/lib/seo.ts`
  - Default social sharing image handling
  - Shared metadata generation through `createPageMetadata()`

- `src/lib/schema.ts`
  - Shared helpers for:
    - breadcrumb schema
    - aggregate rating schema
    - offer catalog schema

### 3. Global layout simplification
The root layout in `src/app/layout.tsx` was updated to:

- keep site-wide metadata centralized
- preserve GTM integration unchanged
- simplify the fixed-header spacing behavior
- remove the extra quick-links strip that created unnecessary vertical space under the header

### 4. Header refactor for responsiveness
`src/components/Header.tsx` was tightened to avoid overlap and crowding:

- desktop navigation is shown only at larger breakpoints
- the logo area was simplified to an image-only lockup
- nav spacing and type sizing were tightened
- the top utility bar address was updated to `Europa-Allee 41-43`

Result: less collision risk between branding, navigation, and CTAs.

### 5. Footer strengthened as a site-wide conversion area
`src/components/Footer.tsx` was expanded so the footer is not only legal/navigation chrome but also a conversion and trust area with:

- consultation CTA
- trust/supporting info
- quick contact/location details

## Page-Level Structural Pattern
Most public-facing pages now follow this pattern:

1. shared hero component
2. page-specific content sections
3. shared CTA component

Legal pages now follow:

1. shared legal intro
2. preserved legal body content

## Pages Updated in This Pass
The reusable structure was applied across major public pages, including:

- homepage
- prices
- reviews
- FAQ
- contact
- gallery
- story/brand pages
- treatment and informational landing pages
- legal pages

## Content and Data Consistency Changes
Additional consistency work completed during this pass:

- address normalized to `Europa-Allee 41-43`
- metadata/social preview defaults aligned
- schema coverage expanded
- header spacing cleaned up
- hero-to-content spacing reduced

## Build and Deployment Notes
- The project builds as a static export.
- `npm run build` generates the deployable output in `out/`.
- The tracked `out/` folder may change after a successful build and can be committed separately if desired.

## Recommended Ongoing Rule
When adding a new public page, prefer:

- `MarketingHero` for the top section
- existing SEO helpers from `src/lib/seo.ts`
- schema helpers from `src/lib/schema.ts` when relevant
- `PageCTA` for the final conversion block

This keeps the site visually and structurally consistent.
