#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit',input:'y\n' });
  } catch (e) {
    console.error('Failed to execute ${command}', e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Atik203/Node.js-Express.js-MongoDb-Mongoose-Project-Template ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(
  'Congratulations! You are ready. Follow the following commands to start'
);
console.log(`cd ${repoName} && yarn start:dev`);