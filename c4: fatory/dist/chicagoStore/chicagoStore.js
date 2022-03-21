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
exports.ChicagoPizzastore = void 0;
var pizza_1 = require("../pizza");
var pizzaStore_1 = require("../pizzaStore");
var pizza_2 = require("../pizza");
var chicagoPizzaIngredientFactory_1 = require("./chicagoPizzaIngredientFactory");
var ChicagoPizzastore = /** @class */ (function (_super) {
    __extends(ChicagoPizzastore, _super);
    function ChicagoPizzastore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoPizzastore.prototype.createPizza = function (type) {
        var pizza;
        var ingredientFactory = new chicagoPizzaIngredientFactory_1.ChicagoPizzaIngredientFactory();
        switch (type) {
            case pizza_1.pizzaTypes.cheese:
                pizza = new pizza_2.CheesePizza(ingredientFactory);
                pizza.setName("chicago style chesse pizza");
                return pizza;
            case pizza_1.pizzaTypes.veggie:
                pizza = new pizza_2.VeggiePizza(ingredientFactory);
                pizza.setName("chicago style veggie pizza");
                return pizza;
            case pizza_1.pizzaTypes.clam:
                pizza = new pizza_2.ClamPizza(ingredientFactory);
                pizza.setName("chicago tyle clam pizza");
                return pizza;
            case pizza_1.pizzaTypes.pepperoni:
                pizza = new pizza_2.PepperoniPizza(ingredientFactory);
                pizza.setName("chicago style pepperoni pizza");
                return pizza;
        }
    };
    return ChicagoPizzastore;
}(pizzaStore_1.PizzaStore));
exports.ChicagoPizzastore = ChicagoPizzastore;
