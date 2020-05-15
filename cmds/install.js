const { exec } = require("child_process");

module.exports = (args) => {
  exec(`npm install ${args[1]}`, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log ("args:", args)
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
    }
  });
};
