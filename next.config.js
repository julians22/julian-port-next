/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "pub-efc1edc293984f03ae656bde9e2e3f9a.r2.dev",
      "raw.githubusercontent.com",
      "www.notion.so",
    ],
  },
};

module.exports = nextConfig;
