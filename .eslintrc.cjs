module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  settings: { react: { version: 'detect' } },
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
};
