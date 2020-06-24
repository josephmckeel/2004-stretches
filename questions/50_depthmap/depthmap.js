//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated
let count = 0;

const recordDepth = (obj) => {
  //write code here
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("not an object");
  }
  for (key in obj) {
    if (typeof obj[key] !== "object") {
      obj[key].depth = count;
      count = 0;
      return obj;
    }
    if (typeof obj[key] === "object") {
      obj[key].depth = count;
      count++;
      recordDepth(obj[key]);
    }
  }
  return obj;
};

module.exports = { recordDepth };
