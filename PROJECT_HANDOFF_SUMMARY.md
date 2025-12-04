# Project Handoff Summary
## Portfolio Website - Current State & Next Steps

**Last Updated:** December 2025  
**Project:** anujaharsha.com Portfolio Website  
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## 🎯 Project Overview

A professional portfolio website for Anuja Harsha Nimmagadda, Principal UX Designer, showcasing enterprise design work, case studies, and the D.E.S.I.G.N framework. The site emphasizes clean, minimal aesthetics, strong accessibility, and AI-augmented workflow transparency.

**Key Features:**
- 3 detailed case studies (ReportCaster, ML Functions, IQ Plugin)
- D.E.S.I.G.N framework showcase
- Password-protected sensitive content
- PWA capabilities
- Comprehensive accessibility features
- SEO optimized

---

## 📊 Current State of the Website

### ✅ Completed & Working Features

#### 1. **Core Structure**
- ✅ Landing page with hero brain animation, case study overviews, testimonials
- ✅ About Me page (`/me`) with intro video, AI workflow section, design writings
- ✅ 3 case study pages (`/work/reportcaster`, `/work/ml-functions`, `/work/iq-plugin`)
- ✅ Resume page (`/resume`) with HTML view and PDF download
- ✅ Accessibility page (`/accessibility`) with statement

#### 2. **Navigation System**
- ✅ Main header with logo, dropdown menus (Case Studies, Me), Contact, Resume
- ✅ Second navigation bar for landing page (section navigation)
- ✅ Second navigation bar for About Me page (section navigation)
- ✅ Mobile full-screen menu
- ✅ Sticky navigation on case study pages
- ✅ Case study section navigation (top of hero)
- ✅ Back to top button

#### 3. **Design System**
- ✅ Comprehensive design tokens (`src/styles/tokens.css`)
  - Color system (light/dark backgrounds, teal accent palette)
  - Typography scale (1.25 ratio)
  - Spacing system (4px base)
  - Border radius tokens
  - Animation timing tokens
  - Elevation/shadow system
- ✅ Surface classes (`.surface-light`, `.surface-dark`, etc.)
- ✅ Responsive typography utilities
- ✅ Focus states and accessibility utilities

#### 4. **Case Studies**
- ✅ Hero sections with 2-column layout (text + floating laptop image)
- ✅ Quick overview sections (STAR format, impact metrics)
- ✅ D.E.S.I.G.N framework sections (6 sections: D, E, S, I, G, N)
- ✅ Project timelines (ReportCaster, ML Functions, IQ Plugin specific)
- ✅ Architecture diagrams (ReportCaster, IQ Plugin)
- ✅ Version iteration components (V1, V2, V3 tabs)
- ✅ Before/after comparisons (locked by default)
- ✅ Workflow prototypes with step navigation
- ✅ Image lightboxes with touch gestures
- ✅ Password-protected sensitive content
- ✅ Related case studies section
- ✅ "Let's Talk" CTAs
- ✅ Hero testimonials

#### 5. **Content Protection**
- ✅ `LockedContent` component for sensitive content
- ✅ Password gate for case study access
- ✅ Session storage for unlock state
- ✅ Global unlock (unlock once, access all)
- ✅ IQ Plugin specific unlock (separate from global)
- ✅ Blur effect on locked content

#### 6. **Accessibility**
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus trapping in modals
- ✅ Focus visible indicators
- ✅ Skip to content links
- ✅ Semantic HTML structure
- ✅ WCAG AA color contrast compliance
- ✅ Screen reader support (basic)
- ✅ Touch gesture support (swipe navigation)

#### 7. **Performance & SEO**
- ✅ Next.js Image optimization
- ✅ Code splitting and bundle optimization
- ✅ Lazy loading for images and components
- ✅ Font optimization (preconnect, font-display: swap)
- ✅ Structured data (JSON-LD) for:
  - WebSite schema
  - Person schema
  - Article schema (case studies)
  - Organization schema
  - BreadcrumbList schema
