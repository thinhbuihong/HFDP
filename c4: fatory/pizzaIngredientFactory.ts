export interface PizzaIngredientFactory {
  createDough: () => Dough;
  createSause: () => Sauce;
  createChesse: () => Cheese;
  createVeggies: () => Veggies[];
  createPepperoni: () => Pepperoni;
  createClam: () => Clams;
}

export abstract class Dough {}
export abstract class Sauce {}
export abstract class Cheese {}
export abstract class Veggies {}
export abstract class Pepperoni {}
export abstract class Clams {}
