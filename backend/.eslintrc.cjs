module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'commonjs',
  },

  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    eqeqeq: 'off',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
  },

  ignorePatterns: ['node_modules/**'],

  overrides: [
    {
      files: ['**/*.js'],
      parserOptions: {
        sourceType: 'commonjs',
      },
    },
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
    },
  ],
}