- ✅ Comprehensive meta tags
- ✅ Sitemap generation
- ✅ Robots.txt

#### 8. **PWA Features**
- ✅ Service worker (`public/sw.js`)
- ✅ Web manifest (`public/site.webmanifest`)
- ✅ Install prompt component
- ✅ Offline support

#### 9. **Interactive Components**
- ✅ Custom video player with chapters
- ✅ Image lightbox with navigation
- ✅ Before/after comparison slider
- ✅ Workflow prototype stepper
- ✅ Collapsible sections
- ✅ Dropdown navigation menus
- ✅ ADPList reviews display

#### 10. **Content & Data**
- ✅ Case study data files (`src/data/reportcaster.ts`, `ml-functions.ts`, `iq-plugin.ts`)
- ✅ Homepage data (`src/data/home.ts`)
- ✅ Testimonials and recommendations
- ✅ ADPList reviews integration

---

## 🔧 Important Changes Made

### Recent Major Updates

#### 1. **Navigation Restructuring (Most Recent)**
- ✅ Added dropdown menus to main nav (Case Studies, Me)
- ✅ Added second navigation bar for About Me page
- ✅ Removed "Me" dropdown from main nav (kept for content preview)
- ✅ Ensured only one dropdown open at a time
- ✅ Updated scroll offset calculations for dual nav bars

#### 2. **D.E.S.I.G.N Framework Integration**
- ✅ All case studies structured with 6 sections (D, E, S, I, G, N)
- ✅ Section indices match framework letters
- ✅ Framework displayed on landing page (`ExecutiveSummary` component)

#### 3. **Content Optimization**
- ✅ Removed redundant body text that overlaps with visuals
- ✅ Broke down long paragraphs into 3-5 line chunks
- ✅ Marked sensitive content (legacy UI, user personas, company info)
- ✅ Made new workflow videos public (unlocked)

#### 4. **Visual Consistency**
- ✅ Enforced light backgrounds on timeline and architecture sections
- ✅ Standardized max-width (1200px) for content
- ✅ Fixed horizontal alignment in hero 2-column layouts
- ✅ Centered hero titles and case study navigation
- ✅ Adjusted social icons positioning

#### 5. **Resume System**
- ✅ HTML resume optimized for ATS
- ✅ Build-time PDF generation (Puppeteer)
- ✅ Resume page with download functionality
- ✅ Portfolio-consistent styling (subtle)

#### 6. **AI-Augmented Positioning**
- ✅ "How I Work with AI" section on About Me page
- ✅ Tech stack footer/visual
- ✅ GitHub source code link
- ✅ Accessibility statement link
- ✅ ADPList mentorship link
- ✅ Clear distinction: work (productivity) vs personal (code-shipping)

#### 7. **Micro-interactions**
- ✅ Enhanced hover states (lift, scale effects)
- ✅ Touch gestures for image galleries
- ✅ Smooth transitions and animations
- ✅ Card interactions

#### 8. **Accessibility Enhancements**
- ✅ Comprehensive ARIA labels
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader optimizations

---

## 🚧 Important Things That Need to Be Done

### 🔴 HIGH PRIORITY (Critical for UX Principles Compliance)

#### 1. **D.E.S.I.G.N Framework Visual Grouping** ⚠️ CRITICAL
**Status:** Not Started  
**Priority:** Highest

**What Needs to Be Done:**
- Group case study sections into 3 visual groups:
  - **Group 1:** D + E (Discover & Empathize)
  - **Group 2:** S + I (Simplify & Iterate)
  - **Group 3:** G + N (Grow & Navigate)
- Create `CaseStudySectionGroup.tsx` component
- Add visual headers showing framework phase
- Use subtle teal accent for group indicators
- Maintain all existing functionality (password protection, etc.)
- **Evaluate:** If G+N don't align with "Impact & Results", create optional 4th section

**Files to Create:**
- `src/components/case-study/CaseStudySectionGroup.tsx`

