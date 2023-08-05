/** @type {import('next').NextConfig} */
const repo = 'DreamOfFive';
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    output: 'export',
}

if(process.env.NODE_ENV==='gh'){
    // nextConfig.assetPrefix = assetPrefix;
    // nextConfig.basePath =  basePath;
}

module.exports = nextConfig
