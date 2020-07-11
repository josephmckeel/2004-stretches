// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, tar) => {
  //write code here
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const check = tar - arr[i];
    const find = arr.includes(check);
    if (find) {
      result.push(check);
      result.push(arr[i]);
      console.log(result);
      return result;
    }
  }
  if (result.length === 0) {
    return null;
  }
};

module.exports = { twoNumberSum };
