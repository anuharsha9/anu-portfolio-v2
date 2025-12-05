'use client'

import { useEffect, useRef } from 'react'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'

export default function ResumePage() {
  const resumeContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Track resume view
    if (typeof window !== 'undefined') {
      trackResumeDownload()
      // Override body background to white for resume page
      document.body.style.backgroundColor = '#ffffff'
      document.body.style.color = '#000000'
      return () => {
        // Reset on unmount
        document.body.style.backgroundColor = ''
        document.body.style.color = ''
      }
    }
  }, [])

  const handleDownloadPDF = async () => {
    trackResumeDownload()

    if (!resumeContentRef.current) {
      console.error('Resume content not found')
      // Fallback
      window.open('/assets/Anuja-Nimmagadda-Resume-2025.pdf', '_blank')
      return
    }

    try {
      // Show loading state
      const button = document.getElementById('download-pdf-button') as HTMLButtonElement
      const originalText = button?.textContent
      if (button) {
        button.disabled = true
        button.textContent = 'Generating PDF...'
      }

      // Dynamically import html2pdf.js
      const html2pdf = (await import('html2pdf.js')).default

      // Configure PDF options to match professional resume standards
      const opt = {
        margin: [0.7, 0.7, 0.7, 0.7] as [number, number, number, number], // inches: top, right, bottom, left
        filename: 'Anuja-Harsha-Nimmagadda-Resume-2025.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false,
          backgroundColor: '#ffffff',
          removeContainer: true
        },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait' as const,
          compress: true
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: ['h1', 'h2', '.section']
        }
      }

      // Generate and download PDF
      await html2pdf().set(opt).from(resumeContentRef.current).save()

      // Restore button
      if (button && originalText) {
        button.disabled = false
        button.textContent = originalText
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Restore button
      const button = document.getElementById('download-pdf-button') as HTMLButtonElement
      if (button) {
        button.disabled = false
        button.textContent = 'Download as PDF'
      }
      // Fallback to opening existing PDF
      window.open('/assets/Anuja-Nimmagadda-Resume-2025.pdf', '_blank')
    }
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff', overflow: 'auto' }}>
      <div ref={resumeContentRef} style={{ padding: '0.7in', fontFamily: '"Times New Roman", Times, serif', fontSize: '11pt', lineHeight: '1.5', color: '#000000', maxWidth: '8.5in', margin: '0 auto', background: '#ffffff', minHeight: '100vh' }}>
        {/* Download Button */}
        <div style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '15px', borderBottom: '2px solid #00A2B7' }}>
          <button
            onClick={handleDownloadPDF}
            id="download-pdf-button"
            style={{
              padding: '10px 20px',
              backgroundColor: '#00A2B7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: '"Times New Roman", Times, serif'
            }}
          >
            Download as PDF
          </button>
        </div>
        {/* Contact Info */}
        <div style={{ textAlign: 'center', marginBottom: '16pt', paddingBottom: '8pt', borderBottom: '2pt solid #00A2B7', fontSize: '10pt' }}>
          <strong>ANUJA HARSHA NIMMAGADDA</strong>
          anu.anuja@outlook.com | +1 781-354-7394 | Portfolio: www.anujaharsha.com | linkedin.com/in/anu159
        </div>

        {/* Target Job Title */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '12pt', marginBottom: '6pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>TARGET JOB TITLE</h1>
        <div style={{ margin: '4pt 0', color: '#000000', lineHeight: '1.5', fontSize: '11pt' }}>
          Principal Product Designer, Senior Product Designer, UX Design Lead, Enterprise UX Designer, Lead Systems Designer
        </div>

        {/* Career Summary */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '16pt', marginBottom: '8pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>CAREER SUMMARY</h1>
        <div style={{ margin: '6pt 0', textAlign: 'left', color: '#000000', lineHeight: '1.7', fontSize: '11pt' }}>
          <p style={{ marginBottom: '8pt' }}><strong>Principal-level Product Designer</strong> with 13 years of end-to-end experience across B2C consumer products, B2B enterprise platforms, AI/ML workflows, systems design, mobile, and web.</p>
          <p style={{ marginBottom: '8pt' }}>Specialize in modernizing complex workflows, simplifying multi-step systems, and bringing clarity to ambiguous problem spaces.</p>
          <p style={{ marginBottom: '8pt' }}>Operate as a <strong>UX leader</strong>: aligning engineering, data science, and product teams; driving cross-functional clarity; and mentoring designers.</p>
          <p style={{ marginBottom: '0' }}>Proven track record of Principal-level impact at scale—redesigning mission-critical systems serving <strong>millions of users</strong>, reducing clicks by <strong>44-56%</strong>, and eliminating support bottlenecks.</p>
        </div>

        {/* AI-Assisted Design & Development */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '16pt', marginBottom: '8pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>AI-ASSISTED DESIGN & DEVELOPMENT</h1>
        <div style={{ margin: '6pt 0', textAlign: 'left', color: '#000000', lineHeight: '1.7', fontSize: '11pt' }}>
          <p style={{ marginBottom: '8pt' }}><strong>Designed and Developed Portfolio Website with AI assistance</strong></p>
          <p style={{ marginBottom: '8pt' }}>Leverage strong foundational knowledge of HTML/CSS and AI-assisted workflows to bridge design-to-implementation, delivering production-ready front-end code.</p>
          <p style={{ marginBottom: '8pt' }}><strong>Approach:</strong> Design the system first (problem framing, user flows, UX strategy), use AI to generate foundation (HTML/CSS scaffolds, React/JavaScript components, layouts), then manually audit, debug, and refine (accessibility, semantic HTML, CSS specificity, interactions).</p>
          <p style={{ marginBottom: '0' }}>Portfolio (anujaharsha.com), built with <strong>Next.js, TypeScript, React, Tailwind CSS</strong>, deployed on <strong>AWS S3/CloudFront</strong>. Source code available on GitHub.</p>
        </div>

        {/* Key Skills */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '16pt', marginBottom: '8pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>KEY SKILLS</h1>
        <div style={{ display: 'block', margin: '8pt 0', lineHeight: '2', fontSize: '11pt' }}>
          <span style={{ marginRight: '12pt', display: 'inline-block', marginBottom: '4pt' }}>User Experience Design</span>
          <span style={{ marginRight: '12pt', display: 'inline-block', marginBottom: '4pt' }}>UX Design</span>
          <span style={{ marginRight: '12pt', display: 'inline-block', marginBottom: '4pt' }}>Product Design</span>
          <span>User Interface Design</span>
          <span>UI Design</span>
          <span>Enterprise UX</span>
          <span>Artificial Intelligence (AI) / Machine Learning (ML) Product Experiences</span>
          <span>Workflow Design</span>
          <span>Information Architecture</span>
          <span>Systems Thinking</span>
          <span>Legacy System Modernization</span>
          <span>User Research</span>
          <span>Usability Testing</span>
          <span>Scenario-Based Testing</span>
          <span>Subject Matter Expert (SME) Collaboration</span>
          <span>Design System Leadership</span>
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
          <span>AI-Assisted Development</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>AWS S3</span>
          <span>CloudFront</span>
          <span>GitHub</span>
        </div>

        {/* Professional Experience */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '12pt', marginBottom: '6pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>EXPERIENCE</h1>

        <div style={{ marginBottom: '12pt' }}>
          <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt' }}>
            SENIOR UI/UX ENGINEER
            <span style={{ float: 'right', fontWeight: '400', color: '#000000', fontSize: '11pt' }}>August 2022 - November 2025</span>
          </div>
          <div style={{ fontWeight: '400', color: '#000000', fontSize: '11pt', marginBottom: '6pt' }}>Cloud Software Group (WebFOCUS/IBI)</div>

          <div style={{ marginTop: '8pt' }}>
            Led User Experience modernization across multiple legacy product areas, operating as the de-facto Principal Designer in an engineering-first organization with low UX maturity. Established structured discovery, Subject Matter Expert (SME) outreach, and cross-functional alignment processes that became team-wide standards. Elevated UX maturity by mentoring designers and influencing product strategy through research, prototyping, usability testing, and implementation alignment.
          </div>

          <div style={{ marginTop: '6pt', fontWeight: '700', color: '#000000', fontSize: '11pt', textTransform: 'uppercase' }}>KEY ACHIEVEMENTS:</div>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Collaborated directly with Directors of Design, Engineering, and Product Management on strategic initiatives, architectural decisions, and platform-wide standards; worked closely with Lead Architect of entire organization and Design System leadership, demonstrating Principal-level strategic influence and executive-level collaboration</li>
            <li>Delivered a dozen organization-wide design demos to 150-200 person business unit across ReportCaster, Machine Learning (ML) Functions, and IQ Plugin initiatives, presenting design walkthroughs and architectural decisions via Zoom; received widespread praise and recognition for clarity in explaining complex systems to cross-functional audiences</li>
            <li>Recognized by senior leadership in a company-wide meeting for early impact on ReportCaster and Data Science and Machine Learning (DSML) within first 6 months, solidifying role as cross-functional UX leader</li>
            <li>Only designer who worked on all major WebFOCUS features; led 3 out of 4 Principal-level initiatives (ReportCaster, Machine Learning (ML) Functions, IQ Plugin) simultaneously while juggling platform constraints; owned ReportCaster and ML Functions solo before onboarding and managing design teams, demonstrating ability to lead multiple complex projects at scale</li>
            <li>Co-owned and maintained WebFOCUS Design System with Director of Design: migrated entire system from Sketch to Figma, improved Figma design system elements, added components, and established working standards ensuring consistency across platform</li>
            <li>As the only designer on the team apart from the Director of Design, was eventually given the opportunity to co-host Virtual User Group Sessions for enterprise customers, presenting alongside the Senior PM to showcase design work and gather customer feedback</li>
            <li>Onboarded and managed design teams across multiple initiatives: onboarded 2 designers on ReportCaster for final polish and shipping, 2 designers on ML Functions during maternity leave transition; served as knowledge hub and continued to be looped in for critical decisions even after transitioning projects</li>
          </ul>

          <h2 style={{ fontSize: '11pt', fontWeight: '700', marginTop: '8pt', marginBottom: '4pt', color: '#000000' }}>ReportCaster Modernization (2022–2025)</h2>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Redesigned 40-year-old scheduler powering 20 million schedules per week, achieving 44-56% fewer clicks, 50% faster completion, eliminated multi-tab sprawl</li>
            <li>Consolidated 5 fragmented subsystems into 1 unified guided workflow; became one of the first members of the product team to understand system end-to-end (UX, architecture, and workflows combined), alongside customer support and original engineers</li>
            <li>Owned entire redesign solo initially; onboarded 2 designers for final polish and shipping, providing hand-holding and knowledge transfer until full transition; continued to be looped in for critical architectural decisions as knowledge hub</li>
            <li>Reduced support load by 25-30%, improved Explorer access by 60-70% fewer clicks; support tickets shifted from &quot;how do I...&quot; to &quot;can I do...&quot;</li>
            <li>Shipped as part of WebFOCUS 9.3, impacting millions of users daily across enterprise deployments</li>
          </ul>

          <h2 style={{ fontSize: '11pt', fontWeight: '700', marginTop: '8pt', marginBottom: '4pt', color: '#000000' }}>Machine Learning (ML) Functions Redesign — Model Training Workflows (2023–2025)</h2>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Redesigned Machine Learning (ML) model training workflows, achieving 100% discoverability in Subject Matter Expert (SME) usability testing, reduced workflow from 12+ clicks to 7-9 clicks</li>
            <li>Delivered 2-click entry point, 50% faster setup, 60% fewer configuration errors through guided 4-step workflow</li>
            <li>Owned entire redesign solo while simultaneously leading ReportCaster; onboarded 2 designers during maternity leave transition, ensuring seamless knowledge transfer and continuity</li>
            <li>Eliminated all dead-end errors; dual-experience approach balancing guided simplicity for novices with advanced flexibility for experts</li>
          </ul>

          <h2 style={{ fontSize: '11pt', fontWeight: '700', marginTop: '8pt', marginBottom: '4pt', color: '#000000' }}>IQ Plugin — Data Science and Machine Learning (DSML) Hub (2023–2025)</h2>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Designed IQ Plugin to bring Data Science and Machine Learning (DSML) features of WebFOCUS into the Hub, unifying three fragmented DSML features (Natural Language Query (NLQ), Machine Learning (ML), Automated Insights) into one cohesive hub, significantly improving discoverability and adoption</li>
            <li>Established IQ patterns as foundational for entire DSML experience; seamless integrations across WebFOCUS ecosystem</li>
            <li>Owned entire initiative solo while leading other projects; made complex data science capabilities approachable for business users while maintaining power for experts</li>
          </ul>

          <h2 style={{ fontSize: '11pt', fontWeight: '700', marginTop: '8pt', marginBottom: '4pt', color: '#000000' }}>Design System Co-Ownership & Platform Standards (2022–2025)</h2>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Migrated design system from Sketch to Figma for entire design and engineering organization; added components, improved system elements</li>
            <li>Established design system standards and best practices as team-wide templates; foundation for all platform design work</li>
          </ul>
        </div>

        <div className="section">
          <div className="job-title">
            SENIOR UX/UI DESIGNER (Consultant)
            <span style={{ float: 'right', fontWeight: '400', color: '#000000', fontSize: '11pt' }}>February 2022 - July 2022</span>
          </div>
          <div style={{ fontWeight: '400', color: '#000000', fontSize: '11pt', marginBottom: '6pt' }}>InfoTriangle Technologies / T3 Solutions</div>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Designed matrimony management mobile app concept, including onboarding, dashboards, and guided workflows; provided UX support across multiple client needs</li>
          </ul>
        </div>

        <div style={{ marginBottom: '12pt' }}>
          <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt' }}>
            FREELANCE PRODUCT AND UI/UX DESIGNER
            <span style={{ float: 'right', fontWeight: '400', color: '#000000', fontSize: '11pt' }}>April 2017 - October 2021</span>
          </div>
          <div style={{ fontWeight: '400', color: '#000000', fontSize: '11pt', marginBottom: '6pt' }}>Independent Consultant</div>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Delivered UX, UI, mobile app designs, branding, and product concepts for 10+ small businesses and startups; designed CRM systems, marketing sites, dashboards, and mobile experiences</li>
            <li>Provided end-to-end product support: discovery, Information Architecture (IA), wireframes, visual design, prototypes, and handoff</li>
          </ul>
        </div>

        <div style={{ marginBottom: '12pt' }}>
          <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt' }}>
            UX DESIGNER
            <span style={{ float: 'right', fontWeight: '400', color: '#000000', fontSize: '11pt' }}>December 2016 - March 2017</span>
          </div>
          <div style={{ fontWeight: '400', color: '#000000', fontSize: '11pt', marginBottom: '6pt' }}>F1 Studioz</div>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Designed multiple enterprise B2B products, including conference room booking system and internal tools; worked in fast-paced agency model delivering rapid UX cycles</li>
          </ul>
        </div>

        <div style={{ marginBottom: '12pt' }}>
          <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt' }}>
            UI/UX DESIGNER
            <span style={{ float: 'right', fontWeight: '400', color: '#000000', fontSize: '11pt' }}>August 2012 - November 2016</span>
          </div>
          <div style={{ fontWeight: '400', color: '#000000', fontSize: '11pt', marginBottom: '6pt' }}>9P Studioz</div>
          <ul style={{ margin: '4pt 0', paddingLeft: '18pt' }}>
            <li>Sole designer for mobile app development startup, delivering UX/UI for 50+ apps including mobile games, productivity apps, branding, icons, and animations</li>
          </ul>
        </div>

        {/* Education */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '12pt', marginBottom: '6pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>EDUCATION</h1>
        <div style={{ marginBottom: '12pt' }}>
          <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt' }}>MIT xPRO — Artificial Intelligence (AI) & Machine Learning (ML) in Product Design</div>
          <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt', marginTop: '6pt' }}>Georgia Tech — Human-Computer Interaction</div>
          <div style={{ marginTop: '8pt' }}>
            <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt' }}>Master&apos;s Degree in English</div>
            <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt', marginTop: '6pt' }}>Bachelor&apos;s Degree in Animation & Visual Effects</div>
            <div style={{ fontWeight: '700', fontSize: '11pt', color: '#000000', marginBottom: '2pt', marginTop: '6pt' }}>Bachelor&apos;s Degree in English Literature</div>
          </div>
        </div>

        {/* Technical Skills */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '12pt', marginBottom: '6pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>TECHNICAL SKILLS</h1>
        <div style={{ marginBottom: '12pt' }}>
          <div><strong>Design Tools:</strong> Figma, FigJam, Adobe Creative Suite, Sketch, InVision | <strong>Front-End Development:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS | <strong>AI-Assisted Development:</strong> Cursor, GPT, Gemini | <strong>Deployment:</strong> AWS S3, CloudFront, GitHub | <strong>Artificial Intelligence (AI) / Machine Learning (ML) User Experience:</strong> Machine Learning Platforms, AI Product Design</div>
        </div>

        {/* Publications & Portfolio */}
        <h1 style={{ fontSize: '12pt', fontWeight: '700', marginTop: '12pt', marginBottom: '6pt', textTransform: 'uppercase', borderBottom: '1pt solid #00A2B7', paddingBottom: '2pt', color: '#000000' }}>PUBLICATIONS & PORTFOLIO</h1>
        <div style={{ marginBottom: '12pt' }}>
          <div><strong>Portfolio:</strong> www.anujaharsha.com | <strong>Source Code:</strong> github.com/anuharsha9/anu-portfolio | <strong>Publications:</strong> &quot;The secret behind better BI: Who&apos;s your business user?&quot; and &quot;Enhancing user experience in WebFOCUS DSML&quot; - Published on IBI Community | Design writing and essays on Medium | <strong>Mentorship:</strong> Active mentor on ADPList (adplist.org/mentors/anuja-harsha-nimmagadda)</div>
        </div>
      </div>
    </div>
  )
}
