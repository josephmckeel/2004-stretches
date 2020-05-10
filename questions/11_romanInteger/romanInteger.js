//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  let final = [];
  let count = num.toString();
  if (num <= 0) {
    throw new Error("invalid number");
  }
  while (count > 0) {
    console.log(count, final);
    let place = count[0];
    if (count.length >= 4) {
      final.push("M");
      count = (count - 1000).toString();
      continue;
    }
    if (count.length === 3) {
      if (place === "9") {
        final.push("CM");
        count = (count - `${place}00`).toString();
      } else if (place === "4") {
        final.push("CD");
        count = (count - `${place}00`).toString();
      } else if (place === "5") {
        final.push("D");
        count = (count - `${place}00`).toString();
      } else {
        final.push("C");
        count = (count - 100).toString();
      }
      continue;
    }
    if (count.length === 2) {
      if (place === "9") {
        final.push("XC");
        count = (count - `${place}0`).toString();
      } else if (place === "4") {
        final.push("XL");
        count = (count - `${place}0`).toString();
      } else if (place === "5") {
        final.push("L");
        count = (count - `${place}0`).toString();
      } else {
        final.push("X");
        count = (count - 10).toString();
      }
      continue;
    }
    if (count.length === 1) {
      if (place === "9") {
        final.push("IX");
        count = (count - `${place}`).toString();
      } else if (place === "4") {
        final.push("IV");
        count = (count - `${place}`).toString();
      } else if (place === "5") {
        final.push("V");
        count = (count - `${place}`).toString();
      } else {
        final.push("I");
        count = (count - 1).toString();
      }
      continue;
    }
  }
  return final.join("");
};

module.exports = { romanInteger };
