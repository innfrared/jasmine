import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  outputFileTracingRoot: projectRoot,
  experimental: {},
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
