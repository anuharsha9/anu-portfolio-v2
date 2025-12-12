'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MotionSection from '@/components/ui/MotionSection'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { recommendations } from '@/data/home'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: THE INVITATION
          Video-first. Personal. "53 seconds. That's all I ask."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection id="profile" className="bg-slate-900 py-20 md:py-28 lg:py-36 relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >
            {/* Pre-headline */}
            <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
              // MEET_ANUJA
            </span>

            {/* Main headline */}
            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
              53 seconds.<br />
              <span className="text-slate-400">That&apos;s all I ask.</span>
            </h1>

            {/* Video - THE HERO */}
            <div className="max-w-lg mx-auto">
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="font-mono text-slate-500 text-xs">
                      meet_anuja.mp4
                    </span>
                  </div>
                  <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest">
                    [PERSONAL_INTRO]
                  </span>
                </div>

                {/* Video */}
                <CustomVideoPlayer
                  src="/videos/intro-video.mp4"
                  className="w-full"
                />
              </div>
            </div>

            {/* Post-video hook */}
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I&apos;m a Principal Product Designer who builds, not just designs.<br />
              <span className="text-white font-medium">This portfolio is my proof.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/#work-overview"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal-700)] transition-all hover:scale-105 shadow-lg"
              >
                <span>See the Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <a
                href="mailto:anujanimmagadda@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-white font-medium hover:border-slate-400 hover:bg-slate-800/50 transition-all"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Personal Signature */}
            <motion.div
              className="pt-12 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="w-14 h-14 text-slate-500 hover:text-[var(--accent-teal)] transition-colors duration-500">
                <AnimatedSignatureLogo
                  className="w-full h-full"
                  duration={10000}
                  pauseDuration={5000}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: THE PROOF
          "You're looking at it. Built in 2 weeks. Zero React background."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-white py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left - The Story */}
            <div className="space-y-6">
              <span className="font-mono text-purple-600 text-xs uppercase tracking-widest">
                // PROOF_OF_CONCEPT
              </span>

              <h2 className="font-serif text-slate-900 text-3xl md:text-4xl leading-tight">
                You&apos;re looking at it.
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I built this entire portfolio in <span className="font-semibold text-slate-900">2 weeks</span>.
                  Not because I knew React—I didn&apos;t.
                  Because I know how to <span className="font-semibold text-slate-900">orchestrate AI</span>.
                </p>
                <p>
                  This is my operating system. It&apos;s exactly how I tackled WebFOCUS and ML Functions:
                  I didn&apos;t have the domain expertise, so I adapted. I reverse-engineered the problem,
                  learned the tools, and delivered value while others were still planning.
                </p>
              </div>

              {/* The Timeline */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-purple-600 text-xs uppercase tracking-widest">
                    The Sprint
                  </span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-mono text-2xl font-bold text-slate-900">Day 1</div>
                    <div className="text-xs text-slate-500 mt-1">Zero React</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-purple-600">Day 7</div>
                    <div className="text-xs text-slate-500 mt-1">First Deploy</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-[var(--accent-teal)]">Day 14</div>
                    <div className="text-xs text-slate-500 mt-1">Production</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - The Stack */}
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-white">
                <span className="font-mono text-purple-400 text-xs uppercase tracking-widest block mb-6">
                  // AI_ORCHESTRATION_STACK
                </span>

                <div className="space-y-4">
                  {[
                    { tool: 'Cursor AI', role: 'IDE + AI Pair Programming', highlight: true },
                    { tool: 'Claude / GPT / Gemini', role: 'Design Partner & Code Generator', highlight: true },
                    { tool: 'Prompt Engineering', role: 'The Skill That Makes It Work', highlight: true },
                    { tool: 'Next.js + Tailwind', role: 'Framework (AI-Assisted)', highlight: false },
                    { tool: 'AWS S3 + CloudFront', role: 'Deployment', highlight: false },
                  ].map((item, index) => (
                    <div
                      key={item.tool}
                      className={`flex items-center justify-between py-3 ${index < 4 ? 'border-b border-slate-800' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        {item.highlight && (
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        )}
                        <span className={item.highlight ? 'text-white font-medium' : 'text-slate-400'}>
                          {item.tool}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-slate-500">
                        {item.role}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    I don&apos;t write code. I <span className="text-purple-400 font-medium">orchestrate AI</span> to build it.
                    The biggest gain? <span className="text-white font-medium">Engineering empathy</span>—I now feel the build cost of every pixel I design.
                  </p>
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/anuharsha9/anu-portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-slate-700 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: THE TRANSFORMATION
          "WebFOCUS transformed me."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-slate-50 py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-8">
            <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
              // THE_ORIGIN_STORY
            </span>

            <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
              WebFOCUS transformed me.
            </h2>

            <div className="max-w-2xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                When I joined, I was out of my depth. Legacy systems. Data science. Machine learning.
                Enterprise scale. My first instinct was <span className="font-semibold text-slate-900">radical curiosity</span>.
              </p>
              <p>
                I talked to everyone. Learned obsessively. Earned trust in the process.
                That earned me a seat at the table—where my voice and opinion mattered.
              </p>
            </div>

            {/* Mentor Quote - Featured */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] text-xs font-mono uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  My Mentor
                </span>
              </div>

              <blockquote className="font-serif text-slate-900 text-xl md:text-2xl leading-relaxed mb-6">
                &ldquo;She approaches her work with a fearless attitude and is never afraid to explore new ideas or directions. Anuja is willing to take on difficult problems and push for creative solutions, even under tight timelines.&rdquo;
              </blockquote>

              <div className="text-center">
                <p className="font-semibold text-slate-900">Dave Pfeiffer</p>
                <p className="text-sm text-[var(--accent-teal)]">Director of Design, Cloud Software Group</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed pt-4">
              <p>
                Through daily mentorship, I learned how to lead, to present, and carry myself with confidence.
                He saw something in me I didn&apos;t realize I had. He called me a <span className="font-semibold text-slate-900">UX leader</span> before I realized I was one.
              </p>
              <p>
                That transformation is why I mentor others. The growth I experienced—I want everyone to experience it.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: HOW I THINK (D.E.S.I.G.N. - Minimal Version)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-white py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-6">
            <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
              // HOW_I_THINK
            </span>
            <h2 className="font-serif text-slate-900 text-2xl md:text-3xl leading-tight">
              The D.E.S.I.G.N. Framework
            </h2>

            {/* Minimal 6-word display */}
            <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 pt-4">
              {[
                { letter: 'D', title: 'Discover' },
                { letter: 'E', title: 'Empathize' },
                { letter: 'S', title: 'Simplify' },
                { letter: 'I', title: 'Iterate' },
                { letter: 'G', title: 'Grow' },
                { letter: 'N', title: 'Navigate' },
              ].map((item) => (
                <div key={item.letter} className="text-center group">
                  <div className="font-serif text-2xl md:text-3xl text-[var(--accent-teal)] group-hover:scale-110 transition-transform">
                    {item.letter}
                  </div>
                  <div className="font-medium text-slate-700 text-xs md:text-sm mt-1">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5: SOCIAL PROOF (Curated 6)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection id="social-proof" className="bg-slate-950 py-20 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
                // TRUST_NETWORK
              </span>
              <h2 className="font-serif text-white text-3xl md:text-4xl leading-tight">
                Voices from the Trenches
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Engineers, PMs, data scientists, and leaders I&apos;ve partnered with.
              </p>
            </div>

            {/* Featured - Origin Story (Vikram Patel) */}
            <div>
              {recommendations.filter(r => r.source === 'origin').map((review) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all">
                    <div className="absolute top-6 right-8 text-purple-500/10 text-6xl font-serif leading-none hidden md:block">&ldquo;</div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        My First Boss — Where It All Started
                      </span>
                    </div>

                    <blockquote className="font-serif text-white text-lg md:text-xl leading-relaxed mb-4 relative z-10">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-start justify-between gap-4 pt-4 border-t border-slate-800">
                      <div>
                        <p className="font-semibold text-white">{review.name}</p>
                        <p className="font-mono text-purple-400 text-sm">{review.role}</p>
                        <p className="text-slate-500 text-xs mt-1">{review.company}</p>
                      </div>
                      <div className="text-right max-w-[200px] hidden md:block">
                        <p className="text-slate-500 text-xs leading-relaxed italic">
                          {review.relationship}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Curated 5 Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {recommendations
                .filter(r => ['Marcus Horbach, Ph.D.', 'Vijay Raman', 'Yingchun Chen', 'Karishma Khadge', 'Anita George'].includes(r.name))
                .map((review, index) => {
                  const isDataScience = review.role.toLowerCase().includes('data') || review.role.toLowerCase().includes('scientist')
                  const isEngineering = review.role.toLowerCase().includes('engineer') || review.role.toLowerCase().includes('software')
                  const isProduct = review.role.toLowerCase().includes('product')
                  const isCustomer = review.role.toLowerCase().includes('account') || review.role.toLowerCase().includes('strategist')

                  const accentColor = isDataScience ? 'purple' : isEngineering ? 'teal' : isProduct ? 'amber' : isCustomer ? 'emerald' : 'slate'
                  const colorClasses = {
                    purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400', glow: 'from-purple-500/10' },
                    teal: { border: 'hover:border-[var(--accent-teal)]/50', text: 'text-[var(--accent-teal)]', glow: 'from-[var(--accent-teal)]/10' },
                    amber: { border: 'hover:border-amber-500/50', text: 'text-amber-400', glow: 'from-amber-500/10' },
                    emerald: { border: 'hover:border-emerald-500/50', text: 'text-emerald-400', glow: 'from-emerald-500/10' },
                    slate: { border: 'hover:border-slate-500/50', text: 'text-slate-400', glow: 'from-slate-500/10' },
                  }
                  const colors = colorClasses[accentColor as keyof typeof colorClasses]

                  return (
                    <motion.div
                      key={review.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-5 ${colors.border} transition-all h-full flex flex-col`}>

                        <div className="mb-3">
                          <span className={`font-mono ${colors.text} text-xs uppercase tracking-widest`}>
                            {review.role}
                          </span>
                        </div>

                        <blockquote className="font-serif text-slate-200 text-sm leading-relaxed mb-4 flex-grow">
                          &ldquo;{review.quote}&rdquo;
                        </blockquote>

                        <div className="pt-3 border-t border-slate-800/50">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-white text-sm">{review.name}</p>
                            <p className="text-slate-600 text-xs">{review.company}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/anu159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-[var(--accent-teal)] transition-colors font-medium text-sm"
              >
                <span>More on LinkedIn</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://adplist.org/mentors/anuja-harsha-nimmagadda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-[var(--accent-teal)] transition-colors font-medium text-sm"
              >
                <span>ADPList Reviews</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6: THE HUMAN (Compact)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-slate-50 py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Left - Context */}
            <div className="lg:col-span-1 space-y-4">
              <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
                // PARALLEL_PROCESSES
              </span>
              <h2 className="font-serif text-slate-900 text-2xl md:text-3xl leading-tight">
                Life Outside the Terminal
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Parent of two — a 4-year-old boy and 1-year-old girl — with the most supportive husband.
                Motherhood shapes my discipline, resilience, and systems thinking more than anything else.
              </p>
            </div>

            {/* Right - Hobbies Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'PAINTING', title: 'Painting', image: '/assets/painting.jpg' },
                { id: 'BAKING', title: 'Baking', image: '/assets/baking.jpg' },
                { id: 'COOKING', title: 'Cooking', image: '/assets/cooking.jpg' },
                { id: 'POETRY', title: 'Poetry', image: '/assets/poetry.jpg' },
              ].map((hobby) => (
                <div
                  key={hobby.id}
                  className="group relative aspect-square rounded-xl overflow-hidden"
                >
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="font-mono text-[10px] text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      {hobby.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7: CONTACT (Simplified)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="font-serif text-slate-900 text-xl md:text-2xl">
            Let&apos;s connect.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-sm md:text-base">
            <a href="mailto:anujanimmagadda@gmail.com" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors">
              anujanimmagadda@gmail.com
            </a>
            <span className="text-slate-400">·</span>
            <a href="https://www.linkedin.com/in/anu159" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors">
              LinkedIn
            </a>
            <span className="text-slate-400">·</span>
            <a href="tel:+17813547394" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors">
              +1 781-354-7394
            </a>
          </div>

          <p className="text-slate-400 text-xs pt-4">
            Designed in Figma. Built with Cursor + AI. © 2025
          </p>
        </div>
      </MotionSection>
    </main>
  )
}
