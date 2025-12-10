/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // Skip TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Only enable static export for production builds
  ...(isProduction ? { output: 'export' } : {}),
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  trailingSlash: true, // Helps with S3 routing
  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  // Use Turbopack (default in Next.js 16)
  turbopack: {
    // Silence multiple lockfile root inference by pinning the root
    root: __dirname,
  },
}

module.exports = nextConfig

