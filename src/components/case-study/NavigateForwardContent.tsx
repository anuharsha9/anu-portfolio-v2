'use client'

interface NavigateForwardContentProps {
  isLightBackground?: boolean
}

export default function NavigateForwardContent({ isLightBackground = true }: NavigateForwardContentProps) {
  return (
    <div className="space-y-8">

      {/* Project Outcome - Refactored to 2x2 Grid (ML Style) */}
      <div className="space-y-4">
        <div className="text-center mb-6">
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
            {'// PROJECT_OUTCOME'}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mt-2">
            From Visual Refresh to System Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Duration */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest mb-3 block">
              {'// DURATION'}
            </span>
            <h4 className="text-slate-900 text-3xl font-serif mb-3">14 Months</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              End-to-end journey from initial visual refresh concepts to a fully implemented system architecture.
            </p>
          </div>

          {/* Card 2: Live Status */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal-50)] flex items-center justify-center mb-4 text-[var(--accent-teal)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            </div>
            <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest mb-3 block">
              {'// STATUS'}
            </span>
            <h4 className="text-slate-900 text-3xl font-serif mb-3">Live</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Shipped April 2024. Available to all enterprise customers in the production environment.
            </p>
          </div>

          {/* Card 3: Scale */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            </div>
            <span className="font-mono text-[10px] text-purple-600 uppercase tracking-widest mb-3 block">
              {'// SCALE'}
            </span>
            <h4 className="text-slate-900 text-3xl font-serif mb-3">20M+</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Schedules processed weekly. The redesign maintained 100% reliability at massive enterprise scale.
            </p>
          </div>

          {/* Card 4: Transformation */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            </div>
            <span className="font-mono text-[10px] text-amber-600 uppercase tracking-widest mb-3 block">
              {'// TRANSFORMATION'}
            </span>
            <h4 className="text-slate-900 text-3xl font-serif mb-3">System Spec</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Replaced 50 years of tribal knowledge with a documented ecosystem. Architecture enabled extensibility.
            </p>
          </div>
        </div>

        {/* Platform Impact Footer */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-6 text-center">
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-900">Platform-wide pattern:</strong> The Explorer filter view became scalable to all asset types. The architecture became the pattern for everything.
          </p>
        </div>
      </div>

      {/* Customer Recognition - Standalone highlight */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-center">
        <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
          {'// CUSTOMER_RECOGNITION'}
        </span>
        <blockquote className="mt-4 mb-4">
          <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
            &ldquo;So what are you going to do next?&rdquo;
          </p>
        </blockquote>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          A customer publicly praised the redesign during a Virtual User Group and asked what I planned next. Shipped 5 months after I transitioned—now demoed on the public YouTube channel.
        </p>
      </div>

      {/* Retrospective Section (Validation + Reflection) */}
      <div className="space-y-8 mt-24 md:mt-32 pt-12 border-t border-slate-100">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
            {'// REFLECTION'}
          </span>
          <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
            Retrospective
          </h3>
        </div>

        {/* Team Validation - Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-mono font-bold">YC</div>
              <div>
                <div className="text-slate-900 text-sm font-bold">Yingchun Chen</div>
                <div className="text-slate-400 text-xs uppercase tracking-wide">Principal System Software Engineer</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              &ldquo;She impressed everyone with how quickly she grasped all aspects of a highly intricate system and translated that understanding into a clear, modern, and user-centered design.&rdquo;
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-mono font-bold">DP</div>
              <div>
                <div className="text-slate-900 text-sm font-bold">Dave Pfeiffer</div>
                <div className="text-slate-400 text-xs uppercase tracking-wide">Director of Design</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              &ldquo;Anuja brings energy and determination to tackling complex design challenges. She approaches her work with a fearless attitude and is never afraid to explore new ideas.&rdquo;
            </p>
          </div>
        </div>

        {/* Reflection - Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What I'd push harder for */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-500 text-xl">↩</span>
              <span className="font-mono text-amber-700 text-xs uppercase tracking-wide font-bold">What I&apos;d push harder for</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Embedding the RC Explorer view directly into Hub workspaces instead of a separate filtered view. This would have expanded the pattern to Designer, Reporting Server—everything. That&apos;s my biggest regret.
            </p>
          </div>

          {/* What I'd want to do next */}
          <div className="bg-[var(--accent-teal-50)] border border-[var(--accent-teal-200)] rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[var(--accent-teal)] text-xl">→</span>
              <span className="font-mono text-[var(--accent-teal-700)] text-xs uppercase tracking-wide font-bold">What I&apos;d want to do next</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Integrate ReportCaster product-wide—schedule from Designer, Reporting Server, IQ Plugin. Imagine generating an insight and immediately scheduling it. That&apos;s the vision.
            </p>
          </div>
        </div>
      </div>

      {/* Compact footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 border-t border-slate-200 text-sm">
        <p className="text-slate-500 italic">
          The V1 I loved is actually being implemented now. Ideas find their way back.
        </p>
        <p className="text-slate-400">
          <span className="text-slate-600">Lesson:</span> Chaos is just undocumented architecture.
        </p>
      </div>

    </div>
  )
}
