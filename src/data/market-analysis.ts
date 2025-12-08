// Unified Market Analysis Data for all 3 case studies

export const reportCasterMarketAnalysis = {
  sectionTag: 'COMPETITIVE_LANDSCAPE',
  title: 'Market Position Analysis',
  subtitle: 'Comparing ReportCaster against enterprise scheduling competitors to identify differentiation opportunities.',
  displayMode: 'cards' as const,
  accentColor: 'amber' as const,
  competitors: [
    {
      name: 'Microsoft Power Automate',
      tag: 'STATUS: CONSUMER_FOCUSED',
      headline: 'Easy but Limited',
      painPoints: [
        'Easy to use for basic workflow automation',
        'Wide integration options with various platforms',
        'Limited customization for complex workflows',
        'May not meet needs of advanced users',
      ],
    },
    {
      name: 'Tableau Scheduler',
      tag: 'STATUS: DASHBOARD_CENTRIC',
      headline: 'Visual but Constrained',
      painPoints: [
        'Specializes in dashboard automation',
        'Excellent for visual analytics tasks',
        'Performance issues with large datasets',
        'Limited functionality outside of dashboards',
      ],
    },
    {
      name: 'Qlik NPrinting',
      tag: 'STATUS: HIGH_COMPLEXITY',
      headline: 'Powerful but Overwhelming',
      painPoints: [
        'Advanced scheduling for complex needs',
        'Highly customizable to fit specific requirements',
        'Too complex for non-technical users',
        'Requires steep learning curve to master',
      ],
    },
  ],
  ourSolution: {
    name: 'ReportCaster (Redesign)',
    tag: 'STRATEGY: UNIFIED_SIMPLICITY',
    headline: 'Enterprise Power, Consumer Simplicity.',
    body: 'We unified 5 disparate tools into one cohesive workflow. Same advanced capabilities, but accessible to both BI Developers and Reporting Gurus.',
    differentiators: [
      'Serves wide range of users without bias',
      'Simplifies workflows for new and experienced users',
      'Guided processes reduce learning curve',
      'Robust features with minimal disruption',
    ],
  },
  insight: {
    tag: '// MARKET_OPPORTUNITY',
    title: 'THE USABILITY GAP',
    body: 'Competitors forced a choice: power OR simplicity. ReportCaster proves you can have both—enterprise-grade scheduling with consumer-grade usability.',
  },
}

export const mlFunctionsMarketAnalysis = {
  sectionTag: 'COMPETITIVE_ANALYSIS',
  title: 'Feature Comparison Matrix',
  subtitle: 'Mapping the competitive landscape to find our differentiation opportunity.',
  displayMode: 'matrix' as const,
  accentColor: 'teal' as const,
  featureColumns: [
    { key: 'guidedFlow', label: 'Guided Flow?' },
    { key: 'integrated', label: 'Integrated?' },
    { key: 'noCode', label: 'No-Code?' },
  ],
  competitors: [
    {
      name: 'Power BI',
      features: { guidedFlow: false, integrated: true, noCode: false },
      note: 'Deep Azure ML integration, but requires technical expertise',
    },
    {
      name: 'Tableau',
      features: { guidedFlow: false, integrated: false, noCode: false },
      note: 'Python/R integrations, script-first approach',
    },
    {
      name: 'Qlik Sense',
      features: { guidedFlow: false, integrated: true, noCode: false },
      note: 'Powerful analytics, steep learning curve',
    },
  ],
  ourSolution: {
    name: 'WebFOCUS ML (New)',
    tag: 'OUR_SOLUTION',
    headline: 'Guided, Integrated, No-Code.',
    features: { guidedFlow: true, integrated: true, noCode: true },
    note: 'Guided 4-step flow, no coding required',
    differentiators: [
      'Guided 4-step workflow',
      'Native platform integration',
      'Zero coding required',
    ],
  },
  insight: {
    tag: '// OPPORTUNITY: THE_ACCESSIBILITY_GAP',
    body: 'Every competitor had powerful ML capabilities, but none made them accessible to non-technical users. Our differentiation: guided workflows that don\'t require coding or ML expertise.',
  },
}

export const iqPluginMarketAnalysis = {
  sectionTag: 'MARKET_INTELLIGENCE',
  title: 'The Market Gap Analysis',
  subtitle: 'Competitors were forcing users to choose between "Technical Depth" and "Ease of Use." We identified a third lane.',
  displayMode: 'cards' as const,
  accentColor: 'violet' as const,
  competitors: [
    {
      name: 'Power BI',
      tag: 'STATUS: HIGH_FRICTION',
      headline: 'Deep but Daunting',
      painPoints: [
        'Azure ML requires technical expertise',
        'Configuration complexity deters business users',
        'Learning curve measured in weeks',
      ],
    },
    {
      name: 'Tableau',
      tag: 'STATUS: HIGH_FRICTION',
      headline: 'Powerful but Scripted',
      painPoints: [
        'Python/R integrations require coding',
        'Business analysts locked out of ML features',
        'High barrier to entry for non-programmers',
      ],
    },
    {
      name: 'Qlik',
      tag: 'STATUS: USABILITY_DEBT',
      headline: 'Feature-Rich but Frustrating',
      painPoints: [
        'Predictive capabilities buried in menus',
        'Inconsistent UX across features',
        'Users abandon before finding value',
      ],
    },
  ],
  ourSolution: {
    name: 'DSML Hub',
    tag: 'STRATEGY: GUIDED_COMPLEXITY',
    headline: 'The Third Lane.',
    body: 'While competitors optimized for "Technical Depth," we optimized for "Guidance." We didn\'t lower the ceiling; we raised the floor.',
    differentiators: [
      'Progressive disclosure for all skill levels',
      'Same power, better pathways',
      'Business users self-serve; experts accelerate',
    ],
  },
  insight: {
    tag: '// STRATEGIC_POSITION',
    body: 'IQ\'s positioning: Feature-rich like the leaders (Power BI, Tableau), but significantly more approachable for non-technical users. We match the depth while being easier to adopt than Qlik.',
  },
}

