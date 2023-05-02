/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
