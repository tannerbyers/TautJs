const axios = require('axios');
const tar = require('tar-fs');
const esprima = require('esprima');

async function fetchPackageInfo(packageName) {
  const url = `https://registry.npmjs.org/${packageName}`;
  const { data } = await axios.get(url);
  return data;
}

async function downloadAndAnalyzeTarball(tarballUrl) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: tarballUrl,
      responseType: 'stream',
    }).then((response) => {
      let totalBytes = 0;
      response.data.on('data', (chunk) => {
        totalBytes += chunk.length;
      });
      response.data.on('end', () => {
        if (totalBytes > 5 * 1024 * 1024) {
          resolve('Package exceeds size limit of 5MB.');
        } else {
          resolve(null);
        }
      });
    }).catch(reject);
  });
}

async function analyzePackage(packageInfo) {
  const tarballUrl = packageInfo.versions[packageInfo['dist-tags'].latest].dist.tarball;
  const issues = [];

  // Analyze tarball size
  const sizeIssue = await downloadAndAnalyzeTarball(tarballUrl);
  if (sizeIssue) issues.push(sizeIssue);

  return issues;
}

module.exports = { fetchPackageInfo, analyzePackage };
