/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/webp'],
    },
    devIndicators: {
        autoPrerender: false,
    },
    // Hide Next.js dev overlay
    reactDevOverlay: false,
};

module.exports = nextConfig;