**Files to Modify:**
- `src/components/case-study/CaseStudyLayout.tsx`
- Verify section structure in all 3 case study data files

**Constraints:**
- Must be consistent across all 3 case studies
- Maintain clean, minimal aesthetic
- Don't add heavy visual elements

---

#### 2. **Timeline Event Chunking by D.E.S.I.G.N Phases** ⚠️ CRITICAL
**Status:** Not Started  
**Priority:** Highest

**What Needs to Be Done:**
- Group timeline events into D.E.S.I.G.N phases
- Add phase headers (D, E, S, I, G, N)
- Visual grouping with subtle colors/borders
- Expandable "View more" for detailed events
- Apply to all timeline components

**Files to Modify:**
- `src/components/case-study/ProjectTimeline.tsx`
- `src/components/case-study/ReportCasterTimeline.tsx`
- `src/components/case-study/MLFunctionsTimeline.tsx`
- `src/components/case-study/IQPluginTimeline.tsx`

**Constraints:**
- Within D.E.S.I.G.N framework structure
- Consistent across all case studies

---

#### 3. **Reduce "How I Work with AI" Tiles**
**Status:** Not Started  
**Priority:** High

**What Needs to Be Done:**
- Reduce from 6 tiles to 4-5 key tiles
- Group related tiles (e.g., "Learning" + "Iteration")
- Use progressive disclosure for additional details
- Ensure core message is conveyed

**Files to Modify:**
- `src/app/me/page.tsx`

---

#### 4. **Feedback Systems**
**Status:** Not Started  
**Priority:** High

**What Needs to Be Done:**
- **Success Messages:** Create toast system for password unlock, form submissions
- **Loading States:** Use single gear animation (find existing implementation) for page transitions
- **Reading Progress:** Add subtle progress bar for long case studies

**Files to Create:**
- `src/components/ui/Toast.tsx`
- `src/hooks/useToast.ts`
- `src/components/ui/PageTransitionLoader.tsx` (use single gear animation)
- `src/components/navigation/ReadingProgress.tsx`

**Files to Modify:**
- `src/components/case-study/LockedContent.tsx`
- `src/components/case-study/PasswordGate.tsx`
- `src/app/layout.tsx`
- `src/components/case-study/CaseStudyLayout.tsx`

**Note:** Need to locate existing single gear loading animation first

---

#### 5. **Standardization**
**Status:** Partially Done  
**Priority:** High

**What Needs to Be Done:**
- **Border Radius:** Audit all components, use design tokens consistently
- **Nav Hover Borders:** Fix thickness (currently too thick)
- **Animation Timing:** Standardize (DO NOT touch BrainGears animation)
- **Light/Dark Theme:** Create theme toggle (DO NOT touch BrainGears SVG)

**Files to Review:**
- All component files for border-radius
- `src/components/layout/SiteHeader.tsx` (nav hover borders)
- `src/components/layout/NavDropdown.tsx` (hover borders)
- `src/lib/animations.ts` (timing)
- `src/styles/tokens.css` (verify tokens used)

**Files to Create:**
- `src/components/ui/ThemeToggle.tsx`
- `src/hooks/useTheme.ts`

**Critical Constraint:** Never touch `src/components/HeroBrain.tsx` or BrainGears SVG animation

---

#### 6. **Error Prevention**
**Status:** Not Started  
**Priority:** Medium-High

**What Needs to Be Done:**
- **Undo Functionality:** Lightweight undo for modal/lightbox closures (simple toast)
- **Input Hints:** Add helpful placeholder text, inline validation
- **Autocomplete:** Add autocomplete attributes to forms

**Files to Create:**
- `src/hooks/useUndo.ts` (simplified)
- `src/components/ui/UndoToast.tsx`

**Files to Modify:**
- `src/components/case-study/ImageLightbox.tsx`
- `src/components/video/VideoModal.tsx`
- `src/components/case-study/PasswordGate.tsx`
- `src/components/case-study/LockedContent.tsx`

