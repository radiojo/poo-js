import MilkCoffee from "./milk-coffee";
import {CoffeeMaker} from "./coffee-maker";

const coffeeMaker = new CoffeeMaker();
coffeeMaker.prepare(new MilkCoffee());
console.log(coffeeMaker.getCoffee());
