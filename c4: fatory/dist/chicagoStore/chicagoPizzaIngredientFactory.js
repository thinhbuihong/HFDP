"use strict";
exports.__esModule = true;
exports.FreshClams = exports.SlicedPepperoni = exports.RedPepper = exports.Mushroom = exports.Onion = exports.Garlic = exports.ReggianoCheese = exports.MarinaraSauce = exports.ThinCrustDough = exports.ChicagoPizzaIngredientFactory = void 0;
var ChicagoPizzaIngredientFactory = /** @class */ (function () {
    function ChicagoPizzaIngredientFactory() {
    }
    ChicagoPizzaIngredientFactory.prototype.createDough = function () {
        return new ThinCrustDough();
    };
    ChicagoPizzaIngredientFactory.prototype.createSause = function () {
        return new MarinaraSauce();
    };
    ChicagoPizzaIngredientFactory.prototype.createChesse = function () {
        return new ReggianoCheese();
    };
    ChicagoPizzaIngredientFactory.prototype.createVeggies = function () {
        var veggies = [new Garlic(), new Onion(), new RedPepper()];
        return veggies;
    };
    ChicagoPizzaIngredientFactory.prototype.createPepperoni = function () {
        return new SlicedPepperoni();
    };
    ChicagoPizzaIngredientFactory.prototype.createClam = function () {
        return new FreshClams();
    };
    return ChicagoPizzaIngredientFactory;
}());
exports.ChicagoPizzaIngredientFactory = ChicagoPizzaIngredientFactory;
var ThinCrustDough = /** @class */ (function () {
    function ThinCrustDough() {
    }
    return ThinCrustDough;
}());
exports.ThinCrustDough = ThinCrustDough;
var MarinaraSauce = /** @class */ (function () {
    function MarinaraSauce() {
    }
    return MarinaraSauce;
}());
exports.MarinaraSauce = MarinaraSauce;
var ReggianoCheese = /** @class */ (function () {
    function ReggianoCheese() {
    }
    return ReggianoCheese;
}());
exports.ReggianoCheese = ReggianoCheese;
var Garlic = /** @class */ (function () {
    function Garlic() {
    }
    return Garlic;
}());
exports.Garlic = Garlic;
var Onion = /** @class */ (function () {
    function Onion() {
    }
    return Onion;
}());
exports.Onion = Onion;
var Mushroom = /** @class */ (function () {
    function Mushroom() {
    }
    return Mushroom;
}());
exports.Mushroom = Mushroom;
var RedPepper = /** @class */ (function () {
    function RedPepper() {
    }
    return RedPepper;
}());
exports.RedPepper = RedPepper;
var SlicedPepperoni = /** @class */ (function () {
    function SlicedPepperoni() {
    }
    return SlicedPepperoni;
}());
exports.SlicedPepperoni = SlicedPepperoni;
var FreshClams = /** @class */ (function () {
    function FreshClams() {
    }
    return FreshClams;
}());
exports.FreshClams = FreshClams;
