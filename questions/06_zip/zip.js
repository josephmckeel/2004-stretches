/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  return objs.reduce((acc, item) => {
    for (let prop in item) {
      acc[prop] = acc[prop] + item[prop] || item[prop];
    }
    return acc;
  }, {});
}

module.exports = { zip };
