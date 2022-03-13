"use strict";
class FlyWithWings {
    fly() {
        console.log("duck flying");
    }
}
class FlyNoWay {
    fly() {
        console.log("can't fly");
    }
}
class FlyRocketPowered {
    fly() {
        console.log("flying with rocket");
    }
}
class Quack {
    quack() {
        console.log("quacking");
    }
}
class Squeak {
    quack() {
        console.log("rubber dukie squeak");
    }
}
class MuteQuack {
    quack() {
        console.log("can't quack");
    }
}
class Duck {
    constructor(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    swim() {
        console.log("duck swim");
    }
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
    set setFlyBehavior(fb) {
        this.flyBehavior = fb;
    }
}
class MallarDuck extends Duck {
    constructor() {
        super(new FlyWithWings(), new Quack());
    }
    display() {
        console.log("display mallarduck");
    }
}
class ModelDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Quack());
    }
    display() {
        console.log("display modelduck");
    }
}
function main() {
    const mallard = new MallarDuck();
    mallard.perforQuack();
    mallard.performFly();
    const model = new ModelDuck();
    model.performFly();
    model.setFlyBehavior = new FlyRocketPowered();
    model.performFly();
}
main();
