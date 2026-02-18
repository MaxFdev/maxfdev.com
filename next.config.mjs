// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev"; TODO see if this gets updated
import { execSync } from "child_process";
import createMDX from "@next/mdx";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
// if (process.env.NODE_ENV === "development") {
//   await setupDevPlatform();
// }

// Get the last commit date from Git in ISO 8601 format with timezone
const getLastCommitDate = () => {
  try {
    return execSync("git log -1 --format=%cI").toString().trim();
  } catch (error) {
    console.error("Error getting last commit date:", error);
    return new Date().toISOString();
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  env: {
    LAST_UPDATED: getLastCommitDate(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
};

// Configure MDX with remark and rehype plugins
// Following Next.js MDX documentation: https://nextjs.org/docs/app/guides/mdx
// Note: Using .mjs format required for ESM-only packages like remark-gfm
const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Optionally provide remark and rehype plugins
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-highlight"],
  },
});

export default withMDX(nextConfig);
