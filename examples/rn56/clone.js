const { resolve } = require('path');

const fs = require('fs-extra');

const OUT_PATH = resolve(
  __dirname,
  'node_modules/react-native-confirmation-code-field/',
);

fs.ensureDirSync(resolve(OUT_PATH, './src/'));

fs.copySync(
  resolve(__dirname, '../../package.json'),
  resolve(OUT_PATH, './package.json'),
);
fs.copySync(resolve(__dirname, '../../src'), resolve(OUT_PATH, './src'));
