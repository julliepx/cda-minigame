/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cidadealtarp.com"
            }
        ]
    }
};

export default config;
