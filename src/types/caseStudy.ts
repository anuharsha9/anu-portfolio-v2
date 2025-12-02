export interface HighlightMetric {
  label: string
  value: string
}

export interface QuickOverview {
  title: string
  subtitle: string
  whatTheSystemWas: string
  myRole: string
  keyActions: string[]
  impactMetrics: HighlightMetric[]
  publicDemoUrl?: string // Optional public demo link (e.g., for ReportCaster)
  publicDemoLabel?: string // Label for the demo button/link
  dataSheetUrl?: string // Optional data sheet link from ibi.com
  dataSheetLabel?: string // Label for the data sheet link
  demoVideoUrl?: string // Optional YouTube demo video URL (watch format)
  demoVideoLabel?: string // Label for the demo video button
  demoVideoUrl2?: string // Optional second YouTube demo video URL (watch format)
  demoVideoLabel2?: string // Label for the second demo video button
  oldUIDemoUrl?: string // Optional old UI demo URL (for comparison)
}

export interface CaseStudySubsection {
  title: string
  description?: string
  quote?: {
    text: string
    attribution?: string
  }
  images?: {
    src: string
    alt: string
    caption?: string
    fullWidth?: boolean
  }[]
  workflowPrototype?: {
    title: string
    description?: string
    workflowType: 'train' | 'run'
    steps: {
      number: number
      src: string
      alt: string
      caption: string
      description?: string
    }[]
  }
}

export interface CaseStudySection {
  id: string
  index: string // e.g. "01"
  title: string
  body: string
  bullets?: string[]
  revealsTitle?: string
  revealsPoints?: string[]
  images?: {
    src: string
    alt: string
    caption?: string
    fullWidth?: boolean
  }[]
  beforeAfter?: {
    before: {
      src: string
      alt: string
      caption?: string
    }
    after: {
      src: string
      alt: string
      caption?: string
    }
    beforeLabel?: string
    afterLabel?: string
  }
  subsections?: CaseStudySubsection[]
  workflowPrototype?: {
    title: string
    description?: string
    workflowType: 'train' | 'run'
    steps: {
      number: number
      src: string
      alt: string
      caption: string
      description?: string
    }[]
  }[]
  // For version-iteration section: nested V1, V2, V3 data
  v1Data?: {
    id: string
    title: string
    body: string
    images?: {
      src: string
      alt: string
      caption?: string
      fullWidth?: boolean
    }[]
    subsections?: CaseStudySubsection[]
  }
  v2Data?: {
    id: string
    title: string
    body: string
    images?: {
      src: string
      alt: string
      caption?: string
      fullWidth?: boolean
    }[]
    subsections?: CaseStudySubsection[]
  }
  v3Data?: {
    id: string
    title: string
    body: string
    images?: {
      src: string
      alt: string
      caption?: string
      fullWidth?: boolean
    }[]
    subsections?: CaseStudySubsection[]
  }
}

export interface VersionNode {
  id: string
  label: string // "V1", "V2"
  title: string
  description: string
  targetSectionId: string
}

export interface UXPrinciple {
  title: string
  description: string
}

export interface CaseStudyData {
  slug: string
  heroTitle: string
  heroSubheading?: string
  heroSubtitle: string
  coverImage?: {
    src: string
    alt: string
  }
  role: string
  company: string
  timeframe: string
  scope: string[]
  quickOverview: QuickOverview
  versionTimeline: VersionNode[]
  uxPrinciples?: {
    title: string
    intro?: string
    principles: UXPrinciple[]
  }
  sections: CaseStudySection[]
  publicSections?: CaseStudySection[] // Sections that should be public (not gated)
  prototypeMedia?: {
    title: string
    description?: string
    figmaEmbedUrl?: string
    videoEmbedUrl?: string // YouTube embed URL
    videoUrl?: string // Self-hosted video URL (MP4)
    videoPoster?: string // Poster/thumbnail for self-hosted videos
  }
  impactSummary: {
    heading: string
    bullets: string[]
  }
  reflectionSummary?: {
    heading: string
    paragraphs: string[]
  }
  finalSummary?: {
    title: string
    body: string
    keyPoints: string[]
  }
  passwordGate?: {
    password: string
    description?: string
    learnItems?: string[]
  }
  publishedDate?: string // ISO date string for structured data
  updatedDate?: string // ISO date string for structured data
}

