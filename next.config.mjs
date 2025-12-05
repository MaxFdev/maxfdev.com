// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev"; TODO see if this gets updated
import { execSync } from "child_process";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
// if (process.env.NODE_ENV === "development") {
//   await setupDevPlatform();
// }

// Get the last commit date from Git
const getLastCommitDate = () => {
  try {
    return execSync("git log -1 --format=%cd").toString().trim();
  } catch (error) {
    console.error("Error getting last commit date:", error);
    return new Date().toISOString();
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
