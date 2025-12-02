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
      'Owning the end-to-end UX modernization of a 40-year-old scheduling tool no one else wanted to touch — turning scattered workflows into a clear, unified scheduling experience used by millions of enterprise reports.',
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
    image: '/images/painting.jpg',
  },
  {
    title: 'Baking',
    description:
      'Precision disguised as comfort. Timings, ratios, and structure—it\'s basically systems thinking with sugar, and it keeps my "measure twice" instincts alive.',
    image: '/images/baking.jpg',
  },
  {
    title: 'Cooking',
    description:
      'Fast, intuitive experimentation. I rarely follow recipes to the letter—same with design. I like to improvise, taste, adjust, and move quickly toward something that feels right.',
    image: '/images/cooking.jpg',
  },
  {
    title: 'Poetry',
    description:
      'Language as design material. I\'ve written poems for years. It\'s where I practice saying a lot with a little—which is also how I like my interfaces and product narratives to feel.',
    image: '/images/poetry.jpg',
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
}

export const recommendations: Recommendation[] = [
  {
    quote: 'Anuja made a significant impact modernizing UX across our legacy enterprise products. She brings a rare combination of strategic thinking, design intuition, and the ability to work seamlessly across product, engineering, and business teams. Anuja is bold in her ideas and consistently proactive in turning complex problems into practical, user-centered solutions.',
    name: 'Vijay Raman',
    role: 'VP of Product Management',
    company: 'Cloud Software Group',
  },
  {
    quote: 'The clarity of her designs, in spite of the underlying data science and machine learning complexity, is impressive and has greatly contributed to the success of our products. Her design solutions are rooted in a deep understanding of the purpose of the product, always leading to clean designs and products that are a genuine joy to use.',
    name: 'Marcus Horbach',
    role: 'Principal Data Scientist',
    company: 'Cloud Software Group',
  },
  {
    quote: 'During a User Acceptance Test session, Anuja observed me navigating the screen, asking targeted questions about my workflow choices and tracking my visual focus. I was highly impressed with Anuja\'s approach. Her design was clean, intuitive, and clearly addressed the needs of users across different skill levels.',
    name: 'Anita George',
    role: 'Principal Account Technology Strategist',
    company: 'Cloud Software Group',
  },
  {
    quote: 'Anuja demonstrated exceptional ability to understand intricate workflows and translate them into elegant, user-centric designs that elevated the product\'s usability and visual appeal. Her strong command of design principles, attention to detail, and clear communication made collaboration seamless and productive.',
    name: 'Aniket Awchare',
    role: 'Senior Product Manager',
    company: 'Cloud Software Group',
  },
  {
    quote: 'Anuja brings energy and determination to tackling complex design challenges. She approaches her work with a fearless attitude and is never afraid to explore new ideas or directions. Her enthusiasm for design and willingness to engage with stakeholders made her a valuable part of the team.',
    name: 'Dave Pfeiffer',
    role: 'Director of Design',
    company: 'Cloud Software Group',
  },
  {
    quote: 'She impressed everyone with how quickly she grasped all aspects of a highly intricate system and translated that understanding into a clear, modern, and user-centered design. Beyond her technical and design talent, she\'s a collaborative, thoughtful teammate who makes every project better.',
    name: 'Yingchun Chen',
    role: 'Principal System Software Engineer',
    company: 'Cloud Software Group',
  },
  {
    quote: 'Anuja led UX design initiatives with remarkable creativity, empathy, and precision. She consistently demonstrated a deep understanding of user-centered design and the ability to translate complex product requirements into intuitive and visually engaging experiences. What truly stands out is her collaborative spirit and problem-solving mindset.',
    name: 'Karishma Khadge',
    role: 'Senior Product Manager',
    company: 'Cloud Software Group',
  },
  {
    quote: 'I worked with her on a couple of projects where her design was impactful. She is a collaborative teammate, strong advocate for user research and great designer. Any team would be lucky to have her.',
    name: 'Shay Bagwell',
    role: 'Lead Customer Marketing Manager',
    company: 'Cloud Software Group',
  },
  {
    quote: 'Anu joined us as an intern when she was just starting out, and even then it was clear she had something rare. She grew with us—from learning the basics to independently designing full mobile apps, branding systems, illustrations, and UI/UX for client projects. Her output was massive, her quality was reliable, and she quickly became the designer we trusted for everything. By the time she moved on, she was operating at a level far beyond her experience, ready for enterprise-grade work. Watching her grow into the designer she is today has been incredible, but the foundation was already there from the beginning: talent, drive, and an instinct for great design.',
    name: 'Vikram Patel',
    role: 'Co-Founder',
    company: '9P Studioz',
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
