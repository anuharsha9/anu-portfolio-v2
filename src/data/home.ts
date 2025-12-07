export interface FeaturedCaseStudy {
  slug: string
  title: string
  summary: string
  impact: string
  tags: string[]
  image?: string
  ctaText?: string
}

export interface WorkArchiveItem {
  title: string
  description: string
  href: string
  image?: string
}

export interface ArticleLink {
  title: string
  topic: string
  href: string
}

export interface PersonalProject {
  title: string
  description: string
  image?: string
  href?: string
}

export interface LeadershipHighlight {
  title: string
  description: string
}

export type BrainZone = {
  id: string
  label: string
  title: string
  description: string
  href?: string // optional: where the node links to
  targetId?: string // optional: in-page section id to scroll to
}

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    slug: 'reportcaster',
    title: 'ReportCaster: redesigning a legacy enterprise scheduler',
    summary:
      'Owning the end-to-end UX modernization of a 50-year-old scheduling tool no one else wanted to touch — turning scattered workflows into a clear, unified scheduling experience used by millions of enterprise reports.',
    impact: '75% fewer clicks, unified architecture, reduced support load.',
    tags: ['Enterprise UX', 'Legacy modernization', 'Architecture'],
    image: '/images/case-study/ReportCaster/rc-cover.png',
    ctaText: 'View ReportCaster case study',
  },
  {
    slug: 'ml-functions',
    title: 'ML Functions: making enterprise ML training usable',
    summary:
      'Revamping an engineer-driven model-training workflow into a guided, step-by-step experience that helps non-experts configure, run, and interpret machine-learning models with confidence.',
    impact:
      'Step-based flows, clearer mental models, aligned with DSML strategy.',
    tags: ['AI/ML UX', 'Workflow design'],
    image: '/images/case-study/ml-functions/ml-functions-cover.png',
    ctaText: 'View ML Functions case study',
  },
  {
    slug: 'iq-plugin',
    title: 'IQ Plugin: unifying insights inside the WebFOCUS hub',
    summary:
      'Designing a new plugin that brings scattered DSML services into one responsive experience — so business users can discover, run, and interpret insights without leaving their analytics hub.',
    impact: 'Reduced context switching and made insights discoverable.',
    tags: ['Plugin UX', 'Information architecture'],
    image: '/images/case-study/iq-plugin/iq-cover.png',
    ctaText: 'View IQ Plugin case study',
  },
]

export const workArchiveItems: WorkArchiveItem[] = [
  {
    title: 'Graphic Design Portfolio',
    description: 'A curated collection of graphic design work spanning brand identity, print design, and visual systems.',
    href: '/assets/graphic design portfolio.pdf',
    image: '/images/graphic-cover.png',
  },
  {
    title: 'Kedazzle Case Study',
    description: 'UX case study exploring e-commerce platform redesign with focus on product discovery and user flow optimization.',
    href: '/assets/Case Study Kedazzle.pdf',
    image: '/images/Kedazzle-cover.png',
  },
  {
    title: 'CRBS Case Study',
    description: 'Conference Room Booking System redesign focusing on enterprise scheduling and calendar integration.',
    href: '/assets/CRBS case study.pdf',
    image: '/images/crbs-cover.png',
  },
  {
    title: 'Infinite Case Study',
    description: 'Analytics dashboard redesign with emphasis on data visualization and real-time business insights.',
    href: '/assets/Infinite case study.pdf',
    image: '/images/Infinite-Cover.png',
  },
  {
    title: 'Pelli Case Study',
    description: 'Mobile-first productivity app design exploring task management and organizational workflows.',
    href: '/assets/Pelli case study.pdf',
    image: '/images/Pelli-cover.png',
  },
  {
    title: 'Travel Portal Redesign',
    description: 'Corporate travel booking and expense management system streamlining complex travel workflows.',
    href: '/assets/Travel Portal.pdf',
    image: '/images/travel-cover.png',
  },
  {
    title: 'Suitcase Case Study',
    description: 'Travel planning and packing app focused on simplifying trip preparation and itinerary management.',
    href: '/assets/suitcase case study.pdf',
    image: '/images/suitcase-cover.png',
  },
  {
    title: 'Wordu Case Study',
    description: 'Word prediction and writing enhancement tool designed to improve writing productivity and quality.',
    href: '/assets/Wordu case study.pdf',
    image: '/images/wordu-cover.png',
  },
]

