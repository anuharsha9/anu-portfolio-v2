# Portfolio Website

A modern, performant portfolio website showcasing Principal UX Designer work, featuring detailed case studies in enterprise design, legacy modernization, and AI/ML UX.

**🌐 Live Site:** [anujaharsha.com](https://anujaharsha.com)

## Overview

This portfolio demonstrates end-to-end ownership of complex UX projects at enterprise scale. It features three detailed case studies that showcase:

- **Enterprise UX Design** – Modernizing legacy systems used by millions
- **AI/ML UX** – Making machine learning accessible to non-technical users
- **Systems Thinking** – Architectural decisions and cross-functional leadership
- **Workflow Design** – Transforming complex processes into intuitive experiences

## Featured Case Studies

1. **[ReportCaster](https://anujaharsha.com/work/reportcaster/)** – Redesigning a 40-year-old enterprise scheduler
   - 75% reduction in clicks
   - Unified scattered workflows
   - Reduced support load

2. **[ML Functions](https://anujaharsha.com/work/ml-functions/)** – Making enterprise ML training usable
   - Step-based guided workflows
   - Clearer mental models
   - Aligned with DSML strategy

3. **[IQ Plugin](https://anujaharsha.com/work/iq-plugin/)** – Unifying insights inside WebFOCUS hub
   - Reduced context switching
   - Made insights discoverable
   - Multi-persona design

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Hosting:** AWS S3 + CloudFront
- **Build:** Static Site Generation (SSG)

### Key Dependencies

- `next`: 14.2.18
- `react`: 18.3.1
- `framer-motion`: 11.11.1
- `tailwindcss`: 3.4.17
- `typescript`: 5.6.3

## Features

- ✨ **Performance Optimized** – Static site generation for fast load times
- 🎨 **Smooth Animations** – Micro-interactions and scroll-triggered animations
- 📱 **Fully Responsive** – Mobile-first design that works across all devices
- ♿ **Accessible** – WCAG 2.1 AA compliance considerations
- 🔍 **SEO Optimized** – Structured data, sitemaps, and meta tags
- 🎬 **Interactive Case Studies** – Rich media, before/after comparisons, and workflow visualizations
- 🌐 **PWA Ready** – Service worker for offline capabilities

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anuharsha9/anu-portfolio.git
cd anu-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` – Start development server on port 3000
- `npm run build` – Build production static site
- `npm run lint` – Run ESLint
- `npm run clean` – Remove `.next` directory

### Project Structure

```
anu-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── me/                # About page
│   │   └── work/              # Case study pages
│   ├── components/            # React components
│   │   ├── case-study/       # Case study components
│   │   ├── home/             # Landing page sections
│   │   ├── layout/           # Site header, footer
│   │   └── ui/               # Reusable UI components
│   ├── data/                  # Case study content data
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── public/                     # Static assets
│   ├── images/               # Images and screenshots
│   ├── videos/               # Video files
│   └── assets/               # PDFs and documents
├── scripts/                   # Build and deployment scripts
└── out/                       # Static export output (generated)
```

### Key Components

- **Case Study Layout** – Reusable layout for all case studies
- **Visual Components** – Interactive breakdowns, comparisons, and workflows
- **Navigation** – Sticky header with section navigation for case studies
- **Video Player** – Custom video player for case study walkthroughs

## Deployment

The site is deployed as a static site to AWS S3 and served via CloudFront.

### Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Deploy to S3 + CloudFront

Use the deployment script:

```bash
bash scripts/deploy-with-cloudfront.sh anujaharsha.com E1RKSKYEABLX6E
```

The script will:
1. Build the production site
2. Upload to S3 with proper cache headers
3. Create a CloudFront invalidation

## Performance

- **Lighthouse Score:** Optimized for performance, accessibility, and SEO
- **Bundle Size:** Code-splitting and optimized chunks
- **Image Optimization:** Responsive images with proper formats
- **Static Generation:** Pre-rendered pages for instant loading

## Content Management

Case study content is managed in TypeScript data files under `src/data/`:

- `reportcaster.ts` – ReportCaster case study
- `ml-functions.ts` – ML Functions case study
- `iq-plugin.ts` – IQ Plugin case study
- `home.ts` – Landing page content

This approach provides:
- Type safety for content
- Easy updates without touching component code
- Consistent structure across case studies

## Design Philosophy

This portfolio embodies the same principles applied in the showcased work:

- **Clarity over complexity** – Concise, scannable content
- **Visual storytelling** – Let visuals show, text interpret
- **Intentional design** – Every element serves a purpose
- **Accessible by default** – Built with accessibility in mind

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Website:** [anujaharsha.com](https://anujaharsha.com)
- **LinkedIn:** [linkedin.com/in/anujaharsha](https://linkedin.com/in/anujaharsha)
- **Email:** Available via contact form on the website

---

Built with ❤️ using Next.js and TypeScript
