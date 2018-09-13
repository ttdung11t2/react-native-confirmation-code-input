'use strict';

const { resolve } = require('path');

const fs = require('fs-extra');

const folderName = process.argv[2];

if (!folderName) {
  process.exit(1);
}

const OUT_PATH = resolve(__dirname, `${folderName}/`);

const OUT_MODULE_PATH = resolve(
  OUT_PATH,
  'node_modules/react-native-confirmation-code-field/',
);

console.log(' --- ', OUT_PATH);

fs.ensureDirSync(resolve(OUT_MODULE_PATH, './src/'));

fs.copySync(
  resolve(__dirname, '../package.json'),
  resolve(OUT_MODULE_PATH, './package.json'),
);
fs.copySync(resolve(__dirname, '../src'), resolve(OUT_MODULE_PATH, './src'));

fs.copySync(resolve(__dirname, './src'), resolve(OUT_PATH, './src'));
