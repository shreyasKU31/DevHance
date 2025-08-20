/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other configurations might be here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // You can add other domains here as well
      // For example, if you use i.pravatar.cc for avatars:
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
