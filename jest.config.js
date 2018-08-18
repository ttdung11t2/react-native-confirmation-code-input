'use strict';

module.exports = {
  preset: 'react-native',
  setupTestFrameworkScriptFile: '<rootDir>.setup-tests.js',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/.setup-tests.js'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
};
