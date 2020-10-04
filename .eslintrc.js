module.exports = {
  root: true,
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
      "module.exports",
      { allowBatchAssign: false },
    ],
    // one newline is enough for everyone
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    // require('vue') will cause this rule to warn - because it is not a direct
    // dependency of this package.
    "node/no-extraneous-require": [
      "error",
      {
        allowModules: ["vue"],
      },
    ],
    // Rules that were already here…
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
  },
  env: {
    node: true,
    es6: true,
    commonjs: true,
  },
  overrides: [
    Object.assign(
      {
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
            "module.exports",
            { allowBatchAssign: false },
          ],
          // one newline is enough for everyone
          "no-multiple-empty-lines": [
            "error",
            {
              max: 1,
              maxEOF: 0,
              maxBOF: 0,
            },
          ],

          // Rules that were already here…
          "node/prefer-global/buffer": ["error", "always"],
          "node/prefer-global/console": ["error", "always"],
          "node/prefer-global/process": ["error", "always"],
          "node/prefer-global/url-search-params": ["error", "always"],
          "node/prefer-global/url": ["error", "always"],
        },
        files: ["**/*.test.js"],
        env: { jest: true },
        plugins: ["jest"],
      },
      // eslint-disable-next-line node/no-unpublished-require
      require("eslint-plugin-jest").configs.recommended
    ),
  ],
}
