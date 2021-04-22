module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-underscore-dangle": "off",
    "no-console": "warn",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "linebreak-style": ["error", "windows"],
    "max-len": ["off", "code"],
  },
};
