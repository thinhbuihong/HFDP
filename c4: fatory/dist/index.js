"use strict";
exports.__esModule = true;
var chicagoStore_1 = require("./chicagoStore/chicagoStore");
var nyStore_1 = require("./NYStore/nyStore");
var pizza_1 = require("./pizza");
function main() {
    var nyStore = new nyStore_1.NYPizzastore();
    var chicagoStore = new chicagoStore_1.ChicagoPizzastore();
    var pizza = nyStore.orderPizza(pizza_1.pizzaTypes.cheese);
    console.log("Ethan ordered a " + pizza.getName() + "\n");
    pizza = chicagoStore.orderPizza(pizza_1.pizzaTypes.cheese);
    console.log("Joel ordered a " + pizza.getName() + "\n");
    pizza = nyStore.orderPizza(pizza_1.pizzaTypes.clam);
    console.log("Ethan ordered a " + pizza.getName() + "\n");
    pizza = chicagoStore.orderPizza(pizza_1.pizzaTypes.clam);
    console.log("Joel ordered a " + pizza.getName() + "\n");
    pizza = nyStore.orderPizza(pizza_1.pizzaTypes.pepperoni);
    console.log("Ethan ordered a " + pizza.getName() + "\n");
    pizza = chicagoStore.orderPizza(pizza_1.pizzaTypes.pepperoni);
    console.log("Joel ordered a " + pizza.getName() + "\n");
    pizza = nyStore.orderPizza(pizza_1.pizzaTypes.veggie);
    console.log("Ethan ordered a " + pizza.getName() + "\n");
    pizza = chicagoStore.orderPizza(pizza_1.pizzaTypes.veggie);
    console.log("Joel ordered a " + pizza.getName() + "\n");
}
main();
