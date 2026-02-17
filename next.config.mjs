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
  // Webpack configuration for MDX with plugins (not used with Turbopack)
  webpack: (config, options) => {
    // Find the MDX loader rule and configure it
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('mdx')) {
        if (rule.use && Array.isArray(rule.use)) {
          rule.use.forEach((loader) => {
            if (loader.loader && loader.loader.includes('@mdx-js/loader')) {
              loader.options = {
                ...loader.options,
                providerImportSource: '@mdx-js/react',
              };
            }
          });
        }
      }
    });
    return config;
  },
};

// Configure MDX
// Note: Due to Turbopack serialization limitations, we cannot use remark/rehype plugins
// in the Next.js config. Instead, we handle formatting and rendering via mdx-components.tsx:
// - GitHub Flavored Markdown (GFM) features like tables work automatically in MDX
// - Mermaid diagrams are handled by the custom Mermaid component
// - Typography and styling are handled by Tailwind Typography plugin
const withMDX = createMDX({
  // Extension options can be configured here if needed
});

export default withMDX(nextConfig);
