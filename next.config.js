/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VERSION: process.env.npm_package_version,
    APP_URL: "https://www.amirzad.dev",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
