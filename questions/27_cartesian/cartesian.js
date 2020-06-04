const cartesian = () => {
  const cartesian = (arr) => {
    if (!Array.isArray(arr)) throw new Error("directions must be an array");
    newDir = [0, 0];
    arr.forEach((dir) => {
      switch (dir) {
        case "n":
          newDir[0]++;
          break;
        case "s":
          newDir[0]--;
          break;
        case "e":
          newDir[1]++;
          break;
        case "w":
          newDir[1]--;
          break;
      }
    });
    if (newDir[0] === 0 && newDir[1] === 0)
      return `These directions don't go anywhere!`;
    return newDir.reduce(
      (a, b, idx) => {
        if (idx === 0) {
          if (b === 0) {
            a["n"] = b;
            a["s"] = b;
            return a;
          }
          if (b > 0) {
            a["n"] = b;
          } else if (b < 0) {
            a["s"] = b;
          }
          return a;
        } else if (idx === 1) {
          if (b === 0) {
            a["e"] = b;
            a["w"] = b;
            return a;
          }
          if (b > 0) {
            a["e"] = Math.abs(b);
          } else if (b < 0) {
            a["w"] = Math.abs(b);
          }
          return a;
        }
      },
      { n: 0, s: 0, e: 0, w: 0 }
    );
  };
};

module.exports = { cartesian };
