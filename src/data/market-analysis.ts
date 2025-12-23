// Unified Market Analysis Data for all 3 case studies

export const reportCasterMarketAnalysis = {
  sectionTag: 'COMPETITIVE_ANALYSIS',
  title: 'Feature Comparison Matrix',
  subtitle: 'Comparing ReportCaster against enterprise scheduling competitors to identify differentiation opportunities.',
  displayMode: 'matrix' as const,
  accentColor: 'amber' as const,
  featureColumns: [
    { key: 'consumerEase', label: 'Consumer Ease?' },
    { key: 'deepCustomization', label: 'Deep Customization?' },
    { key: 'visualBuilder', label: 'Visual Builder?' },
  ],
  competitors: [
    {
      name: 'Power Automate',
      features: { consumerEase: true, deepCustomization: false, visualBuilder: true },
      note: 'Easy for basic tasks, but limited for complex enterprise needs.',
    },
    {
      name: 'Tableau',
      features: { consumerEase: true, deepCustomization: false, visualBuilder: false },
      note: 'Good for dashboards, but rigid scheduling options.',
    },
    {
      name: 'Qlik NPrinting',
      features: { consumerEase: false, deepCustomization: true, visualBuilder: false },
      note: 'Powerful engine, but requires steep technical learning curve.',
    },
  ],
  ourSolution: {
    name: 'ReportCaster (Redesign)',
    tag: 'STRATEGY: UNIFIED_SIMPLICITY',
    headline: 'Power Meets Simplicity.',
    features: { consumerEase: true, deepCustomization: true, visualBuilder: true },
    note: 'Enterprise-grade scheduling with consumer-grade usability.',
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
  sectionTag: 'COMPETITIVE_ANALYSIS',
  title: 'Feature Comparison Matrix',
  subtitle: 'Competitors were forcing users to choose between "Technical Depth" and "Ease of Use." We identified a third lane.',
  displayMode: 'matrix' as const,
  accentColor: 'violet' as const,
  featureColumns: [
    { key: 'guidedUx', label: 'Guided UX?' },
    { key: 'noCode', label: 'No-Code?' },
    { key: 'platformNative', label: 'Platform Native?' },
  ],
  competitors: [
    {
      name: 'Power BI',
      features: { guidedUx: false, noCode: false, platformNative: true },
      note: 'Deep but daunting. Azure ML requires expertise.',
    },
    {
      name: 'Tableau',
      features: { guidedUx: false, noCode: false, platformNative: false },
      note: 'Powerful but scripted. External Python/R needed.',
    },
    {
      name: 'Qlik',
      features: { guidedUx: false, noCode: false, platformNative: true },
      note: 'Feature-rich but frustrating. Buried in menus.',
    },
  ],
  ourSolution: {
    name: 'WebFOCUS DSML',
    tag: 'STRATEGY: GUIDED_COMPLEXITY',
    headline: 'The Third Lane.',
    features: { guidedUx: true, noCode: true, platformNative: true },
    note: 'Feature-rich like leaders, approachable for beginners.',
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

