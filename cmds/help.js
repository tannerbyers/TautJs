const menus = {
  main: `
      taut [command] <options>
      help .................. show help menu for a command
      install ............... install dependency via npm
      `,

  install: `
      taut install <options> <packageName>`,
};

module.exports = (args) => {
  const subCmd = args[0] === "help" ? args[1] : args[0];

  console.log(menus[subCmd] || menus.main);
};
