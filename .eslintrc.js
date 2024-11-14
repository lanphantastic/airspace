module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "@react-native-community", // Expo/React Native-specific linting
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended", // Enables Prettier rules in ESLint
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
      },
    ],
  },
};
