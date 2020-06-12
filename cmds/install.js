fs = require("fs");
const { execSync, exec } = require("child_process");

module.exports = (args) => {
  proceedWithInstallation = false;

  //This installs the tarball file locally in the home dir.
  let npmPackCommand = new Promise(function (resolve, reject) {
    execSync(`npm pack ${args[1]}`, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err);
      } else {
        // the *entire* stdout and stderr (buffered)
        console.log("npm pack done.");
        resolve(stdout);
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          reject(false);
        }
      }
    });
  });

  const findZipFile = new Promise(function (resolve, reject) {
    fs.readdir(process.cwd(), function (err, files) {
      if (err) {
        console.log("ERROR:", err);
        return;
      }
      let newFiles = files.filter(function (elm) {
        return elm.match(/.*\.(tgz)/gi);
      });
      console.log("Tarball file found:", newFiles[0]);
      unpackTarball(newFiles[0]);
    });
  });

  const unpackTarball = (fileName) => {
    return new Promise(function (resolve, reject) {
      exec(
        `tar -xvzf ${fileName} -C ./UnderInspection`,
        (err, stdout, stderr) => {
          if (err) {
            //some err occurred
            console.error(err);
          } else {
            // the *entire* stdout and stderr (buffered)
            console.log("Unpacking done.");
            resolve(true);
            if (stderr) {
              console.log(`stderr: ${stderr}`);
              reject(false);
            }
          }
        }
      );
    });
  };

  (error) => console.log(error); // doesn't run

  if (proceedWithInstallation) {
    exec(`npm install ${args[1]}`, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err);
      } else {
        // the *entire* stdout and stderr (buffered)
        console.log("args:", args);
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }
      }
    });
  } else {
    console.log(`Package not installed`);
    console.log("args:", args);
  }
};
