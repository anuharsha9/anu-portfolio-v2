/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for S3 hosting
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  trailingSlash: true, // Helps with S3 routing
  webpack(config) {
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
    return config
  },
}

module.exports = nextConfig

