/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd
    ? '<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">'
    : undefined,
};

module.exports = nextConfig;
