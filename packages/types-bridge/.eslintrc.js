/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/types-bridge.js"],
  parserOptions: {
    project: true,
  },
};
