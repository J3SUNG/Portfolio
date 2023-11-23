/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "portfolio";

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // 배포용
  // trailingSlash: true,
  // output: "export",
  // basePath: "/Portfolio",
};
module.exports = nextConfig;
