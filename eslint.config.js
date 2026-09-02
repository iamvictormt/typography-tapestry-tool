import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: [".next", "node_modules", "build"],
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
