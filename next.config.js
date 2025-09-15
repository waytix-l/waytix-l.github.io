/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Remplacez 'votre-username' et 'nom-du-repo' par vos vraies valeurs
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-lucas-savy' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-lucas-savy/' : '',
}

module.exports = nextConfig