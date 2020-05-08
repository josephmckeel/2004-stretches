const trim = (obj) => {
  let final = {};
  for (let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      final[key] = obj[key];
    }
  }
  return final;
};

module.exports = { trim };
