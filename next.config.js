/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.DEPLOY_TARGET === "github" ? "export" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: process.env.DEPLOY_TARGET === "github" ? "/my-portfolio" : "",
  assetPrefix: process.env.DEPLOY_TARGET === "github" ? "/my-portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.DEPLOY_TARGET === "github" ? "/my-portfolio" : "",
  },
};

module.exports = nextConfig;
