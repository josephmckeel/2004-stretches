const fizzBuzz = (num) => {
  if (num < 0 || typeof num !== "number" || num % 1 !== 0) {
    throw new Error("invalid number");
  }

  let final = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      final.push("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      final.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      final.push("FizzBuzz");
    } else final.push(i);
  }

  return final;
};
module.exports = { fizzBuzz };
