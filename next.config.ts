import type { NextConfig } from "next";
import { SITE_URL } from "./lib/constants";

const canonicalHost = new URL(SITE_URL).host; // "www.concreteprosnashville.com"
const apexHost = canonicalHost.replace(/^www\./, ""); // "concreteprosnashville.com"

const nextConfig: NextConfig = {
  // Every internal link, canonical tag, and sitemap entry in this site uses
  // a trailing slash (e.g. /concrete-driveways/) — keep Next's routing
  // consistent with that so pages resolve directly instead of redirecting.
  trailingSlash: true,

  async redirects() {
    return [
      // The apex→www redirect is also configured at the domain level in
      // Vercel's dashboard, which is what actually serves it in production.
      // That setting lives outside this repo, though, so it's invisible to
      // anyone reading the code and would be lost on a redeploy to a new
      // Vercel project. Codifying it here means the canonical-host rule
      // travels with the app regardless of platform-level configuration.
      {
        source: "/:path*",
        has: [{ type: "host", value: apexHost }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
