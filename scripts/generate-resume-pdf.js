/**
 * Generate PDF from resume HTML page
 * This script runs after the Next.js build to generate a PDF from the resume page
 */

const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const RESUME_HTML_PATH = path.join(__dirname, '..', 'ANUJA-HARSHA-NIMMAGADDA-RESUME-OPTIMIZED.html')
const OUTPUT_PDF_PATH = path.join(__dirname, '..', 'public', 'assets', 'Anuja-Nimmagadda-Resume-2025.pdf')
const RESUME_CSS_PATH = path.join(__dirname, '..', 'src', 'app', 'resume', 'resume.css')

async function generateResumePDF() {
  console.log('📄 Generating resume PDF...')

  try {
    // Read the HTML file
    let html = fs.readFileSync(RESUME_HTML_PATH, 'utf8')

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()

    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    })

    // Set content
    await page.setContent(html, {
      waitUntil: 'networkidle0',
    })

    // Wait for fonts to load (with timeout)
    try {
      await Promise.race([
        page.evaluateHandle(() => document.fonts.ready),
        new Promise((resolve) => setTimeout(resolve, 3000)), // 3 second timeout
      ])
    } catch (e) {
      console.log('⚠️  Font loading timeout, continuing...')
    }

    // Small delay to ensure rendering is complete
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Generate PDF
    await page.pdf({
      path: OUTPUT_PDF_PATH,
      format: 'Letter',
      margin: {
        top: '0.7in',
        right: '0.7in',
        bottom: '0.7in',
        left: '0.7in',
      },
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    })

    await browser.close()

    // Verify PDF was created
    if (fs.existsSync(OUTPUT_PDF_PATH)) {
      const stats = fs.statSync(OUTPUT_PDF_PATH)
      console.log(`✅ Resume PDF generated successfully!`)
      console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`)
      console.log(`   Location: ${OUTPUT_PDF_PATH}`)
    } else {
      throw new Error('PDF file was not created')
    }
  } catch (error) {
    console.error('❌ Error generating resume PDF:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  generateResumePDF()
}

module.exports = { generateResumePDF }

