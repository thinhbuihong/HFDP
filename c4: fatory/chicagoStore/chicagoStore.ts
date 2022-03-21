import { Pizza, pizzaTypes } from "../pizza";
import { PizzaStore } from "../pizzaStore";
import { CheesePizza, ClamPizza, PepperoniPizza, VeggiePizza } from "../pizza";
import { ChicagoPizzaIngredientFactory } from "./chicagoPizzaIngredientFactory";

export class ChicagoPizzastore extends PizzaStore {
  createPizza(type: pizzaTypes): Pizza {
    let pizza: Pizza;

    const ingredientFactory = new ChicagoPizzaIngredientFactory();
    switch (type) {
      case pizzaTypes.cheese:
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName("chicago style chesse pizza");
        return pizza;

      case pizzaTypes.veggie:
        pizza = new VeggiePizza(ingredientFactory);
        pizza.setName("chicago style veggie pizza");
        return pizza;

      case pizzaTypes.clam:
        pizza = new ClamPizza(ingredientFactory);
        pizza.setName("chicago tyle clam pizza");
        return pizza;

      case pizzaTypes.pepperoni:
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.setName("chicago style pepperoni pizza");
        return pizza;
    }
  }
}
