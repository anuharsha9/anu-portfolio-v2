import { CaseStudyData } from '@/types/caseStudy'

export const reportcasterCaseStudy: CaseStudyData = {
  slug: 'reportcaster',
  heroTitle: 'REPORTCASTER',
  heroSubheading: 'Rebuilding a legacy product and rebuilding myself',
  heroSubtitle:
    'A true story of taking on a 40-year-old system no one else wanted to touch — and turning it into clarity, structure, and a scalable future.',
  coverImage: {
    src: '/images/case-study/ReportCaster/rc-cover.png',
    alt: 'ReportCaster case study cover image',
  },
  role: 'Senior Product Designer (Principal-level scope)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2022–2025',
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
    subtitle: 'Modernizing a 40-year-old enterprise scheduling system',
    whatTheSystemWas:
      'A deeply embedded, decades-old scheduling engine powering millions of automated jobs across enterprise customers — undocumented, fragmented, and structurally outdated.',
    myRole:
      'I took full ownership of the redesign one week into joining. I reverse-engineered the system, rebuilt its mental model, and defined a new architecture aligned with platform patterns and engineering constraints.',
    keyActions: [
      'Reconstructed the end-to-end system using sandbox exploration, support insights, customer conversations, and legacy engineering knowledge.',
      'Unified five fragmented subsystems into one coherent mental model.',
      'Proposed three major architectural directions and synthesized constraints to define the final path.',
      "Introduced a scalable, modal-based creation model initiated from the platform's + menu.",
      'Proposed Explorer-as-filtered-view pattern that could scale across the entire platform.',
      'Redesigned recurrence with natural-language summaries.',
      'Clarified undocumented rules such as bursting, retention, and crash recovery.',
      'Onboarded engineering, PM, QA, docs, and support teams into the redesigned architecture.',
    ],
    impactMetrics: [
      { label: 'Schedule creation', value: '44–56% fewer clicks, no new tabs' },
      { label: 'Multi-tab sprawl', value: 'Eliminated entirely' },
      { label: 'Explorer access', value: '≈60–70% fewer clicks' },
      { label: 'Creation speed', value: '≈40–50% faster' },
      { label: 'Support load', value: '≈25–30% reduction (directional)' },
      { label: 'Subsystems consolidated', value: '5 → 1 unified model' },
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
    intro: 'Underneath the architecture work, the redesign was guided by a few very deliberate UX principles:',
    principles: [
      {
        title: 'Reduce cognitive load, not power',
        description:
          'Keep the full power of a 40-year-old system, but remove unnecessary branching, repeated decisions, and hidden rules that made scheduling mentally exhausting.',
      },
      {
        title: 'One mental model for everything',
        description:
          'Treat schedules, distribution lists, access lists, Explorer, and Admin as parts of one system, not five disconnected tools. Every decision reinforced a single, predictable model.',
      },
      {
        title: 'Make workflows predictable and reversible',
        description:
          'Users should always know: where they are in the flow, what happens next, and how to safely go back without breaking anything.',
      },
      {
        title: 'Respect legacy behavior, clarify legacy logic',
        description:
          "Don't casually \"break\" workflows customers rely on. Preserve critical behaviors (bursting, retention, blackout rules), but make them visible and explainable in the UI.",
      },
      {
        title: 'Architect first, polish second',
        description:
          'Prioritize information architecture, entry points, and system behavior before debating component styling. UI polish is layered on top of a stable structural foundation.',
      },
      {
        title: 'Align with platform patterns, not side-step them',
        description:
          "Use the hub's + menu, modal patterns, and explorer conventions so RC feels like a first-class citizen of WebFOCUS—not a bolted-on legacy corner.",
      },
    ],
  },
  // ----------------------------
  // NARRATIVE CASE STUDY SECTIONS (01–08) - Password Gated
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: '01',
      title: 'How I Landed the Project (And Why It Mattered)',
      body: `One week into joining, my design director mentioned a legacy scheduling tool waiting in the pipeline. Customer requests for a modern ReportCaster had started flowing in, but the project still hadn't been assigned.

When he brought it up, I said, "I would like to take it up." He gave it to me the same day.

The entire product was being modernized, but RC kept getting deferred. Why? It was HUGE. Nobody had touched it in decades. It was old, massive, and untouched — something no one else wanted to touch.

I had one sandbox link, a brief demo from the lead support engineer, and tribal knowledge. That was it. So I started.

This wasn't just a design project — it was an archaeological dig. I was reverse-engineering a 40-year-old system that had evolved organically, accumulating complexity with no documentation. The systems that keep getting deferred are often the ones that need the most help — and the ones that teach you the most.`,
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
          caption: 'RC legacy schedule dialog properties: The fragmented schedule dialog showing properties — one of many disconnected interfaces users had to navigate.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy schedule dialog distribution.png',
          alt: 'RC legacy schedule dialog distribution',
          caption: 'RC legacy schedule dialog distribution: Another separate interface for managing distribution lists — part of the five independent subsystems.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy explorer.png',
          alt: 'RC legacy explorer',
          caption: 'RC legacy Explorer: A separate interface for viewing schedules — users had to navigate multiple disconnected systems to accomplish one task.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy admin status.png',
          alt: 'RC legacy admin status',
          caption: 'RC legacy Admin: System configuration hidden in legacy menus — the fifth independent subsystem that needed unification.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy - distribution dialog.png',
          alt: 'RC legacy distribution dialog',
          caption: 'RC legacy distribution dialog: A separate dialog for managing distribution — showing how subsystems were fragmented across different interfaces.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy distribution list UI.png',
          alt: 'RC legacy distribution list UI',
          caption: 'RC legacy distribution list UI: Distribution list management in yet another separate interface — demonstrating the lack of unified mental model.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy access list UI.png',
          alt: 'RC legacy access list UI',
          caption: 'RC legacy access list UI: Access control in a separate interface — part of the fragmented system architecture.',
        },
        {
          src: '/images/case-study/ReportCaster/RC legacy distrubtion ui in basic schedule.png',
          alt: 'RC legacy distribution UI in basic schedule',
          caption: 'RC legacy distribution UI in basic schedule: Distribution settings embedded inconsistently in the basic schedule dialog — showing how subsystems were mixed together without clear patterns.',
        },
      ],
    },
    {
      id: 'section-02',
      index: '02',
      title: 'Learning the System No One Documented',
      body: `After accepting the project, I faced the reality: there was no onboarding, no spec, no design file, no historical rationale. Just: "Here's the sandbox. Figure it out."

This became a detective story. I had to piece together a 40-year-old system from fragments: hundreds of screenshots, support tickets, conversations with the one engineer who knew it end-to-end, and patterns I discovered by using it myself.

At the enterprise product level, we weren't allowed to conduct direct user research with actual customers. The Customer Support team and customer reps became my proxies for understanding user pain points.

I mapped everything — see the visual breakdowns below. I spent months understanding what RC actually did, not what it was supposed to do. The gap between those two things was where the real problems lived.

I discovered users were hacking their way around the UI. I saw real tickets showing how customers customized and worked around the broken UI. The "Basic" vs "Advanced" schedule types weren't about complexity — they were legacy artifacts creating artificial barriers.

I validated everything with customer support and customer reps repeatedly. Eventually, I created a full mind map representing the actual product mental model — the first one in RC's 40-year history. By the time I finished, I knew more about the system's UX and workflows than anyone else in the org.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Deep System Understanding → Created first mental-model map in RC\'s 40-year history',
        'User-Centered Research → Built understanding through support tickets and customer reps when direct research wasn\'t allowed',
        'Independent Problem-Solving → Reconstructed undocumented system from scratch',
      ],
      images: [
        {
          src: '/images/case-study/ReportCaster/ReportCaster Basic Map Workflow.png',
          alt: 'ReportCaster Basic Workflow',
          caption: 'RC mental-model map: The first complete system diagram in RC\'s 40-year history — showing the unified workflow that replaced five independent subsystems with one coherent mental model.',
        },
        {
          src: '/images/case-study/ReportCaster/industry comparison of rc with other schedulers.png',
          alt: 'Industry comparison of RC with other schedulers',
          caption: 'Competitive analysis: Studying how other enterprise schedulers handled similar complexity — identifying patterns that worked and opportunities to differentiate.',
        },
      ],
    },
    {
      id: 'version-iteration',
      index: '03',
      title: 'The Iteration Journey: Three Architectural Approaches',
      body: `After mapping the system and identifying the five subsystems (Section 02), I explored three architectural directions before finding the solution that balanced everything.

Navigate through V1, V2, and V3 below to see how each approach evolved based on constraints and platform patterns.`,
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
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - New Schedule.png',
            alt: 'RC Independent V1 - New Schedule',
            caption: 'V1: Unified RC product with consolidated subsystems.',
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - Schedule Task.png',
            alt: 'RC Independent V1 - Schedule Task',
            caption: 'V1: All RC functionality in one dedicated environment.',
          },
          {
            src: '/images/case-study/ReportCaster/RC - V1.3 - Independent version - New Schedule Full screen.png',
            alt: 'RC Independent V1 - New Schedule Full screen',
            caption: 'V1: Dedicated space for complex scheduling workflows.',
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
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule.png',
            alt: 'RC Hub Integration V2.1 - Home - Create new schedule',
            caption: 'V2: RC integrated as plugin within hub environment.',
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Admin (Status).png',
            alt: 'RC Hub Integration V2.1 - Admin (Status)',
            caption: 'V2: Admin capabilities surfaced in hub plugin.',
          },
          {
            src: '/images/case-study/ReportCaster/RC Hub Integration V2.1 - Home - Create new schedule - New task.png',
            alt: 'RC Hub Integration V2.1 - Home - Create new schedule - New task',
            caption: 'V2: Task management integrated in hub.',
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

**Technical constraints I worked within:** RC was built on legacy FOCUS code with no React or JavaScript. Modals were the right choice because they worked within the existing platform infrastructure without requiring a complete rewrite. This constraint became an advantage — it forced me to design WITH the platform, not against it.

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
              },
              {
                src: '/images/case-study/ReportCaster/Schedule dialog - tasks.png',
                alt: 'Schedule dialog - tasks',
                caption: 'Schedule dialog - Tasks: Tasks view within the schedule dialog — demonstrating how the unified interface consolidates all schedule components.',
              },
              {
                src: '/images/case-study/ReportCaster/Task Dialog.png',
                alt: 'Task Dialog',
                caption: 'Task Dialog: Task configuration within the schedule workflow — showing how individual tasks are configured and managed within the unified schedule creation flow.',
              },
              {
                src: '/images/case-study/ReportCaster/Schedule Dialog - distribution.png',
                alt: 'Schedule Dialog - distribution',
                caption: 'Schedule Dialog - Distribution: Distribution method dialog integrated into the main schedule creation flow — no longer a separate subsystem.',
              },
              {
                src: '/images/case-study/ReportCaster/Distribution Dialog.png',
                alt: 'Distribution Dialog',
                caption: 'Distribution Dialog: The distribution method selection interface within the schedule workflow — showing how distribution options are presented and configured.',
              },
              {
                src: '/images/case-study/ReportCaster/Schedule Dialog - Properties.png',
                alt: 'Schedule Dialog - Properties',
                caption: 'Schedule Dialog - Properties: The modal-based creation flow showing how all schedule properties are accessible in one unified interface, replacing the fragmented legacy dialogs.',
              },
              {
                src: '/images/case-study/ReportCaster/Schedule Dialog - Job Log.png',
                alt: 'Schedule Dialog - Job Log',
                caption: 'Schedule Dialog - Job Log: Job monitoring integrated into the schedule workflow — showing how users can view job status and logs within the schedule context.',
              },
              {
                src: '/images/case-study/ReportCaster/Job log dialog.png',
                alt: 'Job log dialog',
                caption: 'Job log dialog: Detailed job log view within the schedule workflow — providing comprehensive job monitoring and status information.',
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
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Monthly - Days of the week.png',
                alt: 'Recurrence - Monthly by days of week',
                caption: 'Complex patterns made simple: Monthly recurrences like "First Monday of every month" use the same natural language approach, handling sophisticated scheduling patterns with clarity and precision.',
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Days.png',
                alt: 'Recurrence - Daily',
                caption: 'Daily patterns: Simple daily recurrences are just as clear — "Every day at 9 AM" instead of technical recurrence rules, making the most common scheduling pattern immediately accessible.',
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Validation Error.png',
                alt: 'Recurrence - Validation Error',
                caption: 'Validation and error handling: Clear error states guide users when recurrence settings are invalid, preventing scheduling mistakes and reducing support tickets.',
              },
              {
                src: '/images/case-study/ReportCaster/New SD - Recurrence - Once.png',
                alt: 'Recurrence - One-time',
                caption: 'One-time scheduling: Even simple "run once" schedules benefit from the redesigned interface, showing that the system handles both simple and complex patterns with the same clarity.',
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
        },
        {
                src: '/images/case-study/ReportCaster/Distribution List - Add new members.png',
                alt: 'Distribution List - Add new members',
                caption: 'Distribution List - Add new members: Creating new distribution list members follows the same unified modal pattern, making list management consistent with schedule creation.',
              },
              {
                src: '/images/case-study/ReportCaster/Distribution List - Edit Current List+Search built in.png',
                alt: 'Distribution List - Edit Current List',
                caption: 'Distribution List - Edit Current List: Editing and managing existing distribution lists with built-in search — showing how the unified interface handles both creation and management workflows.',
        },
        {
                src: '/images/case-study/ReportCaster/Distribution List - Populated List view.png',
                alt: 'Distribution List - Populated List view',
                caption: 'Distribution List - Populated List view: The final state showing a populated distribution list — demonstrating how the unified system makes list management clear and accessible.',
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
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Add new members.png',
                alt: 'Access List - Add new members',
                caption: 'Access List - Add new members: Creating new access list members follows the same unified modal pattern, making access management consistent with other RC workflows.',
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Add existing members - populated.png',
                alt: 'Access List - Add existing members',
                caption: 'Access List - Add existing members: Selecting existing members to add to an access list — showing how the unified interface handles member selection and management.',
              },
              {
                src: '/images/case-study/ReportCaster/Access List - Current List+context menu options.png',
                alt: 'Access List - Current List',
                caption: 'Access List - Current List: Managing existing access lists with context menu options — demonstrating how access control is now clear and accessible, replacing hidden legacy controls.',
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
              },
              {
                src: '/images/case-study/ReportCaster/RC Explorer - filter view for different types of RC assets.png',
                alt: 'RC Explorer - Filter view',
                caption: 'RC Explorer - Filter view: The filtered view pattern in action — showing how users can filter by different types of RC assets (schedules, distribution lists, access lists), demonstrating how this architectural approach scales across all asset types.',
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
        },
      ],
          },
        ],
      },
    },
    {
      id: 'section-06',
      index: '06',
      title: 'Aligning and Leading the Team',
      body: `After defining the architecture (V3), UX was done. Time for UI.

As I worked through hundreds of screens, the team assembled. But most had never seen RC end-to-end — engineers knew the backend, PMs knew features, support knew problems. No one understood the whole system.

I became the person who could explain it all. I onboarded lead architect, lead engineer, full engineering squad, new PM, QA, documentation, and SMEs.

I was also redesigning ML Functions simultaneously while having a 1 year old at home. This taught me to prioritize ruthlessly: architecture first, polish second. I learned to delegate — identifying what only I could do (UX architecture, team alignment) versus what could be handed off (UI polish).

The handoff was clean because the architecture was solid. The team could execute because they understood the "why" behind every decision, not just the "what."`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Team Alignment → Onboarded entire cross-functional team through dozens of demos',
        'Clear Communication → Translated complex legacy systems into understandable UX rationale',
        'Leading Without Title → Managed two Principal-level redesigns simultaneously',
      ],
    },
    {
      id: 'section-07',
      index: '07',
      title: 'Shipping Impact',
      body: `After aligning the team, we shipped. The system transformed from a fragmented, five-subsystem product into a unified, platform-native experience.

The transformation was visible immediately. Users who had spent years working around the system's limitations could now work with it. New users could understand RC in minutes, not hours. Support tickets shifted from "how do I..." to "can I do..." — a fundamental shift from confusion to capability.

The architecture I designed allowed the PM to add new features after launch without breaking the mental model. I had designed for extensibility, not just for the current release.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Long-Term Thinking → Designed for extensibility — architecture allowed new features post-launch',
        'Measurable Impact → New users understood RC in minutes, reduced complexity eliminated common support pain points',
        'Architectural Transformation → Unified five subsystems into one coherent system',
      ],
      beforeAfter: {
        before: {
          src: '/images/case-study/ReportCaster/Before.png',
          alt: 'Before: Legacy RC interface',
          caption: 'Before: Legacy RC interface — fragmented, multi-tab workflow requiring 4–6 clicks to create a schedule, with five independent subsystems and no unified mental model.',
        },
        after: {
          src: '/images/case-study/ReportCaster/After.png',
          alt: 'After: New RC interface',
          caption: 'After: New RC interface — unified, modal-based workflow requiring 1 click to create a schedule, with Explorer 1 click away and all subsystems unified into one coherent system.',
        },
        beforeLabel: 'Before',
        afterLabel: 'After',
      },
    },
    {
      id: 'section-08',
      index: '08',
      title: 'What This Project Made Me & The Takeaway',
      body: `This was not just a redesign — it was a complete architectural transformation of a 40-year-old system that had become too complex for anyone to understand.

I reverse-engineered an undocumented enterprise system, thought at platform scale, and led cross-functional teams through ambiguity. I became the only person in a 200-person business unit who understood RC end-to-end. RC didn't intimidate me. It made me sharper, more patient, more structured, more strategic.

The key insight: You don't need to rebuild everything from scratch. Understand the system deeply enough to identify the core mental model, then rebuild the architecture around that clarity. Legacy systems can be modernized without losing their power — you just need to make the complexity visible, then structure it.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Growth Through Challenge → RC reshaped how I think, teaching me to design at platform scale',
        'Thriving in Complexity → Managed two major redesigns simultaneously while having a 1 year old at home',
        'Systems-Level Impact → My value is in clarity, direction, and systems-level problem-solving',
      ],
    },
  ],
  // ----------------------------
  // PROTOTYPE (placeholder URLs)
  // ----------------------------
  prototypeMedia: {
    title: 'Experience the final schedule flow',
    description:
      'Watch the walkthrough to see how the modal-based schedule flow simplifies complex scheduling tasks and delivers the improved user experience.',
    videoUrl: '/videos/rc-prototype-walkthrough.mp4',
    videoPoster: '/images/case-study/ReportCaster/rc-prototype-poster.jpg',
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
  // PASSWORD GATE
  // ----------------------------
  passwordGate: {
    password: 'access',
    description:
      'To view the full case study (IA, workflows, alternatives, V1/V2/V3 files, and detailed rationale), enter the password below.',
    learnItems: [
      'How I reverse-engineered a 40-year-old undocumented system',
      'Three architectural approaches and why V3 won',
      'Complete workflow diagrams and information architecture',
      'Design alternatives, constraints, and decision rationale',
      'Behind-the-scenes notes and team alignment process',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY (Now combined with Section 08)
  // ----------------------------
  finalSummary: undefined,
}
