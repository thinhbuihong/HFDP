abstract class Beverage {
  protected description: string = "unknown beverage";

  constructor(des?: string) {
    if (des) {
      this.description = des;
    }
  }

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class Espresso extends Beverage {
  constructor() {
    super("espresso");
  }

  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super("house blend coffee");
  }

  cost(): number {
    return 0.89;
  }
}

class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", mocha";
  }
  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

class Whip extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", whip";
  }

  cost(): number {
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
