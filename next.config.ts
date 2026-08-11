import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every internal link, canonical tag, and sitemap entry in this site uses
  // a trailing slash (e.g. /concrete-driveways/) — keep Next's routing
  // consistent with that so pages resolve directly instead of redirecting.
  trailingSlash: true,
};

export default nextConfig;
