/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Codara',
  assetPrefix: '/Codara/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Note: Security headers are not supported with static export (output: 'export')
  // GitHub Pages provides basic security headers automatically
};

export default nextConfig;
