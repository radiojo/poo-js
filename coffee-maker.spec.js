const CoffeeMaker = require("./coffee-maker");
const MilkCoffee = require("./milk-coffee");

describe('Coffee Maker', () => {
    let coffeeMaker;

    beforeEach(() => {
        coffeeMaker = new CoffeeMaker();
    });

    test('that coffee quantity decrease to 980 if I pour a milk coffee', () => {
        coffeeMaker.prepare(new MilkCoffee());

        expect(coffeeMaker.getCoffee()).toBe(980);
    });
});
