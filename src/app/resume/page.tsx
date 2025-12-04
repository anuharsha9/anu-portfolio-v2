'use client'

import { useEffect } from 'react'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'
import './resume.css'

export default function ResumePage() {
  useEffect(() => {
    // Track resume view
    if (typeof window !== 'undefined') {
      trackResumeDownload()
    }
  }, [])

  const handleDownloadPDF = () => {
    trackResumeDownload()
    // Open PDF in new tab for direct download
    window.open('/assets/Anuja-Nimmagadda-Resume-2025.pdf', '_blank')
  }

  return (
    <div className="resume-wrapper">
      {/* Download button - visible on screen, hidden when printing */}
      <style jsx global>{`
        @media screen {
          .resume-wrapper {
            min-height: 100vh;
            background: var(--bg-light, #FAFAF9);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .resume-actions {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 12px;
          }
          .print-button {
            padding: 12px 24px;
            background: var(--accent-teal, #0D9488);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
            transition: all 0.2s;
            font-family: 'Inter Tight', sans-serif;
            text-decoration: none;
            display: inline-block;
          }
          .print-button:hover {
            background: var(--accent-teal-700, #0F766E);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(13, 148, 136, 0.4);
          }
          .print-button-secondary {
            background: var(--accent-teal-700, #0F766E);
          }
          .print-button-secondary:hover {
            background: var(--accent-teal-800, #115E59);
          }
        }
        @media print {
          .resume-wrapper {
            padding: 0;
            background: white;
          }
          .resume-actions {
            display: none;
          }
        }
      `}</style>
      
      <div className="resume-actions">
        <a
          href="/assets/Anuja-Nimmagadda-Resume-2025.pdf"
          download="Anuja-Nimmagadda-Resume-2025.pdf"
          onClick={() => trackResumeDownload()}
          className="print-button"
          aria-label="Download Resume as PDF"
        >
          Download PDF
        </a>
        <button 
          onClick={() => window.print()} 
          className="print-button print-button-secondary" 
          aria-label="Print Resume"
        >
          Print
        </button>
      </div>

      <div className="resume-container">
        <ResumeContent />
      </div>
    </div>
  )
}

