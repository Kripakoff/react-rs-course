module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    "react-compiler", "@typescript-eslint", "react", "prettier", "eslint-plugin-react-compiler"
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    "comma-dangle": ["error", "only-multiline"],
    "prettier/prettier": ["error", {"endOfLine": "auto"}],
    'react-compiler/react-compiler': "error",
  },
};
