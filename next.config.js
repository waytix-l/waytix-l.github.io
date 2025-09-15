/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Remplacez 'portfolio-lucas-savy' par le nom exact de votre repository
  basePath: isProd ? '/waytix-l.github.io' : '',
  assetPrefix: isProd ? '/waytix-l.github.io/' : '',
  
  // Configuration importante pour les assets CSS
  experimental: {
    optimizeCss: false,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configuration pour les assets statiques
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig