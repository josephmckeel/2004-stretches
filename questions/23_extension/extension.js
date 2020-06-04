//write a function that takes a function, and makes it callable with two invocations

const extensions = (func) => {
  if (typeof func !== "function") {
    throw new Error("must pass in function");
  }
  return function (a) {
    if (typeof a !== "number") {
      throw new Error("a must be a number");
    }
    return function (b) {
      if (typeof b !== "number") {
        throw new Error("b must be a number");
      }
      return func(a, b);
    };
  };
};

module.exports = { extensions };
