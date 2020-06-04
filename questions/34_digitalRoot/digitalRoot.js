/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE

class digitalRoot {
  root(num) {
    let check = num.toString();
    if (check.length === 1) {
      return num;
    } else {
      let adder = 0;
      for (let i = 0; i < check.length; i++) {
        adder = adder + parseInt(check[i]);
      }
      let result = this.root(adder);
      return result;
    }
  }
}

module.exports = { digitalRoot };