function ResumeContent() {
  return (
    <div className="resume-content">
      {/* Contact Info */}
      <div className="contact-info">
        <strong>ANUJA HARSHA NIMMAGADDA</strong>
        <div className="contact-details">
          anu.anuja@outlook.com | +1 781-354-7394 | Portfolio: www.anujaharsha.com | LinkedIn: linkedin.com/in/anu159
        </div>
      </div>

      {/* Target Job Title */}
      <h1>TARGET JOB TITLE</h1>
      <div className="section">
        Principal Product Designer, Senior Product Designer, UX Design Lead, Enterprise UX, AI/ML, Systems Design
      </div>

      {/* Career Summary */}
      <h1>CAREER SUMMARY</h1>
      <div className="summary">
        Principal-level Product Designer with 13 years of end-to-end experience across B2C consumer products, B2B enterprise platforms, AI/ML workflows, systems design, mobile, and web. Specialize in modernizing complex workflows, simplifying multi-step systems, and bringing clarity to ambiguous problem spaces. Operate as a UX leader: aligning engineering, data science, and product teams; driving cross-functional clarity; and mentoring designers. Work at the intersection of product strategy, systems architecture, and user-centered design, delivering scalable, high-impact experiences that make measurable business impact. Proven track record of Principal-level impact at scale—redesigning mission-critical systems serving millions of users, reducing clicks by 44-56%, and eliminating support bottlenecks.
      </div>

      {/* AI-Augmented Workflow Positioning */}
      <h1>AI-AUGMENTED DESIGN & DEVELOPMENT</h1>
      <div className="summary">
        <strong>For Engineering & Product Leaders:</strong> This portfolio demonstrates my capability to bridge design-to-implementation using AI-augmented workflows. In professional work environments, I maintain traditional design-to-engineering collaboration workflows (AI used for productivity: ticket writing, brainstorming, research, learning). For personal projects, I use AI-augmented development to ship production-ready code—this portfolio (anujaharsha.com) showcases this capability, built with Next.js, TypeScript, React, Tailwind CSS, and deployed on AWS S3/CloudFront. Source code available on GitHub.
      </div>

      {/* Key Skills */}
      <h1>KEY SKILLS</h1>
      <div className="skills-list">
        <span>User Experience Design</span>
        <span>UX Design</span>
        <span>Product Design</span>
        <span>User Interface Design</span>
        <span>UI Design</span>
        <span>Enterprise UX</span>
        <span>AI/ML Product Experiences</span>
        <span>Workflow Design</span>
        <span>Information Architecture</span>
        <span>Systems Thinking</span>
        <span>Legacy System Modernization</span>
        <span>User Research</span>
        <span>Usability Testing</span>
        <span>Cross-functional Leadership</span>
        <span>Product Strategy</span>
        <span>UX Strategy</span>
        <span>Interaction Design</span>
        <span>Prototyping</span>
        <span>Figma</span>
        <span>Heuristic Evaluation</span>
        <span>Accessibility</span>
        <span>Visual Design</span>
        <span>Mobile UX</span>
        <span>Web UX</span>
        <span>Requirement Gathering</span>
        <span>UX Documentation</span>
        <span>Stakeholder Alignment</span>
        <span>Design Systems</span>
        <span>Wireframing</span>
        <span>User-Centered Design</span>
        <span>AI-Augmented Development</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>AWS S3</span>
        <span>CloudFront</span>
        <span>GitHub</span>
      </div>

      {/* Professional Experience */}
      <h1>EXPERIENCE</h1>

      <div className="section">
        <div className="job-title">
          SENIOR PRODUCT DESIGNER
          <span className="date">August 2022 - November 2025</span>
        </div>
        <div className="company">Cloud Software Group (WebFOCUS/IBI)</div>
        
        <div className="job-description">
          Led User Experience modernization across multiple legacy product areas, operating as the de-facto Principal Designer in an engineering-first organization with low UX maturity. Established structured discovery, SME outreach, UX to PM to Engineering alignment, and ticket-writing templates that became team-wide standards. Frequently initiated alignment among Product Managers, engineers, architects, and Principal Data Scientists, driving clarity in ambiguous spaces where others hesitated to challenge technical constraints. Elevated UX maturity by mentoring designers, demonstrating cross-functional leadership, and influencing product strategy through research, prototyping, SME testing, and implementation alignment.
        </div>
        
        <div className="key-achievements">KEY ACHIEVEMENTS:</div>
        <ul>
          <li>Recognized by senior leadership in a company-wide meeting for early impact on ReportCaster and DSML within first 6 months, solidifying role as cross-functional UX leader</li>
        </ul>
        
        <h2>ReportCaster Modernization (2022–2025)</h2>
        <ul>
          <li>Redesigned 40-year-old scheduler powering millions of BI jobs annually, achieving 44-56% fewer clicks for schedule creation, 50% faster completion, and eliminated multi-tab sprawl entirely</li>
          <li>Took full ownership one week into joining, reverse-engineering undocumented rules and consolidating 5 fragmented subsystems into 1 unified guided workflow</li>
          <li>Reduced support load by 25-30% and improved Explorer access by 60-70% fewer clicks, delivered safely at massive scale with resounding customer approval</li>
          <li>Led cross-functional alignment with engineering, product, and QA, making strategic decisions when others hesitated; work shipped as part of WebFOCUS 9.3, impacting millions of users daily</li>
        </ul>
        
        <h2>ML Functions Redesign (2023–2024)</h2>
        <ul>
          <li>Led end-to-end ML workflow revamp, achieving 100% discoverability in SME usability testing and reducing workflow from 12+ clicks to 7-9 clicks</li>
          <li>Self-learned ML concepts through MIT coursework and collaboration with Principal Data Scientist, designing guided 4-step workflow for non-expert users</li>
          <li>Delivered 2-click entry point, 50% faster setup, and 60% fewer configuration errors through inline validation and guided warnings</li>
          <li>Created dual-experience approach balancing guided simplicity for novices with advanced flexibility for experts; eliminated all dead-end errors that confused users</li>
        </ul>
        
        <h2>IQ Plugin — DSML Hub (2023–2024)</h2>
        <ul>
          <li>Designed unified hub that centralized Natural Language Query (NLQ), ML, and Automated Insights into contextual, business-friendly flows</li>
          <li>Unified three fragmented DSML features into one cohesive experience, significantly improving discoverability, usability, and adoption</li>
          <li>Mapped distinct user journeys for multiple personas and built scalable pattern for future DSML features, ensuring competitive positioning with leading BI platforms</li>
          <li>Made complex data science capabilities approachable for business users while maintaining power for experts; owned UX strategy, IA, workflows, and usability testing</li>
        </ul>
      </div>

      <div className="section">
        <div className="job-title">
          SENIOR UX/UI DESIGNER (Consultant)
          <span className="date">February 2022 - July 2022</span>
        </div>
        <div className="company">InfoTriangle Technologies / T3 Solutions</div>
        <ul>
          <li>Designed matrimony management mobile app concept, including onboarding, dashboards, and guided workflows; provided UX support across multiple client needs</li>
        </ul>
      </div>

      <div className="section">
        <div className="job-title">
          FREELANCE PRODUCT AND UI/UX DESIGNER
          <span className="date">April 2017 - October 2021</span>
        </div>
        <div className="company">Independent Consultant</div>
        <ul>
          <li>Delivered UX, UI, mobile app designs, branding, and product concepts for 10+ small businesses and startups; designed CRM systems, marketing sites, dashboards, and mobile experiences</li>
          <li>Provided end-to-end product support: discovery, IA, wireframes, visual design, prototypes, and handoff</li>
        </ul>
      </div>

      <div className="section">
        <div className="job-title">
          UX DESIGNER
          <span className="date">December 2016 - March 2017</span>
        </div>
        <div className="company">F1 Studioz</div>
        <ul>
          <li>Designed multiple enterprise B2B products, including conference room booking system and internal tools; worked in fast-paced agency model delivering rapid UX cycles</li>
        </ul>
      </div>

      <div className="section">
        <div className="job-title">
          UI/UX DESIGNER
          <span className="date">August 2012 - November 2016</span>
        </div>
        <div className="company">9P Studioz</div>
        <ul>
          <li>Sole designer for mobile app development startup, delivering UX/UI for 50+ apps including mobile games, productivity apps, branding, icons, and animations</li>
        </ul>
      </div>

      {/* Education */}
      <h1>EDUCATION</h1>
      <div className="section">
        <div className="job-title">
          MIT xPRO — AI & Machine Learning in Product Design
        </div>
        <div className="education-list">
          <div className="job-title">Master&apos;s Degree in English</div>
          <div className="job-title">Bachelor&apos;s Degree in Animation & Visual Effects</div>
          <div className="job-title">Bachelor&apos;s Degree in English Literature</div>
          <div className="job-title">Georgia Tech — Human-Computer Interaction</div>
        </div>
      </div>

      {/* Technical Skills */}
      <h1>TECHNICAL SKILLS</h1>
      <div className="section">
        <div><strong>Design Tools:</strong> Figma, FigJam, Adobe Creative Suite, Sketch, InVision | <strong>Front-End Development:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS | <strong>AI-Augmented Development:</strong> Cursor, GPT, Gemini (for personal projects) | <strong>Deployment:</strong> AWS S3, CloudFront, GitHub | <strong>AI/ML UX:</strong> Machine Learning Platforms, AI Product Design</div>
      </div>

      {/* Publications & Portfolio */}
      <h1>PUBLICATIONS & PORTFOLIO</h1>
      <div className="section">
        <div><strong>Portfolio:</strong> www.anujaharsha.com | <strong>Source Code:</strong> github.com/anuharsha9/anu-portfolio | <strong>Publications:</strong> &quot;The secret behind better BI: Who&apos;s your business user?&quot; and &quot;Enhancing user experience in WebFOCUS DSML&quot; - Published on IBI Community | Design writing and essays on Medium | <strong>Mentorship:</strong> Active mentor on ADPList (adplist.org/mentors/anuja-harsha-nimmagadda)</div>
      </div>
    </div>
  )
}