**Note:** Skip confirmation dialogs - not needed for portfolio

---

#### 7. **Accessibility Audit**
**Status:** Partially Done  
**Priority:** High

**What Needs to Be Done:**
- **Focus Trapping:** Verify all modals trap focus properly
- **Skip Links:** Ensure present on all pages
- **Alt Text:** Audit all images, add descriptive alt text for complex visuals
- **Screen Reader Testing:** Test with NVDA, JAWS, VoiceOver

**Files to Review:**
- `src/components/case-study/ImageLightbox.tsx`
- `src/components/video/VideoModal.tsx`
- `src/components/case-study/LockedContent.tsx`
- `src/hooks/useFocusTrap.ts`
- `src/components/accessibility/SkipToContent.tsx`
- All image components

---

### 🟡 MEDIUM PRIORITY

#### 8. **Visual Hierarchy Enhancement**
**Status:** Not Started  
**Priority:** Medium

**What Needs to Be Done:**
- Increase size contrast for headings (subtle)
- Add visual emphasis to key content (minimal)
- Improve spacing relationships
- **DO NOT overuse colors** - maintain clean, minimal aesthetic

**Files to Review:**
- `src/components/case-study/QuickOverview.tsx`
- `src/components/case-study/SectionBlock.tsx`
- `src/app/me/page.tsx`

---

#### 9. **Simplify Complex Visuals**
**Status:** Not Started  
**Priority:** Medium

**What Needs to Be Done:**
- Add progressive disclosure to architecture diagrams
- "Show more details" toggle
- Break complex diagrams into steps
- **Within D.E.S.I.G.N framework constraints**

**Files to Modify:**
- `src/components/case-study/ReportCasterArchitecture.tsx`
- `src/components/case-study/IQPluginArchitecture.tsx`

---

#### 10. **Improve Affordances**
**Status:** Not Started  
**Priority:** Medium

**What Needs to Be Done:**
- Add hover states to all clickable images
- Add "click to expand" indicators (subtle)
- Improve password field (show/hide toggle)
- Add tooltips to icon-only buttons

**Files to Modify:**
- `src/components/case-study/SectionBlock.tsx`
- `src/components/case-study/LockedContent.tsx`
- `src/components/layout/SiteHeader.tsx`

---

### 🟢 LOW PRIORITY

#### 11. **Simplified View (Recruiter-Friendly)**
**Status:** Not Started  
**Priority:** Low

**What Needs to Be Done:**
- Create "Simplified View" toggle for each case study
- Show only essential information:
  - Quick overview (STAR format)
  - Key metrics
  - Final solution
  - Impact results
- Hide detailed process sections
- Make it extremely recruiter-friendly (quick scan, key achievements)

**Files to Create:**
- `src/components/case-study/SimplifiedView.tsx`

**Files to Modify:**
- `src/components/case-study/CaseStudyLayout.tsx`
- All case study data files

---

## 📋 Specific Instructions for New Agent Chat

### Critical Rules & Constraints

1. **NEVER touch BrainGears animation**
   - File: `src/components/HeroBrain.tsx`
   - This is completely off-limits
   - If theme changes needed, user will create light theme in Figma first

2. **D.E.S.I.G.N Framework Structure**
   - All case studies MUST follow: 6 sections in 3 groups (D+E, S+I, G+N)
   - Sections already have indices: D, E, S, I, G, N
   - Any grouping/restructuring must maintain this structure
   - Must be consistent across all 3 case studies

3. **Design Aesthetic**
   - Clean, minimal, modern
   - Don't overuse colors or effects
   - Subtle improvements, not heavy-handed changes
   - Maintain teal accent color (`--accent-teal`)
   - Light backgrounds for content sections

4. **Consistency Requirements**
   - All changes must apply uniformly across all 3 case studies
   - Use design system tokens consistently
   - Standardize border radius, spacing, animations

