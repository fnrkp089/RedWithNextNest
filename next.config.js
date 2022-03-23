/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
    TOKENAUTH: process.env.TOKENAUTH,
    SERVER: process.env.SERVER,
    INTIAL: process.env.INTIAL,
    PLATFORM: process.env.PLATFORM,
    MONGODB_URI: process.env.MONGODB_URI 
  }
}

module.exports = nextConfig
