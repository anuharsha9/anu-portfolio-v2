import { CaseStudyData } from '@/types/caseStudy'

export const reportcasterCaseStudy: CaseStudyData = {
  slug: 'reportcaster',
  heroTitle: 'REPORTCASTER',
  heroSubheading: 'Rebuilding a legacy product and rebuilding myself',
  heroSubtitle:
    'A journey of taking on a 40-year-old system driven by flooding customer requests for modernization and turning it into clarity, structure, and a scalable future.',
  coverImage: {
    src: '/images/case-study/ReportCaster/rc-cover.png',
    alt: 'ReportCaster case study cover image',
  },
  role: 'Senior Product Designer (Principal-level scope & impact)',
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
      'I took full ownership of the redesign one week into joining—a testament to my ability to operate autonomously and deliver at Principal-level impact. I was the only designer who worked on all major WebFOCUS features, leading 3 out of 4 Principal-level initiatives (ReportCaster, ML Functions, IQ Plugin) simultaneously. I owned the entire ReportCaster redesign solo initially, while simultaneously leading ML Functions and IQ Plugin. I collaborated directly with Directors of Design, Engineering, and Product Management on strategic initiatives and architectural decisions, working closely with the Lead Architect of the entire organization. I rebuilt mental models from scratch, defined new architectures, and balanced user needs with deep engineering constraints. After establishing the architecture and core workflows, I onboarded 2 designers for final polish and shipping, providing hand-holding and knowledge transfer until full transition. Even after moving focus to other projects, I continued to be looped in for critical architectural decisions as the knowledge hub. This wasn&apos;t just design; it was technical systems thinking, strategic product leadership, team management, and end-to-end execution from ambiguity to production.',
    impactMetrics: [
      { label: 'Schedule creation', value: '44–56% fewer clicks, no new tabs' },
      { label: 'Multi-tab sprawl', value: 'Eliminated entirely' },
      { label: 'Explorer access', value: '≈60–70% fewer clicks' },
      { label: 'Creation speed', value: '≈50% faster completion' },
      { label: 'Support load', value: '≈25–30% reduction (directional)' },
      { label: 'Subsystems consolidated', value: '5 → 1 unified model' },
    ],
    star: {
      situation: 'A 40-year-old mission-critical system serving millions of users across hundreds of enterprise customers, processing 20 million schedules weekly. Customer requests for modernization were flooding in, creating urgent business pressure. Five fragmented subsystems with undocumented rules and no coherent mental model.',
      task: 'Responsibly modernize a system that couldn\'t afford to break — maintaining backward compatibility and aligning with platform patterns.',
      action: 'Took full ownership one week into joining. Mapped complex workflows across five fragmented subsystems, reverse-engineered undocumented rules, and unified them into one coherent architecture. Led cross-functional alignment with engineering, product, and QA—making strategic decisions when others hesitated. Delivered a modal-based creation model aligned with platform patterns.',
      result: '44–56% fewer clicks, eliminated multi-tab sprawl, and reduced support load by 25–30% — delivered safely at massive scale with resounding customer approval. Work shipped as part of WebFOCUS 9.3, impacting millions of users daily. Recognized by senior leadership in a company-wide meeting for early impact within first 6 months.',
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
      summary: 'Volunteered for a deferred 40-year-old legacy system one week into joining. Built structure from scratch with only sandbox access and tribal knowledge.',
      methodologies: ['System Exploration', 'Support Ticket Analysis', 'Customer Rep Interviews'],
      body: `One week into joining, my design director mentioned a legacy scheduling tool waiting in the pipeline. Customer requests for a modern ReportCaster were flooding in — the volume and urgency made it clear this wasn't just another deferred project.

When he brought it up, I said, "I would like to take it up." He gave it to me the same day.

The entire product was being modernized, but RC kept getting deferred despite mounting customer pressure. Why? It was HUGE. Nobody had touched it in decades.

This wasn't just a design project — it was an archaeological dig. The system had evolved organically, accumulating complexity with no documentation.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Ownership & Initiative → Volunteered for deferred project one week into joining',
        'Comfort with Ambiguity → Built structure from scratch with only sandbox and tribal knowledge',
        'Strategic Thinking → Turned challenge into opportunity',
      ],
      images: [
        {
          src: '/images/case-study/ReportCaster/RC legacy schedule dialog properties.png',
          alt: 'RC legacy schedule dialog properties',
          caption: 'Legacy schedule dialog: One of many disconnected interfaces users had to navigate.',
          sensitive: true,
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy explorer.png',
          alt: 'RC legacy explorer',
          caption: 'Legacy Explorer: A separate interface for viewing schedules — users navigated multiple disconnected systems.',
          sensitive: true,
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy admin status.png',
          alt: 'RC legacy admin status',
          caption: 'Legacy Admin: System configuration hidden in legacy menus.',
          sensitive: true,
        },
      ],
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Understanding Users and Constraints',
      summary: 'Reverse-engineered an undocumented system from fragments. Created the first complete mental model map in RC\'s 40-year history.',
      methodologies: ['System Mapping', 'Support Ticket Analysis', 'Competitive Analysis', 'Workflow Documentation'],
      body: `At the enterprise product level, we weren't allowed to conduct direct user research with actual customers. The Customer Support team and customer reps became my proxies for understanding user pain points.

I designed for the entire RC ecosystem: end users creating schedules, support teams handling tickets, engineers maintaining legacy code, and PMs planning features. Each role's constraints and needs shaped the unified architecture.

I discovered users were hacking their way around the UI. I saw real tickets showing how customers customized and worked around the broken UI.

The "Basic" vs "Advanced" schedule types weren't about complexity — they were legacy artifacts creating artificial barriers.

I validated everything with customer support and customer reps repeatedly. By understanding the ecosystem — not just end users, but everyone who interacted with RC — I could design a solution that worked for the entire system.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Ecosystem Thinking → Designed for entire RC ecosystem: users, support, engineers, PMs',
        'User-Centered Research → Built understanding through support tickets and customer reps when direct research wasn\'t allowed',
        'Constraint Awareness → Each role\'s constraints and needs shaped the unified architecture',
      ],
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify the Chaos: Mapping and Unifying the System',
      summary: 'Mapped and unified five fragmented subsystems into one coherent mental model. Prioritized patterns, clarified undocumented rules, and made complexity digestible for everyone.',
      methodologies: ['System Mapping', 'Support Ticket Analysis', 'Competitive Analysis', 'Workflow Documentation'],
      body: `After accepting the project, I faced the reality: there was no onboarding, no spec, no design file, no historical rationale. Just: "Here's the sandbox. Figure it out."

This became a detective story. I had to piece together the system from fragments: hundreds of screenshots, support tickets, conversations with the one engineer who knew it end-to-end, and patterns I discovered by using it myself.

I spent months understanding what RC actually did, not what it was supposed to do. The gap between those two things was where the real problems lived.

By the time I finished, I knew more about the system's UX and workflows than anyone else in the org.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Deep System Understanding → Created first complete mental-model map',
        'User-Centered Research → Built understanding through support tickets and customer reps when direct research wasn\'t allowed',
        'Independent Problem-Solving → Reconstructed undocumented system from scratch',
        'Systems Thinking → Identified five subsystems and unified them into one coherent mental model',
      ],
      images: [
        {
          src: '/images/case-study/ReportCaster/ReportCaster Basic Map Workflow.png',
          alt: 'ReportCaster Basic Workflow',
          caption: 'RC mental-model map: The complete system diagram showing the unified workflow that replaced five independent subsystems with one coherent mental model.',
        },
      ],
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'Iterate with Inclusion: Three Architectural Approaches',
      body: `After mapping the system and identifying the five subsystems, I explored three architectural directions before finding the solution that balanced everything. Each version taught me something different about platform constraints, user needs, and engineering realities.

Navigate through V1, V2, and V3 below to see how each approach evolved and why the final modal-based architecture emerged as the solution.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Iterative Problem-Solving → Explored three approaches, learning from each rejection',
        'Systems Thinking → + menu breakthrough came from asking "How does the platform WANT workflows to behave?"',
        'Resilience & Adaptation → Each rejection became a learning that led to the final solution',
      ],
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