5. **Content Protection**
   - Sensitive content (legacy UI, user personas, company info) must be password-protected
   - Global unlock system (unlock once, access all)
   - IQ Plugin has separate unlock
   - New workflow videos are public (unlocked)

---

### Implementation Order (Recommended)

**Phase 1: D.E.S.I.G.N Framework Restructuring (START HERE)**
1. Group case study sections into 3 visual groups
2. Chunk timeline events by D.E.S.I.G.N phases
3. Reduce "How I Work with AI" tiles

**Phase 2: Feedback & Loading**
1. Success messages (toast system)
2. Loading states (single gear animation)
3. Reading progress indicator

**Phase 3: Standardization**
1. Border radius standardization
2. Nav hover border fixes
3. Animation timing standardization
4. Theme toggle (exclude BrainGears)

**Phase 4: Error Prevention & Accessibility**
1. Undo functionality
2. Input hints & validation
3. Focus trapping verification
4. Skip links
5. Alt text enhancement

**Phase 5: Polish**
1. Visual hierarchy
2. Complex visuals simplification
3. Affordances improvement
4. Simplified view (optional)

---

### Key Files & Locations

#### Design System
- `src/styles/tokens.css` - All design tokens
- `src/app/globals.css` - Global styles and utilities
- `tailwind.config.ts` - Tailwind configuration

#### Case Studies
- `src/data/reportcaster.ts` - ReportCaster case study data
- `src/data/ml-functions.ts` - ML Functions case study data
- `src/data/iq-plugin.ts` - IQ Plugin case study data
- `src/components/case-study/CaseStudyLayout.tsx` - Main case study layout
- `src/types/caseStudy.ts` - TypeScript types

#### Navigation
- `src/components/layout/SiteHeader.tsx` - Main header
- `src/components/layout/NavDropdown.tsx` - Dropdown menu component
- `src/components/navigation/AboutMeSectionNav.tsx` - About Me section nav
- `src/components/navigation/LandingPageSectionNav.tsx` - Landing page section nav

#### Components
- `src/components/case-study/LockedContent.tsx` - Password-protected content
- `src/components/case-study/ImageLightbox.tsx` - Image modal
- `src/components/case-study/ProjectTimeline.tsx` - Generic timeline
- `src/components/case-study/ReportCasterArchitecture.tsx` - RC architecture
- `src/components/case-study/IQPluginArchitecture.tsx` - IQ architecture

#### Pages
- `src/app/page.tsx` - Landing page
- `src/app/me/page.tsx` - About Me page
- `src/app/work/[slug]/page.tsx` - Case study pages
- `src/app/resume/page.tsx` - Resume page

---

### Testing Checklist

Before considering any feature complete:

- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iOS Safari, Chrome)
- [ ] Test keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Verify password protection works
- [ ] Check all 3 case studies for consistency
- [ ] Verify responsive breakpoints
- [ ] Check color contrast (WCAG AA)
- [ ] Test loading states
- [ ] Verify no console errors

---

### Common Issues & Solutions

1. **Dark backgrounds on timeline/architecture sections**
   - Solution: Force `isLightBackground = true` and wrap in `MotionSection` with `surface-light`

2. **Navigation not showing**
   - Solution: Check scroll manager, visibility state, z-index

3. **Password protection not working**
   - Solution: Check sessionStorage keys, unlock event dispatching

4. **Images not opening in lightbox**
   - Solution: Ensure `onClick` handlers are attached, `ImageLightbox` is rendered

5. **Spacing inconsistencies**
   - Solution: Use design system tokens (`--space-*`), check `max-w-[1200px]` containers

---

### Documentation Files

- `UX_DESIGN_PRINCIPLES_EVALUATION.md` - Full UX principles evaluation
- `UX_PRINCIPLES_ACTION_PLAN.md` - Detailed action plan with user notes
- `IMPLEMENTATION_PLAN.md` - Implementation strategy
- `MASTER_ACTION_PLAN.md` - Job search and portfolio amplification strategy
- `PORTFOLIO_SCORE_UPDATE.md` - Portfolio scoring and improvements

