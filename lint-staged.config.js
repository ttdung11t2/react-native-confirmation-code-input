'use strict';

module.exports = {
  '**/*.js': ['eslint --fix', 'git add'],
  '**/*.json': ['prettier --write', 'git add'],
};
