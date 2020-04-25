// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw "error";
  }

  return num1 * num2;
};

module.exports = { multiply };
