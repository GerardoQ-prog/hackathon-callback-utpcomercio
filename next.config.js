/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN: process.env.MAPBOX_GL_ACCESS_TOKEN,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
