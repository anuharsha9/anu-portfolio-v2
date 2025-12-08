import { CaseStudyData } from '@/types/caseStudy'

export const reportcasterCaseStudy: CaseStudyData = {
  slug: 'reportcaster',
  heroTitle: 'REPORTCASTER',
  heroSubheading: 'A 50-year-old satisfyer, untouched by UX—until now',
  heroSubtitle:
    'A journey of taking on a 50-year-old system driven by flooding customer requests for modernization and turning it into clarity, structure, and a scalable future.',
  coverImage: {
    src: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
    alt: 'ReportCaster Explorer - Unified Schedule Management',
  },
  role: 'UX Lead / UX Owner (End-to-End Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2022–2025',
  status: {
    label: 'Live in Production',
    variant: 'live' as const,
  },
  scope: [
    'Enterprise UX',
    'Legacy modernization',
    'Architecture & IA',
    'Workflow Design',
    'Cross-functional Leadership',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'ReportCaster — Quick Impact Overview',
    subtitle: 'Enterprise scheduling system modernization',
    whatTheSystemWas:
      'A deeply embedded scheduling engine powering millions of automated jobs — undocumented, fragmented, and structurally outdated. Customer requests for modernization were flooding in, making this a business-critical priority.',
    myRole:
      'First to document the complete ecosystem. Reverse-engineered 5 undocumented subsystems into one architecture. Collaborated with Directors on strategy. Onboarded 2 designers and remained the knowledge hub.',
    scopeOfPractice: [
      {
        tag: 'SYSTEM_AUTHORITY',
        tagColor: 'blue',
        headline: 'End-to-End Ownership',
        body: '**First to document** the entire scheduling ecosystem. Turned tribal knowledge into a single source of truth.',
        icon: 'architect',
      },
      {
        tag: 'LEGACY_DECONSTRUCTION',
        tagColor: 'amber',
        headline: 'System Archaeology',
        body: 'No spec. Reverse-engineered **5 undocumented subsystems** from code and sandbox testing.',
        icon: 'archaeologist',
      },
      {
        tag: 'STRATEGIC_ALIGNMENT',
        tagColor: 'purple',
        headline: 'Executive Collaboration',
        body: 'Partnered with **Directors of Engineering and Product** to define the modernization strategy.',
        icon: 'strategist',
      },
      {
        tag: 'KNOWLEDGE_TRANSFER',
        tagColor: 'emerald',
        headline: 'Team Enablement',
        body: 'Onboarded **2 senior designers**. Created the documentation hub—engineering\'s Source of Truth.',
        icon: 'multiplier',
      },
    ],
    impactMetrics: [
      { label: 'Schedule creation', value: '44–56% fewer clicks, no new tabs' },
      { label: 'Multi-tab sprawl', value: 'Eliminated entirely' },
      { label: 'Explorer access', value: '≈60–70% fewer clicks' },
      { label: 'Creation speed', value: '≈50% faster completion' },
      { label: 'Support load', value: '≈25–30% reduction (directional)' },
      { label: 'Subsystems consolidated', value: '5 → 1 unified model' },
    ],
    star: {
      situation: '50-year-old scheduler. 20M+ weekly schedules. Five fragmented subsystems, no documentation, modernization requests flooding in.',
      task: 'Modernize without breaking mission-critical workflows.',
      action: 'Owned end-to-end. Reverse-engineered undocumented rules. Unified five subsystems into one architecture. Delivered modal-based creation model.',
      result: '44–56% fewer clicks. Multi-tab sprawl eliminated. Shipped in WebFOCUS 9.3.',
    },
    technologies: [
      'Figma',
      'WebFOCUS Platform',
      'User Research',
      'System Architecture',
      'Prototyping',
      'Stakeholder Alignment',
    ],
    keyAchievements: [
      'Unified five fragmented subsystems into one coherent mental model',
      'Reduced schedule creation clicks by 44–56% with zero new tabs',
      'Eliminated multi-tab sprawl entirely',
      'Only designer who worked on all major WebFOCUS features; owned entire ReportCaster redesign solo initially while simultaneously leading ML Functions and IQ Plugin',
      'Onboarded 2 designers for final polish and shipping, providing hand-holding and knowledge transfer until full transition',
      'Continued to be looped in for critical architectural decisions as knowledge hub even after transitioning focus to other projects',
      'Delivered multiple organization-wide design demos to 150-200 person business unit, presenting design walkthroughs and architectural decisions',
      'Co-hosted Virtual User Group Sessions for enterprise customers as only designer alongside Senior PM',
      'Shipped as part of WebFOCUS 9.3, impacting millions of users daily across enterprise deployments',
      'Onboarded cross-functional teams (engineering, PM, QA, docs, support)',
      'Clarified undocumented rules (bursting, retention, crash recovery)',
    ],
    publicDemoUrl: 'https://webfocusinfocenter.informationbuilders.com/wfappent/TL2s/TL_ls/source/ReportCaster.htm',
    publicDemoLabel: 'ReportCaster Public Demo',
    dataSheetUrl: 'https://www.ibi.com/content/dam/ibi/documents/data-sheet/webfocus-report-caster-data-sheet.pdf',
    dataSheetLabel: 'View ReportCaster Data Sheet',
    demoVideoUrl: 'https://www.youtube.com/watch?v=NvNFN6sz41M',
    demoVideoLabel: 'ReportCaster Public Demo',
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
    title: 'UX principles behind the ReportCaster redesign',
    intro: 'Underneath the architecture work, the redesign was guided by established UX principles and heuristics:',
    principles: [
      {
        title: 'Cognitive Load Theory: Reduce mental overhead, preserve functionality',
        description:
          'Applied cognitive load principles to remove unnecessary branching, repeated decisions, and hidden rules while maintaining the full power of a legacy system. Users get simplicity without losing capability.',
      },
      {
        title: 'Mental Models: One consistent system model',
        description:
          'Unified five fragmented subsystems (schedules, distribution, access, Explorer, Admin) into one coherent mental model. Every interaction reinforces a single, predictable pattern aligned with user expectations.',
      },
      {
        title: 'User Control & Freedom: Predictable, reversible workflows',
        description:
          'Users always know where they are, what happens next, and how to safely undo actions. Applied Nielsen\'s heuristic for user control through clear navigation, visible state, and reversible operations.',
      },
      {
        title: 'Match Between System & Real World: Legacy behavior preserved, logic clarified',
        description:
          'Respected existing workflows customers relied on (bursting, retention, blackout rules) while making legacy logic visible and explainable. Applied Nielsen\'s heuristic to match user mental models rather than forcing new ones.',
      },
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
      summary: 'Took ownership of a deferred 50-year-old legacy system. Built structure from scratch with only sandbox access and tribal knowledge.',
      // Note: Body and images removed - replaced by SystemArchaeology component for visual impact
      body: '',
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Understanding Users and Constraints',
      summary: 'Built ecosystem understanding through proxy research when direct user access was blocked.',
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
            caption: 'V1: Independent product approach — matching platform history of isolated environments.',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - New Schedule.png',
            alt: 'RC Independent V1 - New Schedule',
            caption: 'V1: Unified RC product with consolidated subsystems.',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - Schedule Task.png',
            alt: 'RC Independent V1 - Schedule Task',
            caption: 'V1: All RC functionality in one dedicated environment.',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - New Schedule Full screen.png',
            alt: 'RC Independent V1 - New Schedule Full screen',
            caption: 'V1: Dedicated space for complex scheduling workflows.',
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
            alt: 'RC Hub Integration V2.1 - Home - Create new schedule context menu',
            caption: 'V2: Hub plugin approach with unified navigation.',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule.png',
            alt: 'RC Hub Integration V2.1 - Home - Create new schedule',
            caption: 'V2: RC integrated as plugin within hub environment.',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Admin (Status).png',
            alt: 'RC Hub Integration V2.1 - Admin (Status)',
            caption: 'V2: Admin capabilities surfaced in hub plugin.',
            sensitive: true,
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule - New task.png',
            alt: 'RC Hub Integration V2.1 - Home - Create new schedule - New task',
            caption: 'V2: Task management integrated in hub.',
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
            description: 'Unified schedule creation flow — all properties, distribution, recurrence, tasks, and job monitoring in one modal interface.',
            images: [
              {
                src: '/images/case-study/ReportCaster/Initiating ReportCaster from the HUB.png',
                alt: 'Initiating ReportCaster from + menu',
                caption: 'V3 breakthrough: Initiating ReportCaster from the + menu — the platform-native approach that aligned with WebFOCUS patterns. Every major workflow starts from the + menu, so RC scheduling, distribution lists, and access lists became modal-based creations.',
                fullWidth: true,
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Schedule Dialog - Properties.png',
                alt: 'Schedule Dialog - Properties',
                caption: 'Schedule Dialog - Properties: The modal-based creation flow showing how all schedule properties are accessible in one unified interface, replacing the fragmented legacy dialogs.',
                sensitive: true,
              },
            ],
          },
          {
            title: 'Recurrence Redesign: From Cryptic Settings to Natural Language',
            description: 'Redesigned recurrence with natural language summaries — "Every Monday at 9 AM" instead of cryptic technical settings. A fundamental rethinking of how users interact with scheduling complexity.',
            images: [
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Weekly.png',
                alt: 'Recurrence - Weekly with natural language',
                caption: 'Natural language summaries: The redesigned recurrence system displays "Every Monday at 9 AM" instead of cryptic technical settings — making complex scheduling rules immediately understandable to all users.',
                fullWidth: true,
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Monthly - Days of the week.png',
                alt: 'Recurrence - Monthly by days of week',
                caption: 'Complex patterns made simple: Monthly recurrences like "First Monday of every month" use the same natural language approach, handling sophisticated scheduling patterns with clarity and precision.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Days.png',
                alt: 'Recurrence - Daily',
                caption: 'Daily patterns: Simple daily recurrences are just as clear — "Every day at 9 AM" instead of technical recurrence rules, making the most common scheduling pattern immediately accessible.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Validation Error.png',
                alt: 'Recurrence - Validation Error',
                caption: 'Validation and error handling: Clear error states guide users when recurrence settings are invalid, preventing scheduling mistakes and reducing support tickets.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Once.png',
                alt: 'Recurrence - One-time',
                caption: 'One-time scheduling: Even simple "run once" schedules benefit from the redesigned interface, showing that the system handles both simple and complex patterns with the same clarity.',
                sensitive: true,
              },
            ],
          },
          {
            title: 'Distribution List',
            description: 'Unified creation model for distribution lists — same modal pattern applied to all RC asset types.',
            images: [
              {
                src: '/images/case-study/ReportCaster/Distribution List starting point.png',
                alt: 'Distribution List starting point',
                caption: 'V3: Distribution List starting point — unified creation model for schedules and lists, all accessible from the + menu modal workflow.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Add new members.png',
                alt: 'Distribution List - Add new members',
                caption: 'Distribution List - Add new members: Creating new distribution list members follows the same unified modal pattern, making list management consistent with schedule creation.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Edit Current List+Search built in.png',
                alt: 'Distribution List - Edit Current List',
                caption: 'Distribution List - Edit Current List: Editing and managing existing distribution lists with built-in search — showing how the unified interface handles both creation and management workflows.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Populated List view.png',
                alt: 'Distribution List - Populated List view',
                caption: 'Distribution List - Populated List view: The final state showing a populated distribution list — demonstrating how the unified system makes list management clear and accessible.',
                sensitive: true,
              },
            ],
          },
          {
            title: 'Access List',
            description: 'Access list management unified into the same modal-based workflow — one mental model instead of five.',
            images: [
              {
                src: '/images/case-study/ReportCaster/Access List starting point.png',
                alt: 'Access List starting point',
                caption: 'V3: Access List starting point — completing the unified creation model. All three asset types (schedules, distribution lists, access lists) now follow the same pattern.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Add new members.png',
                alt: 'Access List - Add new members',
                caption: 'Access List - Add new members: Creating new access list members follows the same unified modal pattern, making access management consistent with other RC workflows.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Add existing members - populated.png',
                alt: 'Access List - Add existing members',
                caption: 'Access List - Add existing members: Selecting existing members to add to an access list — showing how the unified interface handles member selection and management.',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Current List+context menu options.png',
                alt: 'Access List - Current List',
                caption: 'Access List - Current List: Managing existing access lists with context menu options — demonstrating how access control is now clear and accessible, replacing hidden legacy controls.',
                sensitive: true,
              },
            ],
          },
          {
            title: 'RC Explorer',
            description: 'Explorer as filtered view — RC Explorer became a filtered view of RC assets. This pattern could scale to ALL asset types on the platform.',
            images: [
              {
                src: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
                alt: 'ReportCaster Explorer',
                caption: 'ReportCaster Explorer: Explorer as filtered view — the big architectural idea. RC Explorer became a filtered view of RC assets inside the workspace. This pattern could scale to ALL asset types on the platform — a major architectural win that leadership recognized as "the pattern we should use for everything."',
                sensitive: true,
              },
              {
                src: '/images/case-study/ReportCaster/RC Explorer - filter view for different types of RC assets.png',
                alt: 'RC Explorer - Filter view',
                caption: 'RC Explorer - Filter view: The filtered view pattern in action — showing how users can filter by different types of RC assets (schedules, distribution lists, access lists), demonstrating how this architectural approach scales across all asset types.',
                sensitive: true,
              },
            ],
          },
          {
            title: 'RC Admin',
            description: 'Admin capabilities surfaced and accessible — fifth subsystem unified into the main interface.',
            images: [
              {
                src: '/images/case-study/ReportCaster/ReportCaster Status (Admin).png',
                alt: 'ReportCaster Status (Admin)',
                caption: 'ReportCaster Status (Admin): Admin capabilities surfaced and accessible — no longer hidden in legacy menus. The fifth subsystem unified into the main interface.',
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
      body: `With the architecture locked, execution began. The challenge: I was redesigning ML Functions simultaneously while having a 1-year-old at home.

This taught me to prioritize ruthlessly — architecture first, polish second. I learned to delegate by identifying what only I could do (UX architecture, team alignment) versus what could be handed off.

The team could execute because they understood the "why" behind every decision, not just the "what."`,
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
        description: 'Sandbox exploration. Support tickets. Customer reps. Built complete context before proposing solutions.',
        systemLogic: "explore(sandbox).map(undocumented.workflows);",
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'Designed for end users, support teams, engineers, and PMs. Each role\'s constraints shaped the architecture.',
        systemLogic: "forEach([users, support, engineers, PMs], align);",
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'Unified five subsystems into one mental model. Clarified undocumented rules. Made complexity digestible.',
        systemLogic: "const mentalModel = unify(fragmentedSubsystems);",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Three architectural directions (standalone, plugin, modal). Synthesized feedback from engineering, PM, QA. Modal approach emerged from constraints.',
        systemLogic: "select([standalone, hubPlugin, modal]).from(feedback);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Legacy patterns and timelines forced hard choices. Used constraints to refine—modal architecture emerged from platform realities.',
        systemLogic: "constraints.map(c => c.becomes(feature)); // not bugs",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'First to document RC end-to-end. Created the spec. Onboarded teams. Ensured scalability.',
        systemLogic: "role = 'system_architect'; // tribal knowledge → spec",
      },
    ],
  },
  // ----------------------------
  // IMPACT + REFLECTION SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Shipping impact at a glance',
    bullets: [
      'Streamlined workflows — 75% fewer clicks, eliminated multi-tab sprawl.',
      'Multi-tab workflows eliminated entirely.',
      'Explorer and Admin surfaced and accessible.',
      'Unified mental model for all RC tasks.',
      'Recurrence redesigned with natural-language summaries.',
      'Reduced support tickets and onboarding friction.',
      'RC prepared for future extensibility.',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY (Now combined with Section 08)
  // ----------------------------
  finalSummary: undefined,
}
