/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/webp'],
        unoptimized: true,
    },
    devIndicators: {
        autoPrerender: false,
    },
    // Hide Next.js dev overlay
    reactDevOverlay: false,
    output: 'export',
};

module.exports = nextConfig;
