import { CaseStudyData } from '@/types/caseStudy'

export const reportcasterCaseStudy: CaseStudyData = {
  slug: 'reportcaster',
  heroTitle: 'REPORTCASTER: REBUILDING A LEGACY PRODUCT AND REBUILDING MYSELF',
  heroSubtitle:
    'A true story of taking on a 40-year-old scheduling system no one else wanted to touch — and turning it into clarity, structure, and a scalable future.',
  role: 'Senior Product Designer (Principal-level scope)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2022 – 2024',
  scope: [
    'Enterprise UX',
    'Legacy modernization',
    'Architecture & IA',
    'Workflow design',
    'Cross-functional leadership',
  ],
  // ----------------------------
  // QUICK OVERVIEW
  // ----------------------------
  quickOverview: {
    title: 'ReportCaster — Quick Overview (for recruiters)',
    subtitle: 'Modernizing a 40-year-old enterprise scheduling system',
    whatTheSystemWas:
      'A deeply embedded, decades-old scheduling engine powering millions of automated jobs across enterprise customers — undocumented, fragmented, and structurally outdated.',
    myRole:
      'I took full ownership of the redesign one week into joining. I reverse-engineered the system, rebuilt its mental model, and defined a new architecture aligned with platform patterns and engineering constraints.',
    keyActions: [
      'Reconstructed the end-to-end system using sandbox exploration, support insights, customer conversations, and legacy engineering knowledge.',
      'Unified five fragmented subsystems into one coherent mental model.',
      'Proposed three major architectural directions and synthesized constraints to define the final path.',
      'Introduced a scalable, modal-based creation model initiated from the platform's + menu.',
      'Proposed Explorer-as-filtered-view pattern that could scale across the entire platform.',
      'Redesigned recurrence with natural-language summaries.',
      'Clarified undocumented rules such as bursting, retention, and crash recovery.',
      'Onboarded engineering, PM, QA, docs, and support teams into the redesigned architecture.',
    ],
    impactMetrics: [
      { label: 'Schedule creation clicks', value: '≈75% fewer clicks' },
      { label: 'Multi-tab sprawl', value: 'Eliminated entirely' },
      { label: 'Explorer access', value: '≈60–70% fewer clicks' },
      { label: 'Creation speed', value: '≈40–50% faster' },
      { label: 'Support load', value: '≈25–30% reduction (directional)' },
      { label: 'Subsystems unified', value: '5 → 1 model' },
    ],
  },
  // ----------------------------
  // PROTOTYPE (placeholder URLs)
  // ----------------------------
  prototypeMedia: {
    title: 'Experience the final schedule flow',
    description:
      'Try the interactive prototype and watch a walkthrough to see how the modal-based schedule flow simplifies complex scheduling tasks.',
    figmaEmbedUrl:
      'https://www.figma.com/embed?embed_host=share&url=REPLACE_WITH_REAL_FIGMA_URL',
    videoEmbedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID',
  },
  // ----------------------------
  // VERSION TIMELINE
  // ----------------------------
  versionTimeline: [
    {
      id: 'version-1',
      label: 'V1',
      title: 'Independent product',
      description: 'Standalone RC environment similar to other complex tools.',
      targetSectionId: 'version-1',
    },
    {
      id: 'version-2',
      label: 'V2',
      title: 'Hub plugin',
      description: 'RC as a plugin inside the hub environment.',
      targetSectionId: 'version-2',
    },
    {
      id: 'version-3',
      label: 'V3',
      title: 'Modal-based Architecture',
      description: 'Final shipped direction using + menu modal workflow.',
      targetSectionId: 'version-3',
    },
  ],
  // ----------------------------
  // FULL SECTIONS (01–08)
  // WITH IMAGE PLACEHOLDERS
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: '01',
      title: 'How I landed the project (and why it mattered)',
      body: `One week into joining the company, I volunteered to redesign a 40-year-old scheduling tool no one wanted to touch. There was one sandbox link, no documentation, tribal knowledge scattered across support, and only one engineer who truly understood the system.`,
      images: [
        {
          src: '/images/rc-legacy-01.png',
          alt: 'Legacy RC UI',
          caption: 'Original RC interface — fragmented, inconsistent, undocumented.',
        },
      ],
      revealsTitle: 'Owning problems no one else touches',
      revealsPoints: [
        'I don't wait for clarity — I create it.',
        'I step into ambiguity confidently.',
        'I turn complexity into structured opportunity.',
      ],
    },
    {
      id: 'section-02',
      index: '02',
      title: 'Learning the system no one documented',
      body: `There was no onboarding, no spec, no design file — nothing. I treated the product like a black-box investigation, mapping every workflow, dialog, admin rule, explorer interaction, job health scenario, failure state, and more.`,
      images: [
        {
          src: '/images/rc-mindmap.png',
          alt: 'RC mental model map',
          caption: 'The mind map I created to document the entire RC system.',
        },
      ],
      revealsTitle: 'Reconstructing undocumented systems',
      revealsPoints: [
        'I learn enterprise systems independently at depth.',
        'I build accurate mental models from real user behavior.',
        'I uncover hidden subsystems others don't see.',
      ],
    },
    {
      id: 'version-1',
      index: '03',
      title: 'Version 1: treating RC as an independent product',
      body: `The platform used independent environments for all major complex tools. RC fit that model. I designed a unified, dedicated RC product with its own nav, explorer, and admin. Leadership rejected it due to hub centralization goals.`,
      images: [
        {
          src: '/images/rc-v1.png',
          alt: 'Version 1 independent product concept',
          caption: 'V1 concept — RC as a standalone tool like other platform components.',
        },
      ],
      revealsTitle: 'Pushing and pivoting rationally',
      revealsPoints: [
        'I follow platform-level patterns.',
        'I push for the right architecture.',
        'I pivot quickly when constraints change.',
      ],
    },
    {
      id: 'version-2',
      index: '04',
      title: 'Version 2: plugin integration inside the hub',
      body: `Next, I aligned RC with the platform shift toward hub plugins. I designed a fully integrated hub plugin with consolidated subsystems. Rejected due to engineering constraints.`,
      images: [
        {
          src: '/images/rc-v2-plugin.png',
          alt: 'Version 2 hub plugin concept',
          caption: 'V2 concept — RC as a first-class plugin inside the hub.',
        },
      ],
      revealsTitle: 'Designing with organizational goals',
      revealsPoints: [
        'I don't force solutions; I adapt.',
        'I align with engineering and platform realities.',
        'I scale architecture without bloating scope.',
      ],
    },
    {
      id: 'version-3',
      index: '05',
      title: 'Version 3: the breakthrough — designing with the platform',
      body: `The + menu was the true platform architecture for all creation workflows. RC scheduling, distribution lists, and access lists became modal-based creations. Explorer became a filtered view. Admin was elevated to management navigation.`,
      images: [
        {
          src: '/images/rc-v3-modal.png',
          alt: 'Version 3 modal-based flow',
          caption:
            'V3 — the scalable modal architecture matching platform conventions.',
          fullWidth: true,
        },
      ],
      revealsTitle: 'Staff-level platform thinking',
      revealsPoints: [
        'I read platform patterns accurately.',
        'I design with constraints, not against them.',
        'I unify engineering, UX, product, and user needs.',
      ],
    },
    {
      id: 'section-06',
      index: '06',
      title: 'Aligning and leading the team',
      body: `Most of the engineering org had never seen RC end-to-end. I onboarded engineers, architect, PM, QA, SMEs, docs, and support through demos, prototypes, and aligned decision-making.`,
      images: [
        {
          src: '/images/rc-team.png',
          alt: 'Team onboarding flow',
          caption: 'Dozens of demos were needed to unify understanding and alignment.',
        },
      ],
      revealsTitle: 'Leading without title',
      revealsPoints: [
        'I onboard complex teams.',
        'I communicate complexity with clarity.',
        'I lead through structure and influence.',
      ],
    },
    {
      id: 'section-07',
      index: '07',
      title: 'Shipping impact',
      body: `RC finally worked the way users needed — fewer clicks, predictable workflows, unified lists, better recurrence, and no more multi-tab chaos.`,
      images: [
        {
          src: '/images/rc-impact.png',
          alt: 'Impact metrics visual',
          caption: 'Massive reductions in clicks, onboarding time, and support load.',
        },
      ],
      revealsTitle: 'Design users feel immediately',
      revealsPoints: [
        'I design for long-term scalability.',
        'I reduce cognitive load and support friction.',
        'I improve architecture, not just UI.',
      ],
    },
    {
      id: 'section-08',
      index: '08',
      title: 'What this project made me',
      body: `RC sharpened my ability to think in platform patterns, collaborate across deeply technical teams, and operate at Staff/Principal level.`,
      images: [
        {
          src: '/images/rc-reflection.png',
          alt: 'Reflection image',
          caption: 'RC made me sharper, more strategic, more confident.',
          fullWidth: true,
        },
      ],
      revealsTitle: 'Redesigning myself through the work',
      revealsPoints: [
        'I operate at the intersection of product, engineering, and UX.',
        'I grow through ambiguity.',
        'I bring clarity to legacy complexity.',
      ],
    },
  ],
  // ----------------------------
  // IMPACT + REFLECTION SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Shipping impact at a glance',
    bullets: [
      '4–6 clicks reduced to 1 for schedule creation.',
      'Multi-tab workflows eliminated.',
      'Explorer and Admin surfaced.',
      'Unified mental model for all RC tasks.',
      'Recurrence redesigned with natural-language summaries.',
      'Reduced support tickets and onboarding friction.',
      'RC prepared for future extensibility.',
    ],
  },
  reflectionSummary: {
    heading: 'What this project made me',
    paragraphs: [
      'This redesign transformed how I think at platform scale.',
      'I learned to negotiate constraints, unify teams, and make Staff-level decisions.',
      'RC made me a more structured, strategic, and confident problem-solver.',
    ],
  },
}
