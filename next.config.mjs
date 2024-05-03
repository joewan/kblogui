/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design',
    'rc-picker',
    'rc-pagination',
    'rc-util',
    'rc-tree',
    'rc-table',
    'antd',
  ],
}
export default nextConfig;
