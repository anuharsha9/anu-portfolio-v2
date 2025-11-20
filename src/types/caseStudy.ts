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
}

export interface VersionNode {
  id: string
  label: string // "V1", "V2"
  title: string
  description: string
  targetSectionId: string
}

export interface CaseStudyData {
  slug: string
  heroTitle: string
  heroSubtitle: string
  role: string
  company: string
  timeframe: string
  scope: string[]
  quickOverview: QuickOverview
  versionTimeline: VersionNode[]
  sections: CaseStudySection[]
  prototypeMedia?: {
    title: string
    description?: string
    figmaEmbedUrl?: string
    videoEmbedUrl?: string
  }
  impactSummary: {
    heading: string
    bullets: string[]
  }
  reflectionSummary: {
    heading: string
    paragraphs: string[]
  }
}

