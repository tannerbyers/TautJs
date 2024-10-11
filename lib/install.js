const { fetchPackageInfo, analyzePackage } = require('./inspect');
const { exec } = require('child_process');
const ora = require('ora');
const chalk = require('chalk');

async function installPackage(packageName) {
  const spinner = ora('Inspecting package...').start();

  try {
    const packageInfo = await fetchPackageInfo(packageName);

    // Analyze the package metadata and tarball
    const issuesFound = await analyzePackage(packageInfo);
    if (issuesFound.length > 0) {
      spinner.fail(chalk.red(`Potential issues found:\n${issuesFound.join('\n')}`));
      console.log(chalk.yellow('Do you still want to install this package? (y/N)'));
    } else {
      spinner.succeed(chalk.green('No major issues found. Proceeding with installation...'));
      exec(`npm install ${packageName}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
    }
  } catch (error) {
    spinner.fail(chalk.red('Failed to fetch package info.'));
    console.error(error);
  }
}

module.exports = { installPackage };
