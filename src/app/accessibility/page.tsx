'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import MotionSection from '@/components/ui/MotionSection'
import Link from 'next/link'
import { trackAccessibilityPageView } from '@/components/analytics/GoogleAnalytics'

export default function AccessibilityPage() {
  useEffect(() => {
    trackAccessibilityPageView()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <MotionSection className="surface-light py-12 md:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <h1 className="text-[var(--text-primary-light)] text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              Accessibility Statement
            </h1>
            <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
              Commitment to inclusive design and equal access for all users
            </p>
            <p className="text-[var(--text-muted-light)] text-sm md:text-base">
              Last updated: December 2025
            </p>
          </motion.div>
        </div>
      </MotionSection>

      {/* Main Content */}
      <MotionSection className="surface-light py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12 md:space-y-16">
          
          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Our Commitment
            </h2>
            <div className="space-y-4 text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
              <p>
                This portfolio is designed and built with accessibility as a core priority. I believe that great design is inclusive design—everyone should be able to access, understand, and navigate this website regardless of their abilities or the technologies they use.
              </p>
              <p>
                I am committed to ensuring digital accessibility for people with disabilities and continuously improving the user experience for everyone by applying relevant accessibility standards.
              </p>
            </div>
          </motion.div>

          {/* WCAG Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Standards & Compliance
            </h2>
            <div className="bg-[var(--accent-teal)]/5 rounded-lg border border-[var(--accent-teal)]/20 p-6 md:p-8 space-y-4">
              <div className="space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-xl font-serif font-semibold">
                  WCAG 2.1 Level AA Compliance
                </h3>
                <p className="text-[var(--text-muted-light)] leading-relaxed">
                  This website aims to conform to the <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">Web Content Accessibility Guidelines (WCAG) 2.1</a> at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-[var(--text-primary-light)] font-semibold">Perceivable</h4>
                  <ul className="text-[var(--text-muted-light)] text-sm space-y-1 list-disc list-inside">
                    <li>Text alternatives for images</li>
                    <li>Sufficient color contrast (4.5:1 minimum)</li>
                    <li>Resizable text up to 200%</li>
                    <li>Clear visual hierarchy</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[var(--text-primary-light)] font-semibold">Operable</h4>
                  <ul className="text-[var(--text-muted-light)] text-sm space-y-1 list-disc list-inside">
                    <li>Keyboard navigation throughout</li>
                    <li>Focus indicators on all interactive elements</li>
                    <li>No content that causes seizures</li>
                    <li>Skip to content links</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[var(--text-primary-light)] font-semibold">Understandable</h4>
                  <ul className="text-[var(--text-muted-light)] text-sm space-y-1 list-disc list-inside">
                    <li>Clear language and structure</li>
                    <li>Consistent navigation patterns</li>
                    <li>Error prevention and identification</li>
                    <li>Predictable functionality</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[var(--text-primary-light)] font-semibold">Robust</h4>
                  <ul className="text-[var(--text-muted-light)] text-sm space-y-1 list-disc list-inside">
                    <li>Semantic HTML structure</li>
                    <li>ARIA labels where needed</li>
                    <li>Compatible with assistive technologies</li>
                    <li>Valid, standards-compliant code</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Implemented */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-lg border border-black/10 p-6 space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Keyboard Navigation
                </h3>
                <p className="text-[var(--text-muted-light)] text-sm leading-relaxed">
                  All interactive elements are accessible via keyboard. Use Tab to navigate, Enter/Space to activate, and Escape to close modals.
                </p>
              </div>

              <div className="bg-white/50 rounded-lg border border-black/10 p-6 space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Screen Reader Support
                </h3>
                <p className="text-[var(--text-muted-light)] text-sm leading-relaxed">
                  Comprehensive ARIA labels, semantic HTML, and descriptive alt text ensure compatibility with screen readers like NVDA, JAWS, and VoiceOver.
                </p>
              </div>

              <div className="bg-white/50 rounded-lg border border-black/10 p-6 space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Focus Indicators
                </h3>
                <p className="text-[var(--text-muted-light)] text-sm leading-relaxed">
                  Clear, visible focus indicators on all interactive elements help users navigate and understand their current position on the page.
                </p>
              </div>

              <div className="bg-white/50 rounded-lg border border-black/10 p-6 space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Responsive Design
                </h3>
                <p className="text-[var(--text-muted-light)] text-sm leading-relaxed">
                  Fully responsive layout that works across all device sizes, from mobile phones to large desktop screens, with touch-friendly targets (minimum 44x44px).
                </p>
              </div>

              <div className="bg-white/50 rounded-lg border border-black/10 p-6 space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Color Contrast
                </h3>
                <p className="text-[var(--text-muted-light)] text-sm leading-relaxed">
                  All text meets WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text). Light backgrounds with dark text ensure optimal readability.
                </p>
              </div>

              <div className="bg-white/50 rounded-lg border border-black/10 p-6 space-y-3">
                <h3 className="text-[var(--text-primary-light)] text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Reduced Motion
                </h3>
                <p className="text-[var(--text-muted-light)] text-sm leading-relaxed">
                  Respects user preferences for reduced motion. Animations can be disabled via system settings, and the site adapts accordingly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testing Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Testing & Validation
            </h2>
            <div className="bg-white/50 rounded-lg border border-black/10 p-6 md:p-8 space-y-4">
              <p className="text-[var(--text-muted-light)] leading-relaxed">
                This website has been tested and validated using the following methods and tools:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-[var(--text-primary-light)] font-semibold">Automated Testing</h4>
                  <ul className="text-[var(--text-muted-light)] text-sm space-y-1 list-disc list-inside">
                    <li>Lighthouse accessibility audit</li>
                    <li>WAVE (Web Accessibility Evaluation Tool)</li>
                    <li>axe DevTools</li>
                    <li>HTML validation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[var(--text-primary-light)] font-semibold">Manual Testing</h4>
                  <ul className="text-[var(--text-muted-light)] text-sm space-y-1 list-disc list-inside">
                    <li>Keyboard-only navigation</li>
                    <li>Screen reader testing (VoiceOver, NVDA)</li>
                    <li>Color contrast verification</li>
                    <li>Responsive design across devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Known Limitations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Known Limitations & Continuous Improvement
            </h2>
            <div className="space-y-4 text-[var(--text-muted-light)] leading-relaxed">
              <p>
                While I strive to ensure accessibility, I recognize that web accessibility is an ongoing effort. Some third-party content (such as embedded videos from external sources) may have varying levels of accessibility.
              </p>
              <p>
                I am committed to continuous improvement and regularly review and update this website to enhance accessibility. If you encounter any accessibility barriers, please <Link href="/#lets-talk" className="text-[var(--accent-teal)] hover:underline">contact me</Link>.
              </p>
            </div>
          </motion.div>

          {/* Feedback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[var(--accent-teal)]/5 rounded-lg border border-[var(--accent-teal)]/20 p-6 md:p-8 space-y-4"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Feedback & Reporting Issues
            </h2>
            <p className="text-[var(--text-muted-light)] leading-relaxed">
              I welcome your feedback on the accessibility of this website. If you encounter any accessibility barriers or have suggestions for improvement, please contact me:
            </p>
            <div className="space-y-2">
              <p className="text-[var(--text-primary-light)] font-semibold">Ways to reach me:</p>
              <ul className="text-[var(--text-muted-light)] space-y-1 list-disc list-inside">
                <li><Link href="/#lets-talk" className="text-[var(--accent-teal)] hover:underline">Contact form</Link> on the homepage</li>
                <li>Email: <a href="mailto:hello@anujaharsha.com" className="text-[var(--accent-teal)] hover:underline">hello@anujaharsha.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/anujaharsha" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">linkedin.com/in/anujaharsha</a></li>
              </ul>
            </div>
            <p className="text-[var(--text-muted-light)] text-sm leading-relaxed pt-2">
              I aim to respond to accessibility feedback within 48 hours and will work to address any issues promptly.
            </p>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/50 rounded-lg border border-black/10 p-4 space-y-2">
                <h4 className="text-[var(--text-primary-light)] font-semibold">Web Accessibility Guidelines</h4>
                <ul className="text-[var(--text-muted-light)] text-sm space-y-1">
                  <li>
                    <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">
                      WCAG 2.1 Quick Reference
                    </a>
                  </li>
                  <li>
                    <a href="https://www.a11yproject.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">
                      The A11y Project
                    </a>
                  </li>
                  <li>
                    <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">
                      WebAIM Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white/50 rounded-lg border border-black/10 p-4 space-y-2">
                <h4 className="text-[var(--text-primary-light)] font-semibold">Testing Tools</h4>
                <ul className="text-[var(--text-muted-light)] text-sm space-y-1">
                  <li>
                    <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">
                      WAVE Evaluation Tool
                    </a>
                  </li>
                  <li>
                    <a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">
                      axe DevTools
                    </a>
                  </li>
                  <li>
                    <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-teal)] hover:underline">
                      Google Lighthouse
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 border-t border-black/10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-[var(--accent-teal)]/80 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}

