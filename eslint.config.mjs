import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import eslintNextPlugin from "@next/eslint-plugin-next";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx,mdx}"],
    plugins: {
      next: eslintNextPlugin,
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".vercel/**",
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // MDX files contain markdown content that shouldn't be linted
    "**/*.mdx",
  ]),
]);

export default eslintConfig;
