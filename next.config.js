/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
		domains: ['cdn.sanity.io']
	},
}

module.exports = nextConfig
