/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during builds (fix linting issues separately)
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  // Optimize production builds
  swcMinify: true, // Use SWC minifier (faster than Terser)
  webpack(config, { isServer, dev }) {
    // SVG optimization
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      // Preserve path data to prevent undefined 'd' attributes
                      removeUselessStrokeAndFill: false,
                      cleanupIds: false,
                      // Preserve classes and fills for gradients
                      removeUnknownsAndDefaults: false,
                      inlineStyles: false,
                    },
                  },
                },
              ],
            },
            // Enable ref and props for proper SVG rendering
            ref: true,
            titleProp: true,
            descProp: true,
          },
        },
      ],
    })

    // Production optimizations
    if (!dev && !isServer) {
      // Optimize bundle splitting
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Separate vendor chunks
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
            },
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
            // Common chunks
            common: {
              name: 'common',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    return config
  },
}

module.exports = nextConfig

