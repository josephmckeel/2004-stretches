// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let first = str1.split("");
  let second = str2.split("");
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!first.includes(letter)) {
      return false;
    }
  }
  return true;
};

module.exports = { checkAnagrams };
