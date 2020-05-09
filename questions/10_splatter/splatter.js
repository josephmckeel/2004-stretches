//write the splatter function
const splatter = (...args) => {
  let vals = [];
  for (let i = 0; i < args.length; i++) {
    vals.push(...Object.values(args[i]));
  }
  return vals.reduce((acc, val) => {
    acc = acc + val;
    return acc;
  }, 0);
};
module.exports = { splatter };
