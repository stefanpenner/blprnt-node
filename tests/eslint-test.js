'use strict';

const lint = require('mocha-eslint');
const path = require('path');

lint([
  path.join(__dirname, '../*.js'),
  path.join(__dirname, '../files/**/*.js'),
  path.join(__dirname, '**/*-test.js'),
]);
