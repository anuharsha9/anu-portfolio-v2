'use client'

import { motion } from 'framer-motion'

interface LearningAndTransformationProps {
  isLightBackground?: boolean
}

// SVG Icon Components
const BrainCircuitIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
)

const ScaleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function LearningAndTransformation({ isLightBackground = true }: LearningAndTransformationProps) {
  const learnings = [
    { 
      category: 'SYSTEMS_THINKING', 
      Icon: BrainCircuitIcon,
      items: [
        "Think in platform patterns — establishing patterns that could scale across the entire platform", 
        "Redesign at architecture scale — understanding that RC wasn't a feature, it was a product inside a product", 
        'Interpret undocumented logic — mapping 50 years of accumulated complexity'
      ] 
    },
    { 
      category: 'CONSTRAINT_MGMT', 
      Icon: ScaleIcon,
      items: [
        'Balance constraints rationally — V1 rejected for strategy, V2 rejected for resourcing, V3 succeeded by working within constraints', 
        'Make decisions at Staff/Principal level — proposing three architectural directions and landing on a solution that balanced everything'
      ] 
    },
    { 
      category: 'COLLABORATION', 
      Icon: UsersIcon,
      items: [
        'Collaborate with deeply technical engineers — learning from domain expertise while translating it into UX', 
        'Communicate clearly — explaining complex systems to engineers, PMs, QA, and leadership'
      ] 
    },
    { 
      category: 'STRATEGIC_DESIGN', 
      Icon: TargetIcon,
      items: [
        'Design for long-term extensibility — creating an experience where more could fit without restricting anything', 
        'Understand customer realities — seeing how customers hacked their way around broken UI, then designing a system that worked with them', 
        'Own outcomes end-to-end — from reverse-engineering to architecture to team alignment to shipping'
      ] 
    },
  ]

  const moments = [
    { 
      moment: 'The moment I realized RC was five subsystems, not one', 
      insight: "This wasn't just observation — it was a fundamental reframing that changed everything." 
    },
    { 
      moment: 'The moment my director loved the Explorer-as-filtered-view idea', 
      insight: "That's when I understood the difference between solving a problem and establishing a pattern." 
    },
    { 
      moment: 'The moment a long-time customer praised my work', 
      insight: "That's when I understood that clarity isn't just nice-to-have — it's capability." 
    },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] p-8 md:p-12 shadow-sm">
      <div className="space-y-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            // GROWTH_LOG
          </span>
          <h3 className="text-[var(--text-heading)] text-xl md:text-2xl font-serif">
            What This Project Made Me
          </h3>
          <p className="text-[var(--text-body)] text-sm md:text-base max-w-2xl mx-auto">
            Through RC, I learned to think at platform scale, interpret undocumented systems, and balance constraints with clarity.
          </p>
        </motion.div>

        {/* Skill Matrix - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learnings.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl border border-[var(--border-primary)] p-5 hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[var(--accent-teal)]">
                  <l.Icon />
                </div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-[var(--accent-teal)]">
                  {l.category}
                </h4>
              </div>
              
              {/* Items List */}
              <ul className="space-y-2">
                {l.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[var(--border-secondary)] font-mono text-xs mt-0.5 flex-shrink-0">→</span>
                    <span className="text-[var(--text-body)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key Transformation Moments - Vertical Timeline */}
        <div className="space-y-6 pt-8 border-t border-[var(--border-primary)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
              // TRANSFORMATION_TIMELINE
            </span>
            <h4 className="text-[var(--text-heading)] text-lg font-serif mt-2">
              Key Transformation Moments
            </h4>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative pl-8 md:pl-12">
            {/* Vertical Line */}
            <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-[var(--border-primary)]"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {moments.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="relative"
                >
                  {/* Node */}
                  <div 
                    className="absolute -left-8 md:-left-12 w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-mono text-xs md:text-sm font-bold bg-[var(--accent-teal)] border-4 border-[var(--bg-secondary)]"
                    style={{ top: '0' }}
                  >
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div className="pl-4 md:pl-6">
                    <h5 className="text-[var(--text-heading)] text-base md:text-lg font-serif leading-snug">
                      {m.moment}
                    </h5>
                    <p className="text-[var(--text-muted)] text-sm italic mt-1 leading-relaxed">
                      {m.insight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline End Marker */}
            <div className="absolute left-3 md:left-5 bottom-0 w-px h-4 bg-gradient-to-b from-[var(--border-primary)] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
