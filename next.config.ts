import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
    browserToTerminal: "warn",
  },
  typedRoutes: true,
  experimental: {
    mcpServer: true,
    typedEnv: true,
    turbopackRustReactCompiler: true,
  },
};

export default nextConfig;
