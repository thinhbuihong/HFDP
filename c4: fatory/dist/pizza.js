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
exports.VeggiePizza = exports.PepperoniPizza = exports.ClamPizza = exports.CheesePizza = exports.pizzaTypes = exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(ingredientFactory) {
        this.ingredientFactory = ingredientFactory;
        this.veggies = [];
    }
    Pizza.prototype.bake = function () {
        console.log("Bake for 25 minutes at 350");
    };
    Pizza.prototype.cut = function () {
        console.log("Cut the pizza into diagonal slices");
    };
    Pizza.prototype.box = function () {
        console.log("Place pizza in official PizzaStore box");
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    Pizza.prototype.setName = function (name) {
        this.name = name;
    };
    Pizza.prototype.toString = function () {
        // code to display pizza name and ingredients
        var display = "---- ".concat(this.name, " ----\n ").concat(this.dough, " \n ").concat(this.sauce, "\n");
        this.veggies.forEach(function (veggie) {
            display += "".concat(veggie, " \n");
        });
        return display.toString();
    };
    return Pizza;
}());
exports.Pizza = Pizza;
var pizzaTypes;
(function (pizzaTypes) {
    pizzaTypes["cheese"] = "cheese";
    pizzaTypes["veggie"] = "veggie";
    pizzaTypes["clam"] = "clam";
    pizzaTypes["pepperoni"] = "pepperoni";
})(pizzaTypes = exports.pizzaTypes || (exports.pizzaTypes = {}));
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheesePizza.prototype.prepare = function () {
        console.log("preparing ", this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.cheese = this.ingredientFactory.createChesse();
    };
    CheesePizza.prototype.cut = function () {
        console.log("Cutting the pizza into wedge slices");
    };
    return CheesePizza;
}(Pizza));
exports.CheesePizza = CheesePizza;
var ClamPizza = /** @class */ (function (_super) {
    __extends(ClamPizza, _super);
    function ClamPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClamPizza.prototype.prepare = function () {
        console.log("preparing ", this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.cheese = this.ingredientFactory.createChesse();
        this.clam = this.ingredientFactory.createClam();
    };
    ClamPizza.prototype.cut = function () {
        console.log("Cutting the pizza into wedge slices");
    };
    return ClamPizza;
}(Pizza));
exports.ClamPizza = ClamPizza;
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    function PepperoniPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PepperoniPizza.prototype.prepare = function () {
        console.log("preparing ", this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.cheese = this.ingredientFactory.createChesse();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    };
    PepperoniPizza.prototype.cut = function () {
        console.log("Cutting the pizza into wedge slices");
    };
    return PepperoniPizza;
}(Pizza));
exports.PepperoniPizza = PepperoniPizza;
var VeggiePizza = /** @class */ (function (_super) {
    __extends(VeggiePizza, _super);
    function VeggiePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VeggiePizza.prototype.prepare = function () {
        console.log("preparing ", this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.cheese = this.ingredientFactory.createChesse();
        this.veggies = this.ingredientFactory.createVeggies();
    };
    VeggiePizza.prototype.cut = function () {
        console.log("Cutting the pizza into wedge slices");
    };
    return VeggiePizza;
}(Pizza));
exports.VeggiePizza = VeggiePizza;
