import { ChicagoPizzastore } from "./chicagoStore/chicagoStore";
import { NYPizzastore } from "./NYStore/nyStore";
import { pizzaTypes } from "./pizza";

function main() {
  const nyStore = new NYPizzastore();
  const chicagoStore = new ChicagoPizzastore();

  let pizza = nyStore.orderPizza(pizzaTypes.cheese);
  console.log("Ethan ordered a " + pizza.getName() + "\n");

  pizza = chicagoStore.orderPizza(pizzaTypes.cheese);
  console.log("Joel ordered a " + pizza.getName() + "\n");

  pizza = nyStore.orderPizza(pizzaTypes.clam);
  console.log("Ethan ordered a " + pizza.getName() + "\n");

  pizza = chicagoStore.orderPizza(pizzaTypes.clam);
  console.log("Joel ordered a " + pizza.getName() + "\n");

  pizza = nyStore.orderPizza(pizzaTypes.pepperoni);
  console.log("Ethan ordered a " + pizza.getName() + "\n");

  pizza = chicagoStore.orderPizza(pizzaTypes.pepperoni);
  console.log("Joel ordered a " + pizza.getName() + "\n");

  pizza = nyStore.orderPizza(pizzaTypes.veggie);
  console.log("Ethan ordered a " + pizza.getName() + "\n");

  pizza = chicagoStore.orderPizza(pizzaTypes.veggie);
  console.log("Joel ordered a " + pizza.getName() + "\n");
}
main();
