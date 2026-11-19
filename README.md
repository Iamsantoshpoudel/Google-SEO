Santosh Poudel | Google SEO Project

Personal portfolio of Santosh Poudel, AI developer and founder of VerifiAI. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Firebase.

Features
Animated portfolio: preloader, particle hero, scroll reveals, text scramble, parallax gallery, marquee
Light and dark theme, remembered in localStorage
Installable PWA with offline support (service worker and offline page)
Anonymous visitor counting with Firebase Firestore (date and country only, no IP addresses)
Public live dashboard at /dashboard (visitors per day, by country, totals)
Cookie banner to accept or decline visit counting
SEO: metadata, Open Graph, JSON-LD (Person, ProfilePage, FAQ, breadcrumbs), sitemap.xml, AI-crawler rules, llms.txt, IndexNow
Tech stack

Next.js 16.4.6 (App Router), React 19, TypeScript 5.6, Tailwind CSS 4, Firebase 12 (Firestore), next/font (Syne, Manrope)

## GitHub Actions 

`.github/workflows/ci.yml` runs `npm ci`, lint, and a production build on pull requests targeting `main` and pushes to `main`, using Node.js 26.x.

`.github/workflows/indexnow.yml` submits the URLs in the deployed sitemap to IndexNow after pushes to `main`; it can also be run manually after deployment.

Hosting provider handles preview and production deployments through its Git integration. Connect this GitHub repository in the Hosting provider project settings and set `main` as the production branch. With that integration enabled, pull requests receive preview deployments and pushes to `main` trigger production deployments; this workflow does not create duplicate Hosting provider deployments or require Hosting provider secrets in GitHub.

To prevent merging code that fails CI, configure GitHub branch protection for `main` and require the **Lint and build** status check.