#!/usr/bin/env node

const { program } = require('commander');
const { installPackage } = require('../lib/install');
const { analyzeDependencies } = require('../lib/analyze');

program
  .command('install <package>')
  .description('Install a package after inspecting its security and performance.')
  .action((packageName) => {
    installPackage(packageName);
  });

program
  .command('analyze')
  .description('Analyze existing project dependencies for security and performance issues.')
  .action(() => {
    analyzeDependencies();
  });

program.parse(process.argv);
