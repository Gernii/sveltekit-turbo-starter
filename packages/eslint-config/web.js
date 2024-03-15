module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
    "eslint-config-turbo",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["unused-imports", "@typescript-eslint", "only-warn"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "prefer-spread": "off",
    "no-case-declarations": "off",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/consistent-type-imports": "warn",

    "@typescript-eslint/no-unnecessary-condition": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-undef": "off",
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "$app/**",
            position: "after",
            group: "builtin",
          },
          {
            pattern: "$env/**",
            position: "after",
            group: "builtin",
          },
          {
            pattern: "$lib/assets/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$lib/components/ui/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$lib/components/icons/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$lib/layouts/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$lib/libs/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$lib/pages/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$lib/utils/**",
            position: "after",
            group: "external",
          },
          {
            pattern: "$i18n/**",
            position: "after",
            group: "external",
          },
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "svelte/no-at-html-tags": "off",
  },
  ignorePatterns: ["*.*js"],
};
