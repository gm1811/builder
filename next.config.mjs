/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/builder',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
