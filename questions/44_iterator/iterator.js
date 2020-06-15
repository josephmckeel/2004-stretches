// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here
  constructor(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("wrong");
    }
    this.state = {
      array: arr,
      count: 0,
    };
  }
  next() {
    const { array, count } = this.state;
    const final = { done: false, value: "" };
    if (count !== array.length) {
      final.value = array[count];
      this.state.count++;
    }
    if (count === array.length) {
      final.done = true;
      final.value = array[count];
      this.state.count = 0;
    }
    return final;
  }
}

module.exports = { Iterator };
