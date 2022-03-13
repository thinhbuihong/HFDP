"use strict";
class Beverage {
    constructor(des) {
        this.description = "unknown beverage";
        if (des) {
            this.description = des;
        }
    }
    getDescription() {
        return this.description;
    }
}
class CondimentDecorator extends Beverage {
}
class Espresso extends Beverage {
    constructor() {
        super("espresso");
    }
    cost() {
        return 1.99;
    }
}
class HouseBlend extends Beverage {
    constructor() {
        super("house blend coffee");
    }
    cost() {
        return 0.89;
    }
}
class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", mocha";
    }
    cost() {
        return 0.2 + this.beverage.cost();
    }
}
class Whip extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", whip";
    }
    cost() {
        return 0.6 + this.beverage.cost();
    }
}
(function main() {
    const beverate = new Espresso();
    console.log(beverate.getDescription() + "$" + beverate.cost());
    let beverage2 = new HouseBlend();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription() + "$" + beverage2.cost());
})();
