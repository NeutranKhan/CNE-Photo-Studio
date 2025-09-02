/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
  // Format expects strings like "http://host:port"
	allowedDevOrigins: [
		'http://localhost:3000',
		'http://127.0.0.1:3000',
		'http://192.168.42.185:3000',
	],
};

export default nextConfig;