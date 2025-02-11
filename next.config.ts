/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external image domains here if needed
    remotePatterns: [], // Add remote patterns if using external images
  },
  // This is needed for allowing local images from public directory
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig