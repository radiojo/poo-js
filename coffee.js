class Coffee {
    #coffee;

    constructor(coffeeQuantity) {
        this.#coffee = coffeeQuantity;
    }

    getCoffeeQuantity() {
        return this.#coffee;
    }
}

module.exports = Coffee;
