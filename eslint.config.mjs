import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default [
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...(tsPlugin.configs.recommended ? tsPlugin.configs.recommended.rules : {}),
      "@next/next/no-html-link-for-pages": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": "off",
      "no-empty": "off",
    },
  },
];
