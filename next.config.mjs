/** @type {import('next').NextConfig} */
const config = {
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
