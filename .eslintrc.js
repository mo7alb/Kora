export default {
   env: {
      browser: false,
      es2021: true,
   },
   extends: ["eslint:recommended", "plugin:react/recommended"],
   overrides: [],
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: ["react"],
   rules: {
      indent: ["error", "tab"],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "error",
   },
};
