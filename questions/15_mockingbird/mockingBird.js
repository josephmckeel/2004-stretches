// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  // YOUR CODE
  let count = n;
  let final = [];
  while (n > 0) {
    final.push(func());
    n--;
  }
  return final;
};

// see test specs to complete this stretch

module.exports = { repeater };
