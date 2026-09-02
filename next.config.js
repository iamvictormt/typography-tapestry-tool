/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [],
    },
    experimental: {
        optimizePackageImports: ["@radix-ui"],
    },
};

export default nextConfig;