export const articleLinks: ArticleLink[] = [
  {
    title: 'The Secret Behind Better BI: Who\'s Your Business User?',
    topic: 'UX Design',
    href: 'https://community.ibi.com/articles/the-secret-behind-better-bi-who-s-your-business-user-r44/',
  },
  {
    title: 'Enhancing User Experience in WebFOCUS DSML',
    topic: 'AI/ML UX',
    href: 'https://community.ibi.com/forums/topic/16161-enhancing-user-experience-in-webfocus-dsml/',
  },
  {
    title: 'Designing for Enterprise Complexity',
    topic: 'UX Design',
    href: 'https://medium.com/@anu.anuja/designing-for-enterprise-complexity',
  },
  {
    title: 'Modernizing Legacy Systems',
    topic: 'Product Design',
    href: 'https://medium.com/@anu.anuja/modernizing-legacy-systems',
  },
  {
    title: 'AI Workflows That Actually Work',
    topic: 'AI/ML UX',
    href: 'https://medium.com/@anu.anuja/ai-workflows-that-actually-work',
  },
]

export const personalProjects: PersonalProject[] = [
  {
    title: 'Painting',
    description:
      'Where composition and color come to play. This is where I sharpen my eye for balance, contrast, and visual rhythm—the same principles I bring into product UI.',
    image: '/assets/painting.jpg',
  },
  {
    title: 'Baking',
    description:
      'Precision disguised as comfort. Timings, ratios, and structure—it\'s basically systems thinking with sugar, and it keeps my "measure twice" instincts alive.',
    image: '/assets/baking.jpg',
  },
  {
    title: 'Cooking',
    description:
      'Fast, intuitive experimentation. I rarely follow recipes to the letter—same with design. I like to improvise, taste, adjust, and move quickly toward something that feels right.',
    image: '/assets/cooking.jpg',
  },
  {
    title: 'Poetry',
    description:
      'Language as design material. I\'ve written poems for years. It\'s where I practice saying a lot with a little—which is also how I like my interfaces and product narratives to feel.',
    image: '/assets/poetry.jpg',
  },
]

export const leadershipHighlights: LeadershipHighlight[] = [
  {
    title: 'Mentoring on ADPList',
    description:
      'Helping designers navigate career transitions and grow their skills through one-on-one mentorship sessions.',
  },
  {
    title: 'Leading cross-functional teams on WebFOCUS',
    description:
      'Collaborating with engineering, product, and QA to deliver complex enterprise solutions that balance user needs with technical constraints.',
  },
  {
    title: 'Redesigning ReportCaster and ML Functions in parallel',
    description:
      'Managing multiple high-impact projects simultaneously while maintaining design quality and team alignment.',
  },
  {
    title: 'Preparing for talks like Figma Config',
    description:
      'Sharing insights on enterprise design patterns and design system architecture with the broader design community.',
  },
]

export interface Recommendation {
  quote: string
  name: string
  role: string
  company: string
  relationship: string
  source?: 'corporate' | 'adplist' // Distinguish between work colleagues and mentorship
}

export interface ADPListReview {
  quote: string
  name: string
  role?: string
  company?: string
  rating?: number
  date?: string
}

