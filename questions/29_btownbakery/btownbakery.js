// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (rec, sup) => {
  //enter code here
  if (typeof rec !== "object" || typeof sup !== "object") {
    throw new Error("wrong type");
  }
  const recipe = Object.keys(rec);
  const supplies = Object.keys(sup);
  let count;

  for (let i = 0; i < recipe.length; i++) {
    let curr = recipe[i];

    if (!sup[curr]) {
      return 0;
    }
    let val = Math.floor(sup[curr] / rec[curr]);
    if (i === 0) {
      count = val;
      continue;
    }
    if (count > val) {
      count = val;
    }
  }

  return count;
};

module.exports = { btownbake };
