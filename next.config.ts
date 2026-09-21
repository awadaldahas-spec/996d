import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger / generic Node hosting serves images through the Node runtime.
  // Cloudflare's image optimizer is not available there, so keep images
  // unoptimized unless a dedicated loader is configured.
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

// The Cloudflare dev bindings are only loaded when explicitly targeting
// Cloudflare. Importing this package unconditionally breaks `next build`
// on hosts where it is not installed (e.g. Hostinger Node.js).
if (process.env.NODE_ENV === "development" && process.env.CF_DEV === "1") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) =>
    initOpenNextCloudflareForDev()
  );
}

export default nextConfig;
