/** @type {import('next').NextConfig} */
const path = require('path');

let assetPrefix, basePath, output;

if (process.env.BUILD_CONFIG === "gh") {
  console.log("building for github-pages");
  assetPrefix = process.env.BUILD_PATH;
  basePath = process.env.BUILD_PATH;
  output = "export";
}

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output,
  assetPrefix,
  basePath,
};

module.exports = nextConfig;
