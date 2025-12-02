#!/usr/bin/env node

/**
 * Generate sitemap.xml for Next.js static export
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs')
const path = require('path')

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

// All routes in the site
const routes = [
  '', // Home
  '/me',
  '/work/reportcaster',
  '/work/ml-functions',
  '/work/iq-plugin',
]

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

// Write to public directory
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8')
console.log('✅ Sitemap generated successfully at public/sitemap.xml')
console.log(`   ${routes.length} URLs included`)

