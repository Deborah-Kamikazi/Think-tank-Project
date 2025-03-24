/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // allow res.cloudinary.com to be used for Image Optimization
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            }
        ],
    }
}

module.exports = nextConfig
