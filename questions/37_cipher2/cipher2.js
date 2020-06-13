
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

module.exports = { decypher };
