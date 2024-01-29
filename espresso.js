const Coffee = require("./coffee");

class Espresso extends Coffee {
    constructor() {
        super(10);
    }
}

module.exports = Espresso;
