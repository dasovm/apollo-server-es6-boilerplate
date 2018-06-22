module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'prefer-destructuring': ["error", {
      "array": false,
      "object": true
    }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    camelcase: 0,
    'arrow-parens': ['error', 'as-needed'],
    'forbid-prop-types': [0, { forbid: [] }],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['ensureIndex', '_id', '_schemaKeys', '_', '_typeMap', '_id'],
      },
    ],
    'new-cap': [
      'error',
      {
        capIsNewExceptions: [],
        newIsCapExceptions: [],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 'off',
    'no-warning-comments': [
      1,
      { terms: ['fixme', 'todo', 'hack'], location: 'start' },
    ],
    'no-unused-expressions': 0,
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'global-require': 0,
    'no-warning-comments': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 'off',
  },
  globals: {
    Assets: true,
    sleep: 1,
  },
};