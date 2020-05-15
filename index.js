module.exports = () => {
  const argsList = process.argv.slice(2);
  const argsLength = argsList.length;
  console.log("argsList", argsList);
  console.log("Args Length:", argsLength);
};
