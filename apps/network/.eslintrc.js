module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.js",
    "webpack.config.js",
    "tailwind.config.js",
    "postcss.config.js",
  ],
  parser: "@typescript-eslint/parser",
};
