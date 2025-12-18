'use client'

interface NavigateForwardContentProps {
  isLightBackground?: boolean
}

export default function NavigateForwardContent({ isLightBackground = true }: NavigateForwardContentProps) {
  return (
    <div className="space-y-8">

      {/* Outcome Summary Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Header + Metrics */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
                {'// PROJECT_OUTCOME'}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-slate-900 mt-1">
                From Visual Refresh to System Architecture
              </h3>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-slate-900">14</div>
                <div className="text-slate-400 text-xs">months</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-[var(--accent-teal)]">Live</div>
                <div className="text-slate-400 text-xs">Apr 2024</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-slate-900">20M+</div>
                <div className="text-slate-400 text-xs">schedules/wk</div>
              </div>
            </div>
          </div>

          {/* Before/After - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
              <span className="text-amber-600 text-xs font-mono uppercase tracking-wide">Before</span>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                Team relied on &ldquo;who knows this?&rdquo; — tribal knowledge scattered across 50 years.
              </p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <span className="text-emerald-600 text-xs font-mono uppercase tracking-wide">After</span>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                Documented ecosystem with a system spec. Architecture enabled extensibility.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Impact - Footer */}
        <div className="px-6 md:px-8 py-4 bg-slate-50 border-t border-slate-100">
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

      {/* Team Validation - Side by side cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-mono">YC</div>
            <div>
              <div className="text-slate-900 text-sm font-medium">Yingchun Chen</div>
              <div className="text-slate-400 text-xs">Principal System Software Engineer</div>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed italic">
            &ldquo;She impressed everyone with how quickly she grasped all aspects of a highly intricate system and translated that understanding into a clear, modern, and user-centered design.&rdquo;
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-mono">DP</div>
            <div>
              <div className="text-slate-900 text-sm font-medium">Dave Pfeiffer</div>
              <div className="text-slate-400 text-xs">Director of Design</div>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed italic">
            &ldquo;Anuja brings energy and determination to tackling complex design challenges. She approaches her work with a fearless attitude and is never afraid to explore new ideas.&rdquo;
          </p>
        </div>
      </div>

      {/* Reflection - Two distinct cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* What I'd push harder for */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-500 text-lg">↩</span>
            <span className="font-mono text-amber-700 text-xs uppercase tracking-wide">What I&apos;d push harder for</span>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Embedding the RC Explorer view directly into Hub workspaces instead of a separate filtered view. This would have expanded the pattern to Designer, Reporting Server—everything. That&apos;s my biggest regret.
          </p>
        </div>

        {/* What I'd want to do next */}
        <div className="bg-[var(--accent-teal-50)] border border-[var(--accent-teal-200)] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[var(--accent-teal)] text-lg">→</span>
            <span className="font-mono text-[var(--accent-teal-700)] text-xs uppercase tracking-wide">What I&apos;d want to do next</span>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Integrate ReportCaster product-wide—schedule from Designer, Reporting Server, IQ Plugin. Imagine generating an insight and immediately scheduling it. That&apos;s the vision.
          </p>
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
