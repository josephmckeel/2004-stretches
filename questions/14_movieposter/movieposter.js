//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  if (arr || arr.length === 0) {
    throw new Error("invalid");
  }
  let length = "";
  let final = "";
  arr.map((item) => {
    if (item.length > length.length) {
      length = length.length + 4;
    }
  });
  for (let i = 0; i < length; i++) {
    length.concat("*");
    if (i === length - 1) {
      length.concat("", "\n");
    }
  }
  arr.map((item) => {
    final.concat("", `* ${item} *\n`);
  });
  for (let i = 0; i < length; i++) {
    length.concat("*");
    if (i === length - 1) {
      length.concat("", "\n");
    }
  }
  return final;
};

module.exports = { movieposter };
