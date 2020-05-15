module.exports = () => {
  const argsList = { ...process.argv.slice(2) };
  const argsLength = argsList.length;
  console.log("argsList", argsList);
  console.log("Args Length:", argsLength);

  let cmd = argsList[Object.keys(argsList)[0]] || "help";

  if (cmd === "i") {
    cmd = "install";
  }

  if (cmd === "h") {
    cmd = "help";
  }

  switch (cmd) {
    case "help":
      require("./cmds/help")(argsList);
      break;

    case "install":
      require("./cmds/install")(argsList);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