---

### Next Steps for New Agent

1. **Read this document completely**
2. **Review `UX_PRINCIPLES_ACTION_PLAN.md` for detailed requirements**
3. **Start with Phase 1: D.E.S.I.G.N Framework Restructuring**
4. **Test each change before moving to next**
5. **Maintain consistency across all 3 case studies**
6. **Follow all constraints (especially BrainGears)**
7. **Keep changes subtle and minimal**

---

## 🎯 Success Metrics

### Current State:
- ✅ Functional website with all core features
- ✅ Good accessibility foundation
- ✅ SEO optimized
- ⚠️ Sections not visually grouped (cognitive load issue)
- ⚠️ Some inconsistencies in design tokens
- ⚠️ Missing feedback systems

### Target State:
- ✅ D.E.S.I.G.N framework visually grouped (3 groups of 2)
- ✅ Timeline events chunked by phases
- ✅ Comprehensive feedback systems
- ✅ Standardized design tokens
- ✅ Light/dark theme toggle
- ✅ Improved accessibility (verified)
- ✅ Better cognitive load management

---

## 🔧 Development & Deployment

### Development Setup

**Prerequisites:**
- Node.js (v18+)
- npm or yarn
- AWS CLI (for deployment)

**Installation:**
```bash
npm install
```

**Development Scripts:**
- `npm run dev` - Start dev server (with predev cleanup)
- `npm run dev:clean` - Clean .next and start dev server
- `npm run dev:restart` - Kill existing dev server, clean cache, restart
- `npm run build` - Production build (generates sitemap and PDF resume)
- `npm run build:clean` - Clean build
- `npm run lint` - Run ESLint
- `npm run clean` - Remove .next directory

**⚠️ CRITICAL: Dev Server Restart Process**
- The Next.js dev server can get into a bad state after code changes
- **ALWAYS use `npm run dev:restart` after making code changes** (especially when adding/removing components, changing imports, modifying TypeScript types)
- This script: stops any running dev server → clears .next cache → starts fresh dev server
- Manual process if needed: `pkill -f "next dev"` → `rm -rf .next` → `npm run dev:clean`

### Environment Variables

Create `.env.local` file (not committed to git):

