// see test specs
const results = [];
function cache(func) {
  // YOUR CODE
  if (Array.isArray(func) || typeof func !== "object") {
    throw new Error("Input must be a function");
  }

  return () => func;
}

module.exports = { cache };
