/** @type {import('next').NextConfig} */
const repo = "DreamOfFive";

let assetPrefix, basePath;

if (process.env.BUILD_CONFIG === "gh") {
  console.log("building for github-pages");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: "export",
  assetPrefix,
  basePath,
};

module.exports = nextConfig;
