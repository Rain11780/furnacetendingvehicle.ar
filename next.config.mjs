/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co"
			},
			{
				protocol: "https",
				hostname: "image.furnacetendingvehicle.com"
			}
		]
	}
};

export default nextConfig;
