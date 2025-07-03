/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  // Custom domain doesn't need basePath or assetPrefix
  images: {
    unoptimized: true,
  },
}; 