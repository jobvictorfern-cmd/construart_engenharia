import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves project sites below the repository name.
  ...(process.env.GITHUB_ACTIONS ? { output: "export" } : {}),
  basePath: process.env.GITHUB_ACTIONS ? "/construart_engenharia" : "",
  ...(process.env.GITHUB_ACTIONS
    ? { typescript: { ignoreBuildErrors: true } }
    : {}),
};

export default nextConfig;
