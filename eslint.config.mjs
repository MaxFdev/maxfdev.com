import nextPlugin from "@next/eslint-plugin-next";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const config = [
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier"],
  }),
  // --- Next.js Specific Rules ---
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [".next", "node_modules", "public"],
  },
  // Add custom rules or overrides here
  {
    rules: {},
  },
];

export default config;
