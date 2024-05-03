/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design',
    'rc-picker',
    'rc-pagination',
    'rc-util',
    'antd',
  ],
}
export default nextConfig;
