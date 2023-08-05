/** @type {import('next').NextConfig} */
const repo = 'DreamOfFive';
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    output: 'export',
}

if(process.env.BUILD_SOURCE==='gh'){
    nextConfig.assetPrefix = assetPrefix;
    nextConfig.basePath =  basePath;
}

module.exports = nextConfig
