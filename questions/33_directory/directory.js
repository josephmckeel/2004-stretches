//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  const final = {};

  const func = (curr, next) => {
    if (typeof curr !== "object" || Array.isArray(curr)) {
      return (final[next] = curr);
    }
    for (let key in curr) {
      func(curr[key], next ? next + "/" + key : key);
    }
  };
  func(obj, "");

  return final;
};

module.exports = { directory };
