/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  let newStr = str.toString().split().reduce();
  let reverse = [];
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    reverse.unshift(newStr[i]);
  }
  if (newStr.length !== reverse.length) {
    return false;
  }

  for (let i = newStr.length - 1; i < newStr.length; i--) {
    if (newStr[i] !== reverse[count]) {
      return false;
    }
    count++;
  }

  return true;
};

module.exports = { validPalindrome };
