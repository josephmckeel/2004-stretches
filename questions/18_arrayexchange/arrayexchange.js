//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

// const arrayexchange = (arr1, arr2) => {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//     throw new Error("nope");
//   }
//   let new1 = [];
//   let new2 = [];

//   arr1.map((item) => {
//     new1.unshift(item);
//   });
//   arr2.map((item) => {
//     new2.unshift(item);
//   });

//   arr1 = [...new1];
//   arr2 = [...new2];
// };

const arrayexchange = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("nope");
  }
  let new1 = [];
  let new2 = [];

  for (let i = 0; i < arr1.length; i++) {
    new1.unshift(arr1[i]);
    arr1.shift();
  }
  arr2.forEach((item) => {
    console.log(item);
    new2.unshift(item);
    arr2.shift();
  });
};

module.exports = { arrayexchange };
