/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    output: "export",
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'nobel.nobelcodelabs.com'
        }]
    }
}

module.exports = nextConfig
