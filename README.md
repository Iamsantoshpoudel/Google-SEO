Santosh Poudel | Google SEO Project

Personal portfolio of Santosh Poudel, AI developer and founder of VerifiAI. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Firebase.

Features
Animated portfolio: preloader, particle hero, scroll reveals, text scramble, parallax gallery, marquee
Light and dark theme, remembered in localStorage
Installable PWA with offline support (service worker and offline page)
Anonymous visitor counting with Firebase Firestore (date and country only, no IP addresses)
Public live dashboard at /dashboard (visitors per day, by country, totals)
Cookie banner to accept or decline visit counting
SEO: metadata, Open Graph, JSON-LD (Person, ProfilePage, FAQ), sitemap.xml, robots.txt
Tech stack

Next.js 15, React 19, TypeScript, Tailwind CSS 4, Firebase (Firestore), next/font (Syne, Manrope) 
```
app/
  layout.tsx          Metadata, fonts, JSON-LD, global components
  page.tsx            Home page
  dashboard/          Public visitor dashboard
  offline/            Offline fallback page
  sitemap.ts          /sitemap.xml
  robots.ts           /robots.txt
  globals.css         Tailwind theme tokens and custom effects
components/           Hero, Particles, Gallery, Dashboard, VisitTracker, ...
lib/
  data.ts             All site content, links, blog posts, JSON-LD
  firebase.ts         Firebase init
  consent.ts          Cookie consent helpers
public/
  sw.js               Service worker
  site.webmanifest    PWA manifest
  icon-192.png, icon-512.png
firestore.rules       Firestore security rules
```