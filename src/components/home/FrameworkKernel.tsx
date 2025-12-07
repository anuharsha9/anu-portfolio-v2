'use client'

import { motion } from 'framer-motion'

interface FrameworkModule {
  file: string
  title: string
  description: string
  code: string
}

const modules: FrameworkModule[] = [
  {
    file: '01_discover.ts',
    title: 'Discover Deeply',
    description: 'Before designing, I map the territory. Stakeholder interviews, competitive analysis, technical constraints. Understanding context prevents costly pivots.',
    code: 'if (context === unknown) return error;',
  },
  {
    file: '02_empathize.ts',
    title: 'Empathize with Engineering',
    description: 'I speak both languages. Design decisions account for technical debt, API limitations, and sprint realities. My specs ship because they\'re buildable.',
    code: "import { Constraints } from 'engineering';",
  },
  {
    file: '03_simplify.ts',
    title: 'Simplify the Chaos',
    description: 'Complex systems deserve simple interfaces. I reduce cognitive load without dumbing down functionality. Clarity is the feature.',
    code: 'const clarity = reduce(noise);',
  },
  {
    file: '04_iterate.ts',
    title: 'Iterate with Inclusion',
    description: 'Feedback loops with real users, not assumptions. I prototype, test, and refine until the design earns trust from everyone who touches it.',
    code: 'while (!stable) { feedback.loop(); }',
  },
  {
    file: '05_grow.ts',
    title: 'Grow Through Constraints',
    description: 'Limitations are creative fuel. Budget cuts, legacy dependencies, tight timelines—I turn blockers into better solutions.',
    code: 'function optimize(limit) { return creative_solution; }',
  },
  {
    file: '06_navigate.ts',
    title: 'Navigate to Production',
    description: 'Design doesn\'t end at handoff. I stay engaged through implementation, QA, and launch. The goal is shipped impact, not pretty mockups.',
    code: 'deploy(vision, production_reality);',
  },
]

export default function FrameworkKernel() {
  return (
    <section className="w-full bg-slate-950 py-16 md:py-24 text-slate-300 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-mono text-emerald-500 text-xs tracking-widest uppercase block mb-4">
            // OPERATING_SYSTEM: KERNEL_LOGIC
          </span>
          <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl mb-4">
            The Framework.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            My mental model for tackling complexity. Design decisions that survive engineering.
          </p>
        </motion.div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-slate-600 transition-all duration-300 group"
            >
              {/* File Tab */}
              <span className="font-mono text-blue-400 text-xs block mb-4">
                {module.file}
              </span>

              {/* Title */}
              <h3 className="font-serif text-white text-xl mb-3 group-hover:text-emerald-400 transition-colors">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {module.description}
              </p>

              {/* Code Block */}
              <div className="bg-slate-950/50 border border-slate-800/50 rounded-lg p-4 font-mono text-xs">
                <CodeLine code={module.code} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper component for syntax highlighting
function CodeLine({ code }: { code: string }) {
  // Simple syntax highlighting
  const highlighted = code
    // Keywords (purple)
    .replace(/\b(if|return|import|from|const|function|while|deploy)\b/g, '<span class="text-purple-400">$1</span>')
    // Strings (emerald)
    .replace(/'([^']*)'/g, '<span class="text-emerald-400">\'$1\'</span>')
    // Functions/methods (blue)
    .replace(/\b(reduce|loop|optimize)\b(?=\()/g, '<span class="text-blue-400">$1</span>')
    // Variables (white)
    .replace(/\b(context|unknown|error|Constraints|clarity|noise|stable|feedback|limit|creative_solution|vision|production_reality)\b/g, '<span class="text-slate-200">$1</span>')
    // Operators and punctuation (slate)
    .replace(/([{}();\[\]=])/g, '<span class="text-slate-500">$1</span>')

  return (
    <code
      className="text-slate-300"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  )
}
