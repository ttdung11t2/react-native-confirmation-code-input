module.exports = {
  preset: 'react-native',
  setupTestFrameworkScriptFile: '<rootDir>.setup-tests.js',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      statements: 90,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.setup-tests.js',
    '(.*)/styles.js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
};
