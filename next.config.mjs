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
};

export default nextConfig;