export const recommendations: Recommendation[] = [
  {
    quote: 'From the start, she impressed everyone with how quickly she grasped all aspects of a highly intricate system and translated that understanding into a clear, modern, and user-centered design.',
    name: 'Yingchun Chen',
    role: 'Principal System Software Engineer',
    company: 'Cloud Software Group',
    relationship: 'I worked closely with Yingchun on ReportCaster, where he was my engineering partner helping me understand the complex legacy system architecture.',
  },
  {
    quote: 'She brings a rare combination of strategic thinking, design intuition, and the ability to work seamlessly across product, engineering, and business teams.',
    name: 'Vijay Raman',
    role: 'VP of Product Management',
    company: 'Cloud Software Group',
    relationship: 'Vijay was the main leadership figure at my workplace, overseeing product strategy across the organization.',
  },
  {
    quote: 'She approaches her work with a fearless attitude and is never afraid to explore new ideas or directions.',
    name: 'Dave Pfeiffer',
    role: 'Director of Design',
    company: 'Cloud Software Group',
    relationship: 'Dave was my manager for over 3 years and I collaborated with him closely every single day I was at the company.',
  },
  {
    quote: 'Anticipating the next move of the user, that is next level UI!',
    name: 'Anita George',
    role: 'Principal Account Technology Strategist',
    company: 'Cloud Software Group',
    relationship: 'Anita was my favorite reliable SME and customer representative for ML Functions and IQ Plugin, providing invaluable user insights.',
  },
  {
    quote: 'Her design thinking workshops and prototype walkthroughs often became the foundation for key product decisions, driving clarity and alignment across cross-functional teams.',
    name: 'Karishma Khadge',
    role: 'Senior Product Manager',
    company: 'Cloud Software Group',
    relationship: 'Karishma was the PM I collaborated with on ML Functions and IQ Plugin. We had extremely close collaboration—a true partnership.',
  },
  {
    quote: 'Anuja demonstrated exceptional ability to understand intricate workflows and translate them into elegant, user-centric designs that elevated the product\'s usability and visual appeal.',
    name: 'Aniket Awchare',
    role: 'Senior Product Manager',
    company: 'Cloud Software Group',
    relationship: 'Aniket partnered with me on ML Functions and IQ Plugin after Karishma left the org. We had the same close partnership dynamic.',
  },
  {
    quote: 'The clarity of her designs, in spite of the underlying data science and machine learning complexity, is impressive and has greatly contributed to the success of our products.',
    name: 'Marcus Horbach',
    role: 'Principal Data Scientist',
    company: 'Cloud Software Group',
    relationship: 'I won Marcus\'s trust with ML Functions when I was trying to understand and learn ML. He was the data scientist I collaborated with closely on ML initiatives.',
  },
  {
    quote: 'She quickly became the designer we trusted for everything. By the time she moved on, she was operating at a level far beyond her experience, ready for enterprise-grade work.',
    name: 'Vikram Patel',
    role: 'Co-Founder',
    company: '9P Studioz',
    relationship: 'Vikram was my first ever boss and my first design job, where I learned the fundamentals of design and client work.',
  },
  {
    quote: 'She is a collaborative teammate, strong advocate for user research and great designer.',
    name: 'Shay Bagwell',
    role: 'Lead Customer Marketing Manager',
    company: 'Cloud Software Group',
    relationship: 'Shay worked with me on several projects where my design made an impact.',
  },
  // ADPList Mentorship Reviews
  {
    quote: 'Anuja is an excellent mentor. She proactively provides actionable tips, checks on progress, and leverages her expertise to guide career growth.',
    name: 'Gina Kim',
    role: 'Product Designer',
    company: 'UC Riverside',
    relationship: 'ADPList Mentorship',
    source: 'adplist',
  },
  {
    quote: 'Really good advice for breaking out of a rut and how to enter the field. She gave me clear direction when I felt lost.',
    name: 'Nathan Irwin',
    role: 'Design Student',
    company: 'BCIT',
    relationship: 'ADPList Mentorship',
    source: 'adplist',
  },
  {
    quote: 'An experienced designer with a unique and insightful approach. This was an enriching experience covering design projects, AI, emerging industries, and UX.',
    name: 'Eswar Varma',
    role: 'Associate Lead UX Designer',
    company: 'Born Group',
    relationship: 'ADPList Mentorship',
    source: 'adplist',
  },
]

export const brainZones: BrainZone[] = [
  {
    id: 'systems-enterprise',
    label: 'Systems',
    title: 'Systems & Enterprise UX',
    description: 'How I redesign massive, legacy, multi-layered systems like WebFOCUS and ReportCaster.',
    targetId: 'work',
  },
  {
    id: 'ai-ml',
    label: 'AI & ML',
    title: 'AI, ML & Product Strategy',
    description: 'Making machine learning usable for non-ML users and aligning interfaces with AI capabilities.',
    href: '/work/ml-functions',
  },
  {
    id: 'leadership',
    label: 'Leadership',
    title: 'Leadership & mentorship',
    description: 'Leading cross-functional teams, mentoring designers, and shaping how design fits into product.',
    targetId: 'leadership',
  },
  {
    id: 'storytelling',
    label: 'Storytelling',
    title: 'Storytelling & writing',
    description: 'Long-form case studies, articles, and narrative-driven documentation.',
    targetId: 'articles',
  },
  {
    id: 'creative-roots',
    label: 'Creative',
    title: 'Creative roots',
    description: 'Painting, cooking, digital art, and the creative practices that fuel my design work.',
    targetId: 'personal',
  },
  {
    id: 'future-vision',
    label: 'Future',
    title: 'Future vision',
    description: 'Where I&apos;m heading: Principal/Director, AI UX product strategy, and long-term impact.',
    // for now no link, purely conceptual
  },
]

export const adpListReviews: ADPListReview[] = [
  {
    quote: 'Anuja is an excellent mentor. She is proactive, provides actionable tips, checks on progress, and leverages her expertise.',
    name: 'Gina Kim',
    role: 'Product Designer',
    company: 'UC Riverside',
    date: 'March 05, 2025',
    rating: 5,
  },
  {
    quote: 'Really good advice for breaking out of a rut and how to enter the field.',
    name: 'Nathan Irwin',
    role: 'Design Student',
    company: 'British Columbia Institute of Technology',
    date: 'February 05, 2025',
    rating: 5,
  },
  {
    quote: 'Anuja is an experienced designer with a unique and insightful approach. This was an enriching experience covering design projects, AI, emerging industries, and UX in the USA.',
    name: 'Eswar Varma',
    role: 'Associate Lead UX Designer',
    company: 'Born Group (part of Tech Mahindra)',
    date: 'February 05, 2025',
    rating: 5,
  },
]
