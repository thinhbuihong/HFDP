"use strict";
exports.__esModule = true;
exports.PizzaStore = void 0;
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        pizza = this.createPizza(type);
        console.log("--- Making a " + pizza.getName() + " ---");
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
