/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'nobel.nobelcodelabs.com'
        }]
    }
}

module.exports = nextConfig
