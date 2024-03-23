/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    transpilePackages: ['lucide-react'],
    // output: "export",
    images:{
        // unoptimized: true,
        remotePatterns:[{
            protocol: 'https',
            hostname: 'nobel.nobelcodelabs.com'
        },{
            protocol: 'https',
            hostname: 'siakad1.nobel.ac.id'
        }]
    }
}

module.exports = nextConfig
