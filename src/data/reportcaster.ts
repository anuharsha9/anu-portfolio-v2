import { CaseStudyData } from '@/types/caseStudy'

export const reportcasterCaseStudy: CaseStudyData = {
  slug: 'reportcaster',
  heroTitle: 'REPORTCASTER',
  heroSubheading: 'A 50-year-old satisfyer, untouched by UX—until now',
  heroSubtitle:
    'Requested assignment to a deferred project. Documented the entire 50-year-old system. Architecture became "the pattern for everything."',
  coverImage: {
    src: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
    alt: 'ReportCaster Explorer - Unified Schedule Management',
  },
  role: 'UX Lead / UX Owner (End-to-End Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: 'Sept 2022 – Nov 2023 | Shipped April 2024',
  status: {
    label: 'Live in Production',
    variant: 'live' as const,
  },
  scope: [
    'Systems Thinking',
    'UX Architecture',
    'Legacy Modernization',
    'Cross-functional Leadership',
    'Strategic Influence',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'ReportCaster — Quick Impact Overview',
    subtitle: 'Enterprise scheduling system modernization',
    leadershipSummary: 'Requested assignment to a deferred project. Documented 50-year-old undocumented system end-to-end. Architecture became "the pattern for everything." Handed off to 2 designers.',
    whatTheSystemWas:
      'A deeply embedded scheduling engine powering 20M+ weekly jobs — undocumented, fragmented, and structurally outdated.',
    myRole:
      'End-to-end ownership: research → architecture → design → handoff.',
    scopeOfPractice: [],
    impactMetrics: [
      { label: 'Subsystems unified', value: '5 → 1' },
      { label: 'Clicks to create schedule', value: '5+ → 2' },
      { label: 'Weekly schedules impacted', value: '20M+' },
      { label: 'Multi-tab sprawl', value: 'Eliminated' },
    ],
    star: {
      situation: '50-year-old scheduler. 5 fragmented subsystems. Zero documentation.',
      task: 'Modernize mission-critical workflows.',
      action: 'Requested assignment. Embedded in support. Iterated through 3 directions.',
      result: '5 → 1. 5+ clicks → 2. Shipped April 2024.',
    },
    technologies: [],
    keyAchievements: [
      '5 subsystems → 1 unified mental model',
      '5+ clicks → 2 clicks for schedule creation',
      '20M+ weekly schedules impacted',
      'Documented 50-year-old system end-to-end',
      '3 architectural directions before finding the right approach',
      'Shipped April 2024 — featured on public YouTube demos',
    ],
    // Public demo URL removed - legacy link no longer available
    dataSheetUrl: 'https://www.ibi.com/content/dam/ibi/documents/data-sheet/webfocus-report-caster-data-sheet.pdf',
    dataSheetLabel: 'View ReportCaster Data Sheet',
    demoVideoUrl: 'https://www.youtube.com/watch?v=NvNFN6sz41M',
    demoVideoLabel: 'ReportCaster Public Demo',
    validationLinks: [
      {
        url: 'https://www.ibi.com/blog/introducing-webfocus-9-3',
        label: 'WebFOCUS 9.3 Release Blog',
      },
      {
        url: 'https://community.ibi.com/articles/enhancing-the-ux-of-webfocus-reportcaster-a-path-to-improved-efficiency-and-user-satisfaction-r38/',
        label: 'UX Enhancement Article',
      },
    ],
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
  // UX PRINCIPLES (Public)
  // ----------------------------
  uxPrinciples: {
    title: 'Design Principles Applied',
    principles: [
      { title: 'Cognitive Load Reduction', description: '' },
      { title: 'Unified Mental Model', description: '' },
      { title: 'User Control & Freedom', description: '' },
      { title: 'Match System to Real World', description: '' },
      { title: 'Progressive Disclosure', description: '' },
      { title: 'Error Prevention', description: '' },
    ],
  },
  // ----------------------------
  // NARRATIVE CASE STUDY SECTIONS (01–06) - Mapped to D.E.S.I.G.N. Framework
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: 'D',
      title: 'Discover Deeply: How I Landed the Project',
      summary: 'Asked to be assigned to a deferred project waiting in the pipeline. Built structure from scratch with only sandbox access and tribal knowledge.',
      // Note: Body and images removed - replaced by SystemArchaeology component for visual impact
      body: '',
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Understanding Users and Constraints',
      summary: 'Built relationships with support lead and team. Gained access to private internal tickets and historical insights. Anchored redesign on pain customers actually voiced.',
      // Note: Body content replaced by EmpathizeStrategyGrid component for visual impact
      body: '',
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify the Chaos: Mapping and Unifying the System',
      summary: 'Mapped and unified five fragmented subsystems into one coherent mental model. Prioritized patterns, clarified undocumented rules, and made complexity digestible for everyone.',
      body: `After accepting the project, I faced the reality: there was no onboarding, no spec, no design file, no historical rationale. Just: "Here's the sandbox. Figure it out."

This became a detective story. I pieced together the system from fragments: hundreds of screenshots, support tickets, conversations with the one engineer who knew it end-to-end, and patterns I discovered by using it myself.`,
      // Note: Hero image removed - SystemMappingBreakdown component provides the visual at section end
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'Iterate with Inclusion: Three Architectural Approaches',
      body: `After mapping the system and identifying the five subsystems, I explored three architectural directions before finding the solution that balanced everything. Each version taught me something different about platform constraints, user needs, and engineering realities.

Navigate through V1, V2, and V3 below to see how each approach evolved and why the final modal-based architecture emerged as the solution.`,
      // Store V1, V2, V3 data for the VersionIteration component
      v1Data: {
        id: 'version-1',
        title: 'Version 1: Independent Product',
        body: `My first instinct: match the platform's existing pattern. Designer, Data Flows, and other complex tools each had their own dedicated tab. ReportCaster, given its size and complexity, fit that pattern perfectly.

I designed V1 as a standalone product — one unified place with dedicated scheduling, explorer, and admin. It was beautiful, seamless, and looked exactly like the rest of the product.

But it was rejected. "Leadership wants all workflows to be centralized in the hub to increase adoption."

That was a fair constraint — not a design flaw. They liked the experience, but not the fact that it was outside the hub. So I moved on.`,
        images: [
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - Home.png',
            alt: 'RC Independent V1 - Home',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - New Schedule.png',
            alt: 'RC Independent V1 - New Schedule',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - Schedule Task.png',
            alt: 'RC Independent V1 - Schedule Task',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - New Schedule Full screen.png',
            alt: 'RC Independent V1 - New Schedule Full screen',
            sensitive: true,
          },
        ],
      },
      v2Data: {
        id: 'version-2',
        title: 'Version 2: Plugin Integration',
        body: `After V1 was rejected, I pivoted. If independence wasn't viable, the next logical step was a plugin.

The platform had custom plugins already — everything was migrating into the hub. So I thought: "If the reason V1 was rejected is 'it's outside the hub,' then bring RC inside as a plugin."

I built a hub-friendly plugin with fully integrated navigation, consolidated subsystems, and future-proof IA. I loved this version the most.

Again — it worked. But it was rejected. "Too much engineering effort. Too big of an addition this year."

This was a different constraint: not strategic (like V1), but resourcing. The plugin architecture was sound, but it would have required more engineering time than was available.

So I had two rejections. Instead of fighting, I reframed the problem from scratch.`,
        images: [
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule context menu.png',
            alt: 'RC Hub Integration V2.1 - Home',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule.png',
            alt: 'RC Hub Integration V2.1 - Create new schedule',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Admin (Status).png',
            alt: 'RC Hub Integration V2.1 - Admin',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule - New task.png',
            alt: 'RC Hub Integration V2.1 - New task',
            sensitive: true,
          },
        ],
      },
      v3Data: {
        id: 'version-3',
        title: 'Version 3: The Breakthrough (Platform-native Design)',
        body: `After V2 was rejected, I reframed the problem: instead of asking "Where should RC live?" I asked "How does the platform WANT workflows to behave?"

That's when I saw it: every major workflow starts in the plus (+) menu. This wasn't UI — it was platform architecture.

Aha moment — the + menu insight: If ReportCaster is fundamentally a creation workflow, why isn't it initiated from the + menu?

I designed modal-based creation flows that matched platform conventions. Conversations with the lead architect revealed the Home page was essentially filtered views of assets — I proposed treating RC Explorer as a filtered view, a pattern that could scale to all asset types.

**Technical constraints:** RC was built on legacy FOCUS code with no React or JavaScript. Modals were the right choice because they worked within existing platform infrastructure without requiring a complete rewrite.

This constraint became an advantage — it forced me to design WITH the platform, not against it.

Final solution: Scheduling and lists → modals from + menu. Explorer → filtered RC view in Home. Admin → surfaced in management center.`,
        subsections: [
          {
            title: 'Schedule Dialog',
            description: 'Unified schedule creation — all properties in one modal.',
            images: [
              {
                src: '/images/case-study/ReportCaster/Initiating ReportCaster from the HUB.png',
                alt: 'Initiating ReportCaster from + menu',
                fullWidth: true,
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Schedule Dialog - Properties.png',
                alt: 'Schedule Dialog - Properties',
                sensitive: true,
              },
            ],
          },
          {
            title: 'Recurrence Redesign',
            description: 'Natural language summaries instead of cryptic settings.',
            images: [
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Weekly.png',
                alt: 'Recurrence - Weekly',
                fullWidth: true,
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Monthly - Days of the week.png',
                alt: 'Recurrence - Monthly',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Days.png',
                alt: 'Recurrence - Daily',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Validation Error.png',
                alt: 'Recurrence - Validation Error',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Once.png',
                alt: 'Recurrence - One-time',
                sensitive: true,
              },
            ],
          },
          {
            title: 'Distribution List',
            description: 'Same modal pattern for all asset types.',
            images: [
              {
                src: '/images/case-study/ReportCaster/Distribution List starting point.png',
                alt: 'Distribution List - Start',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Add new members.png',
                alt: 'Distribution List - Add members',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Edit Current List+Search built in.png',
                alt: 'Distribution List - Edit',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Populated List view.png',
                alt: 'Distribution List - Populated',
                sensitive: true,
              },
            ],
          },
          {
            title: 'Access List',
            description: 'One mental model for all list types.',
            images: [
              {
                src: '/images/case-study/ReportCaster/Access List starting point.png',
                alt: 'Access List - Start',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Add new members.png',
                alt: 'Access List - Add new',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Add existing members - populated.png',
                alt: 'Access List - Add existing',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Current List+context menu options.png',
                alt: 'Access List - Current',
                sensitive: true,
              },
            ],
          },
          {
            title: 'RC Explorer',
            description: 'Filtered view pattern — scalable to all asset types.',
            images: [
              {
                src: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
                alt: 'ReportCaster Explorer',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/RC Explorer - filter view for different types of RC assets.png',
                alt: 'RC Explorer - Filter view',
                sensitive: true,
              },
            ],
          },
          {
            title: 'RC Admin',
            description: 'Fifth subsystem surfaced.',
            images: [
              {
                src: '/images/case-study/ReportCaster/ReportCaster Status (Admin).png',
                alt: 'ReportCaster Admin',
                sensitive: true,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'section-05',
      index: 'G',
      title: 'Grow Through Constraints: Aligning and Leading the Team',
      body: `With the architecture locked, execution began. The challenge: I was redesigning ML Functions simultaneously — two major enterprise systems at once.

I iterated through multiple versions of my own design — rebuilding the approach after each round because a cosmetic refresh wasn't enough. The goal was structural clarity.

This taught me to prioritize ruthlessly — architecture first, polish second. I learned to delegate by identifying what only I could do (UX architecture, cross-functional alignment) versus what could be handed off to other designers.

The team could execute because they understood the "why" behind every decision, not just the "what." I onboarded 2 designers mid-project and remained the knowledge hub even after transitioning to other work.`,
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Shipping Impact and Reflection',
      // Note: Body content replaced by NavigateForwardContent component for better visual hierarchy
      // Note: Before/After comparison moved to ImpactDiff component in CaseStudyLayout
      body: '',
    },
  ],
  // ----------------------------
  // PROTOTYPE (placeholder URLs)
  // ----------------------------
  prototypeMedia: {
    title: 'Transformation in Motion',
    description:
      'See the transformation unfold in real-time. Compare the old fragmented workflow with the new unified design side-by-side.',
    // Before/After video comparison
    beforeAfter: {
      before: {
        title: 'Legacy RC Workflow',
        videoUrl: '/videos/rc-old-workflow.mp4', // 5 min video of old RC UI workflow
        videoPoster: '/images/case-study/ReportCaster/rc-old-workflow-poster.jpg',
        description: 'The old fragmented workflow: multiple disconnected interfaces, 4–6 clicks to create a schedule, hidden functionality in legacy menus. Note: The legacy workflow video is under NDA and requires password access to view.',
        sensitive: true,
      },
      after: {
        title: 'New Unified Workflow',
        videoUrl: '/videos/rc-prototype-walkthrough.mp4',
        videoPoster: '/images/case-study/ReportCaster/rc-prototype-poster.jpg',
        description: 'The new unified workflow: modal-based creation, 2 clicks to create a schedule (+ menu → create schedule), all functionality accessible from one place. (Note: This is a Figma prototype and may not reflect all final shipped changes.)',
        isPublic: true, // Public - new workflow is not sensitive
      },
      comparisonNotes: {
        before: [
          'Multiple disconnected interfaces',
          '4–6 clicks to create a schedule',
          'Hidden functionality in legacy menus',
          'No unified mental model',
        ],
        after: [
          'Unified modal-based workflow',
          '2 clicks to create a schedule (+ menu → create schedule)',
          'All functionality accessible',
          'One coherent system',
        ],
      },
    },
    // Fallback single video if beforeAfter not available
    videoUrl: '/videos/rc-prototype-walkthrough.mp4',
    videoPoster: '/images/case-study/ReportCaster/rc-prototype-poster.jpg',
  },
  // ----------------------------
  // D.E.S.I.G.N. FRAMEWORK CONNECTION
  // ----------------------------
  frameworkConnection: {
    principles: [
      {
        letter: 'D',
        title: 'Discover Deeply',
        description: 'Requested assignment. Spent weeks understanding architecture before designing.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'Embedded in support meetings. Discovered customers hacking UI out of desperation.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: '5 → 1. Unified subsystems into one mental model.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Three architectural directions. Modal approach emerged from constraints.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Onboarded 2 designers. Remained knowledge hub post-transition.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'Shipped April 2024. Featured on public YouTube demos.',
      },
    ],
  },
  // ----------------------------
  // IMPACT + REFLECTION SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Shipping impact at a glance',
    bullets: [
      '5 subsystems → 1 unified mental model',
      '5+ clicks → 2 clicks for schedule creation',
      '20M+ weekly schedules impacted',
      'Architecture became "the pattern for everything"',
      'Shipped April 2024 — live in production',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY (Now combined with Section 08)
  // ----------------------------
  finalSummary: undefined,
}
