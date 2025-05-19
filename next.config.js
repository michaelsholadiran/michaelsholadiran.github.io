/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-portfolio/" : "",
};

module.exports = nextConfig;
