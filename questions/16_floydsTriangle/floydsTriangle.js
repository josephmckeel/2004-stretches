// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = (n) => {
  if (n === 1) {
    return "1";
  }
  let final = "";
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let count = i;
    let str = "";
    while (count > 0) {
      str = str + `${num}`;
      num++;
      count--;
    }
    if (i === n) {
      final = final + `${str}`;
    }
    if (i !== n) {
      final = final + `${str}\n`;
    }
  }
  return final;
};
module.exports = { floydsTriangle };
