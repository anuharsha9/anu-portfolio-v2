'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MotionSection from '@/components/ui/MotionSection'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import InsightBadge from '@/components/ui/InsightBadge'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { recommendations } from '@/data/home'

// D.E.S.I.G.N. Framework with Technical Reality code blocks
const frameworkItems = [
  {
    letter: 'D',
    title: 'Discover Deeply',
    mainText: "Before touching pixels, I listen. I parse the legacy code, interview QA, and map the invisible constraints.",
    codeLine1: 'if (context === unknown) return error;',
    codeLine2: "// I don't design until I map the system dependencies.",
  },
  {
    letter: 'E',
    title: 'Empathize with the Ecosystem',
    mainText: "I design for the builders. Every pixel must account for the PM's scope, the Engineer's debt, and the QA's test cases.",
    codeLine1: "import { Engineering_Constraints } from 'team';",
    codeLine2: '// A beautiful UI that breaks the backend is a failed design.',
  },
  {
    letter: 'S',
    title: 'Simplify the Chaos',
    mainText: 'Legacy systems are full of noise. I cluster data, identify patterns, and reduce entropy until the system creates clarity.',
    codeLine1: 'const complexity = reduce(noise);',
    codeLine2: '// I treat UI like data modeling: normalize the inputs.',
  },
  {
    letter: 'I',
    title: 'Iterate with Inclusion',
    mainText: "I don't design in a silo. I prototype early to fail fast, inviting engineers to break my designs before they build them.",
    codeLine1: 'while (!stable) { feedback.loop(); }',
    codeLine2: '// Code reviews for design. No surprises in the PR.',
  },
  {
    letter: 'G',
    title: 'Grow through Constraints',
    mainText: "Constraints aren't blockers—they are requirements. I use technical limits to sharpen the solution, not water it down.",
    codeLine1: 'function optimize(limit) { return creative_solution; }',
    codeLine2: '// The tightest constraints breed the cleanest systems.',
  },
  {
    letter: 'N',
    title: 'Navigate Forward',
    mainText: "Design never stops at handoff. I stay in the trenches during the build, adapting the vision as reality shifts.",
    codeLine1: 'deploy(vision, production_reality);',
    codeLine2: "// I ship alongside the team. The job ends at 'Live'.",
  },
]


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1 — THE PROFILE (AI-Native Architect) */}
      <MotionSection id="profile" className="bg-slate-50 py-16 md:py-24 lg:py-32 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 2-Column Grid: Text Left, Video Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Column - Editorial Text */}
              <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
                {/* Tag - Operating Model */}
                <span className="font-mono text-purple-600 text-xs tracking-widest uppercase">
                  // OPERATING_MODEL: AI_NATIVE_ARCHITECT
                </span>

                {/* Headline */}
                <h1 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Designing Systems.<br />
                  Orchestrating Code.
                </h1>

                {/* Subhead */}
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                  I am a Principal Product Designer who doesn&apos;t stop at Figma. I use AI and code to bridge the gap between <span className="font-semibold text-slate-900">&apos;Vision&apos;</span> and <span className="font-semibold text-slate-900">&apos;Shipping&apos;</span>.
                </p>

                {/* Context Block - The Adaptability Hook */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 rounded-r-lg text-left">
                  <h3 className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
                    Why I built this site in 2 weeks:
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    I built this entire portfolio from scratch using <span className="font-semibold text-slate-800">Cursor and AI</span>, despite having zero React background. <span className="font-semibold text-slate-800">This is my operating system.</span>
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-3">
                    It&apos;s exactly how I tackled WebFOCUS and ML Functions: I didn&apos;t have the domain expertise, so I <span className="font-semibold text-slate-800">adapted</span>. I reverse-engineered the problem, learned the tools, and delivered value while others were still planning.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-3">
                    If you need a leader who drives impact in ambiguous environments—<span className="font-semibold text-blue-600">watch this video.</span>
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">
                  <Link
                    href="/#work-overview"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0BA2B5] text-white font-medium hover:bg-[#0990A2] transition-colors shadow-sm"
                  >
                    <span>View the Work</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <a
                    href="mailto:anuja.harsha@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-white transition-all"
                  >
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Reach Out</span>
                  </a>
                </div>
              </div>

              {/* Right Column - Video Evidence */}
              <div className="order-1 lg:order-2">
                {/* Video Container - Glassmorphism Window */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                  {/* Window Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <span className="font-mono text-slate-400 text-xs">
                        intro_video.mp4
                      </span>
                    </div>
                    <span className="font-mono text-emerald-600 text-xs tracking-widest">
                      [VELOCITY: 2_WEEKS]
                    </span>
                  </div>

                  {/* Video Element */}
                  <CustomVideoPlayer
                    src="/videos/intro-video.mp4"
                    className="w-full"
                  />

                  {/* Video Footer */}
                  <div className="px-4 py-3 bg-slate-50/90 border-t border-slate-200/60">
                    <p className="font-mono text-slate-500 text-[10px] uppercase tracking-widest text-center">
                      // PROOF_OF_CONCEPT: FROM_ZERO_TO_PRODUCTION
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 2 — THE D.E.S.I.G.N. FRAMEWORK (Light Mode) */}
      <MotionSection id="design-framework" className="bg-white py-16 md:py-24 lg:py-32 border-y border-slate-200 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-4 justify-center">
                <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider">
                  02
                </span>
                <div className="h-px flex-1 bg-slate-200 max-w-xs"></div>
                <div className="h-px w-12 bg-[#0BA2B5]"></div>
              </div>
              <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                The D.E.S.I.G.N. Framework
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                My mental model for tackling complexity. Design decisions that survive engineering.
              </p>
            </div>

            {/* Framework Grid - 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworkItems.map((item, index) => {
                const fileNumber = String(index + 1).padStart(2, '0')
                const fileName = `${fileNumber}_${item.title.toLowerCase().replace(/\s+/g, '_')}.ts`

                return (
                  <motion.div
                    key={item.letter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 hover:border-[#0BA2B5]/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* File Tab */}
                    <span className="font-mono text-[#0BA2B5] text-xs block mb-4">
                      {fileName}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-slate-900 text-xl mb-3 group-hover:text-[#0BA2B5] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.mainText}
                    </p>

                    {/* Code Block - Keep dark for contrast */}
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs">
                      <code className="text-slate-300">
                        <span className="text-purple-400">{'> '}</span>
                        <span dangerouslySetInnerHTML={{
                          __html: item.codeLine1
                            .replace(/\b(if|return|import|from|const|function|while|deploy)\b/g, '<span class="text-purple-400">$1</span>')
                            .replace(/'([^']*)'/g, '<span class="text-emerald-400">\'$1\'</span>')
                        }} />
                      </code>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 3 — CAPABILITIES (Stack + Writing Combined) */}
      <MotionSection id="toolkit" className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* LEFT COLUMN: The Stack */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-widest block mb-2">
                    // CAPABILITIES: HYBRID_STACK
                  </span>
                  <h2 className="font-serif text-slate-900 text-2xl md:text-3xl mb-1">
                    13 Years Design. <span className="text-purple-600">30 Days AI.</span>
                  </h2>
                </div>

                {/* Compact Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Strategy */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-3">Strategy</span>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {['Systems Thinking', 'User Research', 'Stakeholder Alignment'].map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-slate-300 text-xs">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Design */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-3">Design</span>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {['Figma (Advanced)', 'Design Systems', 'Prototyping'].map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-slate-300 text-xs">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AI Orchestration - Hero Card */}
                <div className="bg-white border-2 border-purple-500 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      30 Days
                    </span>
                  </div>
                  
                  <span className="font-mono text-purple-600 text-[10px] uppercase tracking-widest block mb-3">
                    AI_ORCHESTRATION
                  </span>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                    {[
                      { name: 'Cursor AI', note: 'IDE' },
                      { name: 'Claude/GPT/Gemini', note: 'Pair' },
                      { name: 'AWS S3+CloudFront', note: 'Deploy' },
                      { name: 'Prompt Engineering', note: 'Skill' },
                    ].map(item => (
                      <div key={item.name} className="flex items-center justify-between">
                        <span className="text-slate-700">{item.name}</span>
                        <span className="text-slate-400 text-[10px] font-mono">{item.note}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-xs leading-relaxed border-t border-purple-100 pt-3">
                    I don&apos;t write code—I orchestrate AI to build it. The gain? <strong className="text-purple-600">Engineering Empathy</strong>.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: Writing */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-widest block mb-2">
                      // OUTPUT: PUBLISHED_THOUGHTS
                    </span>
                    <h2 className="font-serif text-slate-900 text-2xl md:text-3xl">
                      Design Writing
                    </h2>
                  </div>
                  <a
                    href="https://medium.com/@anu.anuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 hover:text-[#0BA2B5] transition-colors text-xs font-mono"
                  >
                    Medium
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Articles */}
                <div className="space-y-4">
                  {[
                    {
                      title: "The Secret Behind Better BI: Who's Your Business User?",
                      topic: 'UX_RESEARCH',
                      href: 'https://community.ibi.com/articles/the-secret-behind-better-bi-who-s-your-business-user-r44/',
                      excerpt: "Most BI tools are built for analysts—but the real opportunity is the business user who just needs answers. I break down how understanding this distinction changes everything about how you design data products.",
                      readTime: '5 min read'
                    },
                    {
                      title: 'Enhancing User Experience in WebFOCUS DSML',
                      topic: 'AI_ML_UX',
                      href: 'https://community.ibi.com/forums/topic/16161-enhancing-user-experience-in-webfocus-dsml/',
                      excerpt: "A deep dive into how we redesigned the ML workflow experience in WebFOCUS—from fragmented tools to a guided, step-based system that non-technical users can actually navigate.",
                      readTime: '8 min read'
                    },
                  ].map((article) => (
                    <a
                      key={article.title}
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white border border-slate-200 rounded-xl p-5 hover:border-[#0BA2B5]/40 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <span className="font-mono text-[9px] text-[#0BA2B5] uppercase tracking-wider">
                          {article.topic}
                        </span>
                        <span className="text-slate-400 text-[10px] font-mono">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-medium text-slate-900 group-hover:text-[#0BA2B5] transition-colors leading-snug mb-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#0BA2B5] text-xs font-medium group-hover:gap-2 transition-all">
                        Read article
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>

                {/* Mobile Medium Link */}
                <div className="sm:hidden">
                  <a
                    href="https://medium.com/@anu.anuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0BA2B5] font-medium text-sm"
                  >
                    View all on Medium
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 4 — SOCIAL PROOF (Wall of Trust) - DARK MODE */}
      <MotionSection id="social-proof" className="bg-slate-950 py-24 md:py-32 relative overflow-hidden">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-16"
          >
            {/* Section Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-widest">
                // TRUST_NETWORK
              </span>
              <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                Voices from the Trenches
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Engineers, PMs, data scientists, and leaders I&apos;ve partnered with.
              </p>
            </div>

            {/* Featured Row - Mentor & Origin */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mentor Card - Dave */}
              {recommendations.filter(r => r.source === 'mentor').map((review) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0BA2B5]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-[#0BA2B5]/50 transition-all">
                    {/* Large Quote Mark */}
                    <div className="absolute top-6 right-8 text-[#0BA2B5]/10 text-8xl font-serif leading-none">&ldquo;</div>
                    
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0BA2B5]/20 text-[#0BA2B5] text-xs font-mono uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        My Mentor
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-white text-xl md:text-2xl leading-relaxed mb-6 relative z-10">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    
                    {/* Attribution */}
                    <div className="flex items-start justify-between gap-4 pt-6 border-t border-slate-800">
                      <div>
                        <p className="font-semibold text-white text-lg">{review.name}</p>
                        <p className="font-mono text-[#0BA2B5] text-sm">{review.role}</p>
                        <p className="text-slate-500 text-xs mt-1">{review.company}</p>
                      </div>
                      <div className="text-right max-w-[200px]">
                        <p className="text-slate-500 text-xs leading-relaxed italic">
                          {review.relationship}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Origin Card - Vikram */}
              {recommendations.filter(r => r.source === 'origin').map((review) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                    {/* Large Quote Mark */}
                    <div className="absolute top-6 right-8 text-purple-500/10 text-8xl font-serif leading-none">&ldquo;</div>
                    
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        My First Boss
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-white text-xl md:text-2xl leading-relaxed mb-6 relative z-10">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    
                    {/* Attribution */}
                    <div className="flex items-start justify-between gap-4 pt-6 border-t border-slate-800">
                      <div>
                        <p className="font-semibold text-white text-lg">{review.name}</p>
                        <p className="font-mono text-purple-400 text-sm">{review.role}</p>
                        <p className="text-slate-500 text-xs mt-1">{review.company}</p>
                      </div>
                      <div className="text-right max-w-[200px]">
                        <p className="text-slate-500 text-xs leading-relaxed italic">
                          {review.relationship}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rest of Testimonials - Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.filter(r => r.source !== 'mentor' && r.source !== 'origin').map((review, index) => {
                // Color coding by role type
                const isDataScience = review.role.toLowerCase().includes('data') || review.role.toLowerCase().includes('scientist')
                const isEngineering = review.role.toLowerCase().includes('engineer') || review.role.toLowerCase().includes('software')
                const isProduct = review.role.toLowerCase().includes('product')
                const isADPList = review.source === 'adplist'
                
                const accentColor = isADPList ? 'sky' : isDataScience ? 'purple' : isEngineering ? 'teal' : isProduct ? 'amber' : 'emerald'
                const colorClasses = {
                  sky: { border: 'hover:border-sky-500/50', text: 'text-sky-400', bg: 'bg-sky-500/20', glow: 'from-sky-500/10' },
                  purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400', bg: 'bg-purple-500/20', glow: 'from-purple-500/10' },
                  teal: { border: 'hover:border-[#0BA2B5]/50', text: 'text-[#0BA2B5]', bg: 'bg-[#0BA2B5]/20', glow: 'from-[#0BA2B5]/10' },
                  amber: { border: 'hover:border-amber-500/50', text: 'text-amber-400', bg: 'bg-amber-500/20', glow: 'from-amber-500/10' },
                  emerald: { border: 'hover:border-emerald-500/50', text: 'text-emerald-400', bg: 'bg-emerald-500/20', glow: 'from-emerald-500/10' },
                }
                const colors = colorClasses[accentColor as keyof typeof colorClasses]

                return (
                  <motion.div
                    key={`${review.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6 ${colors.border} transition-all h-full flex flex-col`}>
                      
                      {/* ADPList Badge */}
                      {isADPList && (
                        <div className="absolute top-4 right-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${colors.bg} ${colors.text} text-[10px] font-mono uppercase tracking-wider`}>
                            ADPList
                          </span>
                        </div>
                      )}

                      {/* Role Tag */}
                      <div className="mb-4">
                        <span className={`font-mono ${colors.text} text-xs uppercase tracking-widest`}>
                          {review.role}
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote className="font-serif text-slate-200 text-base leading-relaxed mb-6 flex-grow">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                      
                      {/* Attribution + Context */}
                      <div className="pt-4 border-t border-slate-800/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-white text-sm">{review.name}</p>
                          <p className="text-slate-600 text-xs">{review.company}</p>
                        </div>
                        {/* Relationship Context */}
                        <p className="text-slate-500 text-xs leading-relaxed italic">
                          {review.relationship}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Links Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-8">
              <a
                href="https://adplist.org/mentors/anuja-harsha-nimmagadda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0BA2B5] transition-colors font-medium text-sm"
              >
                <span>More reviews on ADPList</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://medium.com/@anu.anuja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0BA2B5] transition-colors font-medium text-sm"
              >
                <span>Read my writing on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://github.com/anuharsha9/anu-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0BA2B5] transition-colors font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Portfolio Source</span>
              </a>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 5 — LIFE OUTSIDE THE TERMINAL */}
      <MotionSection id="outside-of-work" className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-widest">
                // RUNTIME: PARALLEL_PROCESSES
              </span>
              <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                Life Outside the Terminal
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Parent of two. Obsessive learner. These hobbies keep me balanced.
              </p>
            </div>

            {/* Core Context - Family */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full bg-[#0BA2B5] rounded-full flex-shrink-0 self-stretch" />
                  <div>
                    <span className="font-mono text-slate-400 text-xs uppercase tracking-widest block mb-3">
                      // PRIMARY_THREAD
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      I&apos;m a parent of two — a 4-year-old boy and 1-year-old girl — with the most supportive husband. Motherhood shapes my discipline, resilience, empathy, and systems thinking more than anything else.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobby Grid - Technical Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  id: 'PAINTING',
                  title: 'Painting', 
                  desc: 'Digital & canvas. Indian mythology focus.',
                  image: '/assets/painting.jpg',
                  tag: 'visual_systems'
                },
                { 
                  id: 'BAKING',
                  title: 'Baking', 
                  desc: 'Precision with sugar. Timings & ratios.',
                  image: '/assets/baking.jpg',
                  tag: 'structured_craft'
                },
                { 
                  id: 'COOKING',
                  title: 'Cooking', 
                  desc: '400+ dishes. Fast iteration.',
                  image: '/assets/cooking.jpg',
                  tag: 'rapid_prototyping'
                },
                { 
                  id: 'WRITING',
                  title: 'Poetry', 
                  desc: 'Saying a lot with a little.',
                  image: '/assets/poetry.jpg',
                  tag: 'content_design'
                },
              ].map((hobby, index) => (
                <motion.div
                  key={hobby.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-[#0BA2B5]/40 hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay with ID */}
                      <div className="absolute top-3 left-3">
                        <span className="font-mono text-[10px] text-white/90 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                          {hobby.id}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900 group-hover:text-[#0BA2B5] transition-colors">
                          {hobby.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">
                        {hobby.desc}
                      </p>
                      <span className="font-mono text-[10px] text-[#0BA2B5] uppercase tracking-wider">
                        → {hobby.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 6 — CONTACT CTA (Dark for contrast) */}
      <MotionSection className="bg-slate-900 py-24 md:py-32 lg:py-40 border-t border-slate-800 relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px] opacity-[0.03]">
            <AnimatedSignatureLogo
              className="w-full h-full text-white"
              duration={100000}
              pauseDuration={4000}
              autoPlay={true}
            />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >
            <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              Let&apos;s build something meaningful together.
            </h2>

            {/* Contact Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-4">
              <a href="tel:+17813547394" className="text-slate-50 text-xl font-mono hover:text-[#0BA2B5] transition-colors">
                +1 781-354-7394
              </a>
              <span className="text-slate-700">·</span>
              <a href="mailto:anu.anuja@outlook.com" className="text-slate-50 text-xl font-mono hover:text-[#0BA2B5] transition-colors">
                anu.anuja@outlook.com
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://www.linkedin.com/in/anu159" target="_blank" rel="noopener noreferrer" className="text-slate-50 text-xl font-mono hover:text-[#0BA2B5] transition-colors">
                LinkedIn
              </a>
            </div>

            {/* Copyright */}
            <p className="text-slate-500 text-sm pt-8">
              Designed in Figma. Built with Cursor. © 2025
            </p>
          </motion.div>
        </div>
      </MotionSection>
    </main>
  )
}
