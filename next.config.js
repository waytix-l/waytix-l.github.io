/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pour Render, on n'a pas besoin d'export statique
  // output: 'export', // Supprimez cette ligne
  
  images: {
    unoptimized: true
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Pas besoin de basePath pour Render
  // basePath et assetPrefix ne sont plus nécessaires
}

module.exports = nextConfig