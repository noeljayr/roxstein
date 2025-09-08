import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Disables all image optimizations globally
  },
};

export default withNextIntl(nextConfig);
