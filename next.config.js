/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  // Custom domain, no need for basePath or assetPrefix
  // basePath: '/Portfolio-website',
  // assetPrefix: '/Portfolio-website/',
  images: {
    unoptimized: true,
  },
}; 