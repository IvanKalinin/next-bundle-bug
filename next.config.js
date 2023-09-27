/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const nextConfig = withBundleAnalyzer({});

module.exports = nextConfig;
