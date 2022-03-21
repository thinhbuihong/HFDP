import { Pizza, pizzaTypes } from "../pizza";
import { PizzaStore } from "../pizzaStore";
import { NYPizzaIngredientFactory } from "./nyPizzaIngredientFactory";
import { CheesePizza, ClamPizza, PepperoniPizza, VeggiePizza } from "../pizza";

export class NYPizzastore extends PizzaStore {
  createPizza(type: pizzaTypes): Pizza {
    let pizza: Pizza;

    const ingredientFactory = new NYPizzaIngredientFactory();
    switch (type) {
      case pizzaTypes.cheese:
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName("New York style chesse pizza");
        return pizza;

      case pizzaTypes.veggie:
        pizza = new VeggiePizza(ingredientFactory);
        pizza.setName("new york style veggie pizza");
        return pizza;

      case pizzaTypes.clam:
        pizza = new ClamPizza(ingredientFactory);
        pizza.setName("NY tyle clam pizza");
        return pizza;

      case pizzaTypes.pepperoni:
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.setName("NY style pepperoni pizza");
        return pizza;
    }
  }
}
