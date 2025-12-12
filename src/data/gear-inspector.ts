/**
 * Gear Inspector Data - Maps each gear to actual case study content
 * "This is how my brain processes complexity"
 */

export interface GearInspectorItem {
  id: string
  thought: string // The quick thought (current behavior)
  title: string // Section/insight title
  insight: string // Key takeaway
  image?: string // Mini preview image
  link: string // Where to dive deeper
  linkLabel: string
  accentColor: string // Teal, amber, violet, etc.
  caseStudy?: 'reportcaster' | 'ml-functions' | 'iq-plugin' | 'me'
}

export const GEAR_INSPECTOR: Record<string, GearInspectorItem> = {
  "gear-scattered-workflows": {
    id: "gear-scattered-workflows",
    thought: "These workflows are scattered; I need to organize them into clarity.",
    title: "Workflow Simplification",
    insight: "Transformed a 12-step ML process into a guided 4-step wizard. Dead-ends → clear guidance.",
    image: "/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png",
    link: "/work/ml-functions#section-03",
    linkLabel: "See the ML Wizard",
    accentColor: "#0BA2B5",
    caseStudy: "ml-functions"
  },

  "gear-legacy-systems": {
    id: "gear-legacy-systems",
    thought: "Decades of complex enterprise code, I need to find the pattern and make this usable.",
    title: "50yr Legacy → Modern",
    insight: "Modernized a scheduling system powering 20M+ weekly schedules without disrupting existing users.",
    image: "/images/case-study/ReportCaster/ReportCaster Explorer.png",
    link: "/work/reportcaster#section-01",
    linkLabel: "See the Transformation",
    accentColor: "#F59E0B",
    caseStudy: "reportcaster"
  },

  "gear-hidden-features": {
    id: "gear-hidden-features",
    thought: "These features are hidden; I need to make them discoverable!",
    title: "Discoverability Design",
    insight: "Created a unified DSML Hub that puts 3 powerful tools one click away—previously buried in menus.",
    image: "/images/case-study/iq-plugin/Final Look.png",
    link: "/work/iq-plugin#section-01",
    linkLabel: "See the Hub",
    accentColor: "#8B5CF6",
    caseStudy: "iq-plugin"
  },

  "gear-fragmented-ui": {
    id: "gear-fragmented-ui",
    thought: "This UI is so fragmented, I have to find a way to unify it.",
    title: "System Unification",
    insight: "Integrated 5 scattered legacy subsystems into a single, coherent experience. Simplified entry paths.",
    image: "/images/case-study/ReportCaster/After.png",
    link: "/work/reportcaster#section-04",
    linkLabel: "See the Integration",
    accentColor: "#F59E0B",
    caseStudy: "reportcaster"
  },

  "gear-missing-briefs": {
    id: "gear-missing-briefs",
    thought: "No brief? I thrive here. Turning ambiguity into clarity is my superpower.",
    title: "Self-Directed Learning",
    insight: "Took an MIT course and reverse-engineered an ML system I knew nothing about.",
    image: "/images/case-study/ml-functions/entire ML workflow flowchart.png",
    link: "/work/ml-functions#section-02",
    linkLabel: "See My Process",
    accentColor: "#0BA2B5",
    caseStudy: "ml-functions"
  },

  "gear-conflicting-teams": {
    id: "gear-conflicting-teams",
    thought: "Too many conflicts; let me figure out a way to get them aligned.",
    title: "Cross-Team Alignment",
    insight: "Brought engineers, data scientists, and PMs together through shared prototypes and early validation.",
    image: "/images/case-study/ml-functions/8. Train Model Workflow - Compare Models.png",
    link: "/work/ml-functions#section-05",
    linkLabel: "See the Collaboration",
    accentColor: "#0BA2B5",
    caseStudy: "ml-functions"
  },

  "gear-shifting-priorities": {
    id: "gear-shifting-priorities",
    thought: "I need to adjust my plans with these shifting priorities.",
    title: "Adaptive Design",
    insight: "Pivoted designs 3 times based on engineering constraints. Each pivot made the solution stronger.",
    image: "/images/case-study/ReportCaster/After.png",
    link: "/work/reportcaster#section-04",
    linkLabel: "See the Pivots",
    accentColor: "#F59E0B",
    caseStudy: "reportcaster"
  },

  "gear-motherhood": {
    id: "gear-motherhood",
    thought: "Excellence doesn't require sacrificing what matters most.",
    title: "User Empathy",
    insight: "Designed for overwhelmed enterprise users who need clarity, not complexity. Every click saved is time back in their day.",
    image: "/images/case-study/ReportCaster/ReportCaster Explorer.png",
    link: "/work/reportcaster#section-03",
    linkLabel: "See the Simplification",
    accentColor: "#F59E0B",
    caseStudy: "reportcaster"
  },

  "gear-career-ambition": {
    id: "gear-career-ambition",
    thought: "How are my career ambitions going to play out—I need to pave a path forward.",
    title: "Design System Thinking",
    insight: "Built reusable patterns across 3 major products. Consistency at scale, not just screens.",
    image: "/images/case-study/iq-plugin/Final Look.png",
    link: "/work/iq-plugin#section-03",
    linkLabel: "See the System",
    accentColor: "#8B5CF6",
    caseStudy: "iq-plugin"
  },

  "gear-life": {
    id: "gear-life",
    thought: "Career, future, family… it's a lot, but it's my life, and I love every bit of it.",
    title: "Meet the Human",
    insight: "Designer. Mother. Mentor. I bring all of these perspectives to every problem I solve.",
    link: "/me",
    linkLabel: "Get to Know Me",
    accentColor: "#0BA2B5",
    caseStudy: "me"
  }
}

// Helper to get gear data by ID
export function getGearData(gearId: string): GearInspectorItem | null {
  return GEAR_INSPECTOR[gearId] || null
}

