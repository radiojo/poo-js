const Coffee = require("./coffee");

class MilkCoffee extends Coffee {
    #milk = 10;

    constructor() {
        super(20);
    }

    getMilkQuantity() {
        return this.#milk;
    }
}

module.exports = MilkCoffee;
