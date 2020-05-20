const delay = async (str, time) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(str);
    }, time);
  });
};

module.exports = { delay };
