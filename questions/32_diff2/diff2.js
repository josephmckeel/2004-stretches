// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

//my results are correcrt and match the test but im failing??

const diffTwo = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let now = arr[j];
      if (num - now === 2 || now - num === 2) {
        result.push([num, now]);
      }
    }
  }
  console.log(result);
  return result;
};
module.exports = { diffTwo };
