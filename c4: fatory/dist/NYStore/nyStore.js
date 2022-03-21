"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NYPizzastore = void 0;
var pizza_1 = require("../pizza");
var pizzaStore_1 = require("../pizzaStore");
var nyPizzaIngredientFactory_1 = require("./nyPizzaIngredientFactory");
var pizza_2 = require("../pizza");
var NYPizzastore = /** @class */ (function (_super) {
    __extends(NYPizzastore, _super);
    function NYPizzastore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYPizzastore.prototype.createPizza = function (type) {
        var pizza;
        var ingredientFactory = new nyPizzaIngredientFactory_1.NYPizzaIngredientFactory();
        switch (type) {
            case pizza_1.pizzaTypes.cheese:
                pizza = new pizza_2.CheesePizza(ingredientFactory);
                pizza.setName("New York style chesse pizza");
                return pizza;
            case pizza_1.pizzaTypes.veggie:
                pizza = new pizza_2.VeggiePizza(ingredientFactory);
                pizza.setName("new york style veggie pizza");
                return pizza;
            case pizza_1.pizzaTypes.clam:
                pizza = new pizza_2.ClamPizza(ingredientFactory);
                pizza.setName("NY tyle clam pizza");
                return pizza;
            case pizza_1.pizzaTypes.pepperoni:
                pizza = new pizza_2.PepperoniPizza(ingredientFactory);
                pizza.setName("NY style pepperoni pizza");
                return pizza;
        }
    };
    return NYPizzastore;
}(pizzaStore_1.PizzaStore));
exports.NYPizzastore = NYPizzastore;
