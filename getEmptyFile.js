const path = require('path');

const getEmptyFile = (isComponent = false) =>
  path.join(__dirname, isComponent ? 'EmptyComponent.tsx' : 'empty.js');

const getEmptyPageForSandboxMode = () =>
  path.join(__dirname, 'EmptyPageSandboxMode.tsx');

module.exports.getEmptyFile = getEmptyFile;
module.exports.getEmptyPageForSandboxMode = getEmptyPageForSandboxMode;
