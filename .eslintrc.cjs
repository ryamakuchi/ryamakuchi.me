module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'dist', 'build', 'storybook-static', 'coverage'],
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:astro/recommended', 'prettier'],
      env: {
        'astro/astro': true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    {
      files: ['*.tsx'],
      plugins: ['solid'],
      extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:solid/typescript', 'prettier'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['*.stories.*'],
      extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:storybook/recommended', 'prettier'],
    },
  ],
}
