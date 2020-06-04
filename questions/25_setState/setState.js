// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.history = [];
  }
  setState(newState) {
    this.history.push(this.state);
    let key = Object.keys(newState)[0];
    let val = newState[key];
    return Object.keys(this.state).reduce((a, b) => {
      if (b === key) {
        a[b] = val;
        return a;
      } else {
        a[b] = this.state[b];
        return a;
      }
    }, {});
  }
}

module.exports = { StatefulThing };