```bash
# Site URL (used for structured data, meta tags)
NEXT_PUBLIC_SITE_URL=https://anujaharsha.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Default Values:**
- `NEXT_PUBLIC_SITE_URL` defaults to `https://anujaharsha.com` if not set
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` is optional (analytics won't work without it)

### Build Process

**Build Steps:**
1. `prebuild` script runs: Cleans `.next` and generates sitemap
2. `next build` - Creates static export in `out/` directory
3. `postbuild` script runs: Generates PDF resume using Puppeteer

**Build Output:**
- Static files in `out/` directory
- Optimized for static hosting (S3)
- Images are unoptimized (required for static export)
- Trailing slashes enabled (helps with S3 routing)

### Deployment

**Deployment Target:** AWS S3 + CloudFront

**Deployment Script:**
```bash
npm run deploy:s3
```

**Deployment Process:**
1. Build static site (`npm run build`)
2. Upload to S3 bucket
3. Create CloudFront invalidation

**Deployment Files:**
- `scripts/deploy-s3.sh` - Deployment script
- Requires AWS CLI configuration
- S3 bucket and CloudFront distribution must be configured

**Post-Deployment:**
- CloudFront cache invalidation may take a few minutes
- Check CloudFront distribution for cache status

### Key Dependencies

**Production:**
- `next` (14.2.18) - React framework
- `react` (18.3.1) - UI library
- `react-dom` (18.3.1) - React DOM
- `framer-motion` (11.11.1) - Animations

**Development:**
- `typescript` (5.6.3) - Type safety
- `tailwindcss` (3.4.17) - CSS framework
- `puppeteer` (24.32.0) - PDF generation
- `sharp` (0.34.5) - Image optimization
- `@svgr/webpack` (8.1.0) - SVG handling

---

## 🔐 Security & Access

### Password Protection

**Default Password:** `anu-access`

**Password System:**
- Global unlock: Unlock once, access all protected content (except IQ Plugin)
- IQ Plugin: Separate unlock (doesn't respect global unlock)
- Session storage: Unlock persists until browser tab closes
- Storage keys:
  - `portfolio-globally-unlocked` - Global unlock
  - `case-study-unlocked-{slug}` - Case-specific unlock

**Protected Content:**
- Legacy UI screenshots
- User personas
- Sensitive company information
- Some architecture diagrams
- Version iteration details (V1, V2, V3)

**Public Content:**
- New workflow videos (after redesign)
- Public demo links
- Impact metrics
- Quick overview sections

---

## 📊 Analytics & Tracking

### Google Analytics

**Setup:**
- Component: `src/components/analytics/GoogleAnalytics.tsx`
- Environment variable: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Tracks: Page views, PWA installs, external link clicks, resume downloads

**Tracking Events:**
- Page views (automatic)
- Resume downloads
- External link clicks
- PWA install prompts
- Password unlocks

---

## 🛠️ Error Handling

### Error Boundaries

**Components:**
- `src/components/error/ErrorBoundary.tsx` - React error boundary
- `src/app/error.tsx` - Next.js error page

**Error Handling:**
- Graceful error fallbacks
- User-friendly error messages
- Development error details

---

## 📁 Project Structure

```
anu-portfolio/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── me/                # About Me page
│   │   ├── work/[slug]/       # Case study pages
│   │   ├── resume/            # Resume page
│   │   ├── accessibility/     # Accessibility statement
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── case-study/        # Case study components
│   │   ├── home/              # Landing page components
│   │   ├── layout/            # Layout components
│   │   ├── navigation/        # Navigation components
│   │   ├── ui/                # UI components
│   │   └── ...
│   ├── data/                  # Data files
│   │   ├── reportcaster.ts   # RC case study data
│   │   ├── ml-functions.ts    # ML case study data
│   │   ├── iq-plugin.ts       # IQ case study data
│   │   └── home.ts            # Homepage data
│   ├── styles/                # Style files
│   │   └── tokens.css         # Design tokens
│   ├── types/                  # TypeScript types
│   ├── lib/                   # Utility functions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
│   ├── images/                # Image files
│   ├── videos/                # Video files
│   ├── sw.js                  # Service worker
│   └── site.webmanifest       # PWA manifest
├── scripts/                   # Build scripts
│   ├── generate-sitemap.js    # Sitemap generation
│   ├── generate-resume-pdf.js # PDF generation
│   └── deploy-s3.sh          # Deployment script
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

---

## 📞 Questions to Resolve

1. **Single gear animation:** Where is the existing implementation? (Used on initial page load)
2. **G+N alignment:** Do G+N sections align with "Impact & Results" or need 4th section?
3. **Theme toggle placement:** Where in header should theme toggle go?
4. **Simplified view content:** What exactly should be included for recruiter-friendly view?

---

## 🚀 Quick Start for New Agent

1. **Read this document completely**
2. **Set up environment:**
   - Clone repository
   - Run `npm install`
   - Create `.env.local` with required variables
3. **Start development:**
   - Run `npm run dev:restart` (always use this after code changes)
   - Open `http://localhost:3000`
4. **Review key files:**
   - `UX_PRINCIPLES_ACTION_PLAN.md` - Detailed requirements
   - `IMPLEMENTATION_PLAN.md` - Implementation strategy
   - `src/components/case-study/CaseStudyLayout.tsx` - Case study structure
5. **Start with Phase 1:** D.E.S.I.G.N Framework Restructuring
6. **Test thoroughly:** Use testing checklist before considering features complete

---

**Ready to continue? Start with Phase 1: D.E.S.I.G.N Framework Restructuring.**

