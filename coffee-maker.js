const MilkCoffee = require("./milk-coffee");

class CoffeeMaker {
    #coffee = 1000;
    #milk = 500;
    #sugar = 200;

    prepare(coffee) {
        if (this.hasCoffee()) {
            this.#coffee = this.#coffee - coffee.getCoffeeQuantity();

            if (coffee instanceof MilkCoffee) {
                this.pourMilk(coffee);
            }
        }
    }

    pourMilk(coffee) {
       this.#milk = this.#milk - coffee.getMilkQuantity();
    }

    hasCoffee() {
        return this.#coffee > 0;
    }

    getCoffee() {
      return this.#coffee;
    }
}

module.exports = CoffeeMaker;
