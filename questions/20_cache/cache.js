// see test specs
const results = {};
function cache(func) {
  if (typeof func !== "function") {
    throw new Error("Input must be a function.");
  }
  let cache = {};
  return function (arg) {
    if (Array.from(arguments).length > 1) {
      let allArgs = Array.from(arguments).join("");
      if (Object.keys(cache).includes(String(allArgs))) {
        return cache[String(allArgs)];
      } else {
        cache[String(allArgs)] = func.apply(null, Array.from(arguments));
        return cache[String(allArgs)];
      }
    } else {
      if (Object.keys(cache).includes(String(arg))) {
        return cache[String(arg)];
      } else {
        cache[String(arg)] = func(arg);
        return cache[String(arg)];
      }
    }
  };
}

module.exports = { cache };
