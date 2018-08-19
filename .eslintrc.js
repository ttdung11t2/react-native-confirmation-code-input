'use strict';

module.exports = {
  extends: ['@exeto/eslint-config/node', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
