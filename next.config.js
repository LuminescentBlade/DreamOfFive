/** @type {import('next').NextConfig} */

let assetPrefix, basePath;

if (process.env.BUILD_CONFIG === "gh") {
  console.log("building for github-pages");
  assetPrefix = process.env.BUILD_PATH;
  basePath =  process.env.BUILD_PATH;
}

const nextConfig = {
  output: "export",
  assetPrefix,
  basePath,
};

module.exports = nextConfig;
