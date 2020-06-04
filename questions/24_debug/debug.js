//YOU WILL BE EDITING THIS CODE

class CoffeeShop {
  constructor() {
    this.pendingOrders = [];
    this.completedOrders = [];
    this.menu = ["mocha", "latte", "flat-white", "drip", "espresso"];
  }

  inputOrder(str) {
    this.pendingOrders.push(str);
  }

  makeCoffee() {
    this.completedOrders.push(this.pendingOrders.shift());
  }

  printMenu() {
    return this.menu;
  }
}

module.exports = { CoffeeShop };
