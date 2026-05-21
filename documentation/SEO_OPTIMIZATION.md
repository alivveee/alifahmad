# SEO (Search Engine Optimization) Documentation
## Portfolio of Alif Ahmad Mukhtar Darma Hidayat

This document describes all the SEO enhancements and optimizations implemented on this portfolio project to improve search engine indexing, semantic document structure, performance (LCP/speed), and accessibility.

---

## 1. Meta Tags & HTML Header (`index.html`)
The default minimal meta tags have been replaced with a comprehensive configuration for modern SEO:

- **Descriptive Page Title**: Changed `<title>` from "Alif Ahmad" to `Alif Ahmad Mukhtar Darma Hidayat | Frontend Engineer & Web Developer` to target highly relevant search terms.
- **Meta Description & Keywords**: Added an informative meta description summarizing experience, along with relevant keywords for frontend development.
- **Canonical URL**: Added `<link rel="canonical" href="https://www.alifahmad.my.id/" />` to prevent duplicate content issues when accessed via different subdomains or protocols.
- **Theme Color**: Added `<meta name="theme-color" content="#7c3aed" />` for consistent violet branding on mobile browsers.

---

## 2. Social Media & Rich Previews (Open Graph & Twitter Cards)
Configured web previews to look professional and engaging when shared across social channels:

- **Open Graph (Facebook/LinkedIn/Discord)**:
- `og:type`: `website`
- Optimized `og:title` & `og:description`.
- `og:image`: Pointing to `alif-ahmad-logo.png` with standard resolutions (`1200x630`).
- `og:locale`: Supports default `en_US` and alternate `id_ID` to align with the website's multilingual capability.
- **Twitter Card**:
- `twitter:card`: `summary_large_image` to display large preview images.
- Linked creator profile details.

---

## 3. JSON-LD Structured Data
Added two JSON-LD schema scripts to help search engines understand the entity identities and relationships of the site:

1. **Person Schema**:
   - Defines **Alif Ahmad Mukhtar Darma Hidayat** as a *Frontend Engineer*.
   - Outlines core areas of expertise (`knowsAbout`), including React.js, Next.js, TypeScript, etc.
   - Connects the identity to official social profiles (`sameAs`) such as GitHub, LinkedIn, and Instagram.
2. **WebSite Schema**:
   - Outlines the website's name, URL, and supported languages (`en`, `id`).

---

## 4. Crawling & Indexing (Robots.txt & Sitemap.xml)
Created essential search engine files in the `/public` folder for proper crawling and map routing:

- **`public/robots.txt`**:
- Instructs all search crawlers that they are allowed to index the entire site.
- Points bots directly to the sitemap URL.
- **`public/sitemap.xml`**:
- Maps the primary page URL (`https://www.alifahmad.my.id/`).
- Implements **`xhtml:link rel="alternate"`** with `hreflang` attributes to notify search engines about both the English (`en`) and Indonesian (`id`) versions of the page.

---

## 5. Semantic HTML & Heading Hierarchy (Accessibility & SEO)
Fixed the structure of heading tags to comply with the standard SEO rule of having exactly one primary `<h1>` tag per page:

- **Hero Section**: Retained the single `<h1>` tag exclusively for the name (`Alif Ahmad Mukhtar Darma Hidayat`).
- **Scroll Down Label**: Replaced the decorative "Scroll Down" label wrapper from an `<h1>` tag to a `<p>` tag.
- **Section Titles**: Changed main section title headers from `<h1>` to `<h2>` across all sections:
- About (`about.title` & `about.skills`)
- Experience (`experience.title`)
- Projects (`projects.title`)
- Stacks (`stacks.title`)
- **Semantic Tags**:
- Replaced the main menu list container wrapper `div` in `Navbar.tsx` with a `<nav aria-label="Main navigation">` tag.

---

## 6. Dynamic Language Localization (`Navbar.tsx`)
For multilingual sites using i18n, it is crucial that the `lang` attribute in the `<html>` tag updates in sync with the active language:

- Implemented a `useEffect` hook in `Navbar.tsx` that listens to language changes from `i18next`.
- Updates the HTML lang property dynamically:
```typescript
useEffect(() => {
  document.documentElement.lang = i18n.language.startsWith('id') ? 'id' : 'en';
}, [i18n.language]);
```
- This ensures screen readers read content correctly and assists Google in detecting localized versions.

---

## 7. Media & Performance Optimization (Lazy Loading & Alt Text)
Optimized image tags for web performance and image search indexing:

- **Descriptive Alt Text**:
- Replaced generic alt texts like `alt="Hero Image"` and `alt="Logo"` with descriptive keywords like `alt="Alif Ahmad Mukhtar Darma Hidayat - Frontend Engineer"` and `alt="Alif Ahmad - Home"`.
- **Lazy Loading**:
- Appended `loading="lazy"` to images below the initial viewport fold (e.g., the illustrated avatar emoji in *About* and the screenshot in *Selected Projects*).
- This drastically reduces initial page load size, improving LCP and Speed Index.

---
*This documentation was automatically generated after the SEO optimizations were integrated on May 20, 2026.*
