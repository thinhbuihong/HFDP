interface FlyBehavior {
  fly: Function;
}
interface QuackBehavior {
  quack: Function;
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("duck flying");
  }
}
class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("can't fly");
  }
}
class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("flying with rocket");
  }
}
class Quack implements QuackBehavior {
  quack() {
    console.log("quacking");
  }
}
class Squeak implements QuackBehavior {
  quack() {
    console.log("rubber dukie squeak");
  }
}
class MuteQuack implements QuackBehavior {
  quack() {
    console.log("can't quack");
  }
}

abstract class Duck {
  constructor(
    protected flyBehavior: FlyBehavior,
    protected quackBehavior: QuackBehavior
  ) {}

  swim() {
    console.log("duck swim");
  }

  abstract display(): void;

  perforQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  // set setFlyBehavior(fb: any) {
  //   if (fb.fly) {
  //     this.flyBehavior = fb;
  //   }
  // }
  set setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  // set setQuackBehavior(qb: any) {
  //   if (qb.quack) {
  //     this.quackBehavior = qb;
  //   }
  // }
}

class MallarDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("display mallarduck");
  }
}

class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  display(): void {
    console.log("display modelduck");
  }
}

function main() {
  const mallard: Duck = new MallarDuck();
  mallard.perforQuack();
  mallard.performFly();

  const model: Duck = new ModelDuck();
  model.performFly();
  model.setFlyBehavior = new FlyRocketPowered();
  model.performFly();
}
main();
