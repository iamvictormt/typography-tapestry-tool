import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: [
      ".next",
      ".screenshots",
      ".agents",
      ".claude",
      ".windsurf",
      "node_modules",
      "build",
      "src/generated/prisma",
    ],
  },
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
