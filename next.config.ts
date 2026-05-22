import type { NextConfig } from "next";
import { withOutstatic } from "outstatic/next-plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rivers.gr",
        pathname: "/**",
      },
    ],
  },
};

export default withOutstatic(nextConfig);
