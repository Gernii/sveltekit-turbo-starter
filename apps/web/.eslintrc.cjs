/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: ["@repo/eslint-config/web.js"],
  parserOptions: {
    project: true,
  },
};
