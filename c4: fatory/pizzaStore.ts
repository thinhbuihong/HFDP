import {
  NYPizzaTypes,
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStylePepperoniPizza,
  NYStyleVeggiePizza,
} from "./NYStore/nyPizzas";
import Pizza from "./pizza";

export abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
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

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case NYPizzaTypes.cheese:
        return new NYStyleCheesePizza();
      case NYPizzaTypes.veggie:
        return new NYStyleVeggiePizza();
      case NYPizzaTypes.clam:
        return new NYStyleClamPizza();
      case NYPizzaTypes.pepperoni:
        return new NYStylePepperoniPizza();
    }
    return new NYStyleCheesePizza();
  }
}
