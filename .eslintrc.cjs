module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    // Optional: clean unused imports automatically
    'unused-imports/no-unused-imports': 'error',
    // Example: no console logs
    'no-console': 'warn',
    // Customize other rules as needed
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
