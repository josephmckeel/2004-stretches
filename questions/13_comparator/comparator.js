//write a func that takes two arg... selectKey and obj
const comparator = (key, obj) => {
  if (!Object.keys(obj[0]).includes(key)) {
    return "incorrect key";
  }
  return obj.sort((a, b) => {
    if (typeof a[key] === "number") {
      return a[key] - b[key];
    }
    if (typeof a[key] === "string") {
      let key1Idx = a[key].toUpperCase().indexOf(" ") + 1;
      let key2Idx = b[key].toUpperCase().indexOf(" ") + 1;
      console.log(key1Idx, key2Idx);
      if (a[key][key1Idx] > b[key][key2Idx]) {
        return 1;
      }
      if (a[key][key1Idx] < b[key][key2Idx]) {
        return -1;
      }
    }
  });
};
module.exports = { comparator };
