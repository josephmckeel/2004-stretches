//YOUR CODE HERE
class Box {
  constructor(color, capacity) {
    this.state = {
      color= color,
      capacity= capacity,
      contents= [],
    };
  }
  pack(color, capacity) {
    if (this.state.contents.length >= this.state.capacity) {
      throw new Error("too many boxes");
    }
    const newBox = new Box(color, capacity);
    this.contents.push(newBox);
  }
  unpack() {
    const result = [];
    for (let i = 0; i < this.state.contents.length; i++) {
      if (this.state.contents.length === 0) {
        result.push(this.state.color);
      } else {
        result.push(this.state.color)
        result.push(...this.state.contents[i].unpack());
      }
    }
    return result;
  }
}
module.exports = { Box };
