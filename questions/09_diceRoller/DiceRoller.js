// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, dice) {
    if (sides <= 0 || typeof sides !== "number") {
      throw new Error();
    }
    if (dice <= 0 || typeof dice !== "number") {
      throw new Error();
    }
    this.sides = sides;
    this.number = dice;
    this.history = [];
  }

  roll() {
    let rolls = [];
    for (let i = 0; i < this.number; i++) {
      let roll = Math.ceil(Math.random() * this.sides);
      rolls.push(roll);
    }
    this.history.push(rolls);
    return rolls;
  }
}
module.exports = { DiceRoller };
