/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design',
    '@ant-design/pro-form',
    'rc-picker',
    'rc-pagination',
    'rc-util',
    'rc-tree',
    'rc-table',
    'antd',
  ],
}
export default nextConfig;
