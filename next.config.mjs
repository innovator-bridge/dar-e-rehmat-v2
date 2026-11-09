/** @type {import('next').NextConfig} */
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = { output: 'export', images: { unoptimized: true }, trailingSlash: true, basePath: base || undefined, assetPrefix: base || undefined };
export default nextConfig;
