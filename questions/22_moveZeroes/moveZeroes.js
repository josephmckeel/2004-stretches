//I tried a for loop and a map and it keeeps stopping and not running through the whole arr

const moveZeroes = (arr) => {
  //YOUR CODE HERE
  const zero = [];
  arr.map((curr) => {
    if (curr === 0) {
      arr.shift();
      zero.push(0);
      console.log(zero, arr);
    }
  });
  while (zero.length > 0) {
    arr.push(0);
    zero.pop();
  }
  return arr;
};

module.exports = { moveZeroes };
