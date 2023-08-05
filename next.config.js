/** @type {import('next').NextConfig} */

let assetPrefix, basePath, output;

if (process.env.BUILD_CONFIG === "gh") {
  console.log("building for github-pages");
  assetPrefix = process.env.BUILD_PATH;
  basePath = process.env.BUILD_PATH;
  output = "export";
}

const nextConfig = {
  output,
  assetPrefix,
  basePath,
};

module.exports = nextConfig;
