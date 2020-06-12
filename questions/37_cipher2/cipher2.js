<<<<<<< HEAD
const decypher = (str) => {
  const arr = str.split("");
  const nums = [];
  const second = [];
  for (let i = 0; i < str.length; i++) {
    if (typeof arr[i] == "number") {
      nums.push(arr[i]);
    } else {
      if (second.length > 0) {
        break;
      }
      second.push(arr[i]);
    }
  }
  const result = nums.reverse().join("").fromCharCode() + str[str.length - 1];

  return result.concat(second);
=======
const decypher = () => {
  //YOUR CODE HERE
>>>>>>> bdfb2fba8099ed0a786627731280c072cd4a15a0
};
module.exports = { decypher };
