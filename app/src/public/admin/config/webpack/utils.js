const path = require('path');
const dotenv = require('dotenv');
const variableExpansion = require('dotenv-expand');
const rootPath = path.join(__dirname, '../../');

const fileEnv = process.env.NODE_ENV ? "" : ".local";
const pathEnv = path.join(rootPath, ".env" + fileEnv);

exports.varsUsingWebpack = () => {
  dotenv.config({ path: pathEnv });
}

exports.createVarsDefinePlugin = () => {
  const newVars = {};
  let envConfig = variableExpansion(dotenv.config({ path: pathEnv })).parsed;
  for (let k in envConfig) {
    newVars['process.env.' + k] = JSON.stringify(envConfig[k]);
  }
  return newVars;
}