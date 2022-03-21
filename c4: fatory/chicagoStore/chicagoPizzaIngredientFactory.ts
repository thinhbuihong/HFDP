import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  PizzaIngredientFactory,
  Sauce,
  Veggies,
} from "../pizzaIngredientFactory";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }
  createSause(): Sauce {
    return new MarinaraSauce();
  }
  createChesse(): Cheese {
    return new ReggianoCheese();
  }
  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [new Garlic(), new Onion(), new RedPepper()];
    return veggies;
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createClam(): Clams {
    return new FreshClams();
  }
}

export class ThinCrustDough implements Dough {}
export class MarinaraSauce implements Sauce {}
export class ReggianoCheese implements Cheese {}
export class Garlic implements Veggies {}
export class Onion implements Veggies {}
export class Mushroom implements Veggies {}
export class RedPepper implements Veggies {}
export class SlicedPepperoni implements Pepperoni {}
export class FreshClams implements Clams {}