The platform had custom plugins already — Portals, Server directories, Management Center — everything was migrating into the hub. So I thought: "If the reason V1 was rejected is 'it's outside the hub,' then bring RC inside as a plugin."

I built a hub-friendly plugin with fully integrated navigation, consolidated subsystems, and future-proof IA. I loved this version the most.

Again — it worked. But it was rejected.

"Too much engineering effort. Too big of an addition this year."

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

**Technical constraints I worked within:** RC was built on legacy FOCUS code with no React or JavaScript. Modals were the right choice because they worked within the existing platform infrastructure without requiring a complete rewrite.

This constraint became an advantage — it forced me to design WITH the platform, not against it.

Final solution: Scheduling and lists → modals from + menu. Explorer → filtered RC view in Home. Admin → surfaced in management center. All within the hub, all consistent, all discoverable.

This version balanced platform architecture, engineering constraints, user mental models, and long-term scalability.`,
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
      body: `After defining the architecture (V3), UX was done. Time for UI.

As I worked through hundreds of screens, the team assembled. But most had never seen RC end-to-end — engineers knew the backend, PMs knew features, support knew problems. No one understood the whole system.

I led cross-functional alignment across engineering, product, and QA: validated technical feasibility with engineering, co-defined scope with product, and collaborated with QA on test cases.

