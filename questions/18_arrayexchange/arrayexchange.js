//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("nope");
  }

  let num1 = arr1.length;
  let num2 = arr2.length;

  for (let i = 0; i < arr1.length; i++) {
    arr2.unshift(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      continue;
    } else {
      arr1.unshift(arr2[i]);
    }
  }
  arr2.splice(num1, num2);
  arr1.splice(num2, num1);
};

module.exports = { arrayexchange };
