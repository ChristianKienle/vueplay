module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    // Require newlines at the end of each file.
    "eol-last": ["error", "always"],
    // 'const foo = "bar";;' will cause an error
    "no-extra-semi": "error",
    // Extra semicolons cause errors;
    semi: ["error", "never"],
    // 2 spaces
    indent: ["error", 2],
    // Only module.exports = ….
    "node/exports-style": [
      "error",
      "module.exports", {"allowBatchAssign": false}
    ],
    // one newline is enough for everyone
    "no-multiple-empty-lines": ["error", {
      max: 1,
      maxEOF: 0,
      maxBOF: 0
    }],

    // Rules that were already here…
    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"]
  },
  plugins: ["jest"],
  overrides: [
    Object.assign(
      {
        files: ["src/**/__tests__/*.test.js"],
        // env: {jest: true},
        // "jest/globals": true
      },
      require('eslint-plugin-jest').configs.recommended)
  ]
};
