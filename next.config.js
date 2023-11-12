/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['lucide-react'],
    // output: "export",
    images:{
        unoptimized: true,
        remotePatterns:[{
            protocol: 'https',
            hostname: 'nobel.nobelcodelabs.com'
        }]
    }
}

module.exports = nextConfig
