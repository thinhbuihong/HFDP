import { Pizza, pizzaTypes } from "./pizza";

export abstract class PizzaStore {
  public orderPizza(type: pizzaTypes): Pizza {
    let pizza: Pizza;
    pizza = this.createPizza(type);

    console.log("--- Making a " + pizza.getName() + " ---");
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}