I onboarded lead architect, lead engineer, full engineering squad, new PM, QA, documentation, and SMEs through dozens of demos. Each team member needed to understand not just their piece, but how RC worked as a unified system.

I was also redesigning ML Functions simultaneously while having a 1 year old at home. This taught me to prioritize ruthlessly: architecture first, polish second.

I learned to delegate — identifying what only I could do (UX architecture, team alignment) versus what could be handed off (UI polish). The team could execute because they understood the "why" behind every decision, not just the "what."`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Team Alignment → Onboarded entire cross-functional team through dozens of demos',
        'Clear Communication → Translated complex legacy systems into understandable UX rationale',
        'Leading Without Title → Managed two Principal-level redesigns simultaneously',
      ],
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Shipping Impact and Reflection',
      body: `After aligning the team, we shipped. The system transformed from a fragmented product into a unified, platform-native experience.

The transformation was visible immediately. Users who had spent years working around the system's limitations could now work with it. New users could understand RC in minutes, not hours.

Support tickets shifted from "how do I..." to "can I do..." — a fundamental shift from confusion to capability.

The architecture I designed allowed the PM to add new features after launch without breaking the mental model. I had designed for extensibility, not just for the current release.

This was not just a redesign — it was a complete architectural transformation of a system that had become too complex for anyone to understand. I reverse-engineered an undocumented enterprise system, thought at platform scale, and led cross-functional teams through ambiguity.

I became the only person in a 200-person business unit who understood RC end-to-end. This project taught me to design at platform scale — not just individual features, but how systems connect, how patterns scale, and how architecture enables future growth.

The key insight: You don't need to rebuild everything from scratch. Understand the system deeply enough to identify the core mental model, then rebuild the architecture around that clarity.

Legacy systems can be modernized without losing their power — you just need to make the complexity visible, then structure it. RC reshaped how I think about design: clarity, structure, and systems-level problem-solving became my core strengths.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Long-Term Thinking → Designed for extensibility — architecture allowed new features post-launch',
        'Measurable Impact → New users understood RC in minutes, reduced complexity eliminated common support pain points',
        'Architectural Transformation → Unified five subsystems into one coherent system',
        'Growth Through Challenge → RC reshaped how I think, teaching me to design at platform scale',
        'Systems-Level Impact → My value is in clarity, direction, and systems-level problem-solving',
      ],
      beforeAfter: {
        before: {
          src: '/images/case-study/ReportCaster/Before.png',
          alt: 'Before: Legacy RC interface',
          caption: 'Before: Legacy RC interface — fragmented, multi-tab workflow requiring 4–6 clicks to create a schedule, with five independent subsystems and no unified mental model.',
          sensitive: true,
        },
        after: {
          src: '/images/case-study/ReportCaster/After.png',
          alt: 'After: New RC interface',
          caption: 'After: New RC interface — unified, modal-based workflow requiring 2 clicks to create a schedule (+ menu → create schedule), with Explorer 1 click away and all subsystems unified into one coherent system.',
          // Public - new workflow is not sensitive
        },
        beforeLabel: 'Before',
        afterLabel: 'After',
      },
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
        description: 'I explored sandbox environments, mapped undocumented workflows, and built complete context through support tickets, customer reps, and system exploration before proposing any solutions.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'I designed for the entire RC ecosystem: end users creating schedules, support teams handling tickets, engineers maintaining legacy code, and PMs planning features. Each role\'s constraints and needs shaped the unified architecture.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'I mapped and unified fragmented subsystems into one coherent mental model. I prioritized patterns, clarified undocumented rules, and made complexity digestible for everyone.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'I prototyped three major architectural directions (independent product, hub plugin, modal-based) and synthesized feedback from engineering, PM, QA, docs, and support. The final modal-based approach emerged from collaborative constraint synthesis.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Legacy platform patterns, backward compatibility, and engineering timelines forced hard choices. Instead of fighting constraints, I used them to refine the solution — the modal-based architecture emerged directly from platform + menu patterns and engineering realities.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'I became the only person in a 200-person business unit who understood RC end-to-end. I onboarded all teams into the new architecture and ensured the redesigned system could scale and extend for future needs.',
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
