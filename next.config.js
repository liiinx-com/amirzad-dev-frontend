/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RELEASE: process.env.npm_package_version,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
