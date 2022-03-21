import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  PizzaIngredientFactory,
  Sauce,
  Veggies,
} from "./pizzaIngredientFactory";

export abstract class Pizza {
  protected name: string;
  protected dough: Dough;
  protected sauce: Sauce;
  protected veggies: Veggies[] = [];
  protected cheese: Cheese;
  protected pepperoni: Pepperoni;
  protected clam: Clams;

  constructor(protected ingredientFactory: PizzaIngredientFactory) {}

  public abstract prepare(): void;

  public bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  public cut(): void {
    console.log("Cut the pizza into diagonal slices");
  }

  public box(): void {
    console.log("Place pizza in official PizzaStore box");
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public toString(): string {
    // code to display pizza name and ingredients
    let display = `---- ${this.name} ----\n ${this.dough} \n ${this.sauce}\n`;

    this.veggies.forEach((veggie) => {
      display += `${veggie} \n`;
    });

    return display.toString();
  }
}

export enum pizzaTypes {
  cheese = "cheese",
  veggie = "veggie",
  clam = "clam",
  pepperoni = "pepperoni",
}

export class CheesePizza extends Pizza {
  public prepare(): void {
    console.log("preparing ", this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSause();
    this.cheese = this.ingredientFactory.createChesse();
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export class ClamPizza extends Pizza {
  public prepare(): void {
    console.log("preparing ", this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSause();
    this.cheese = this.ingredientFactory.createChesse();
    this.clam = this.ingredientFactory.createClam();
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export class PepperoniPizza extends Pizza {
  public prepare(): void {
    console.log("preparing ", this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSause();
    this.cheese = this.ingredientFactory.createChesse();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export class VeggiePizza extends Pizza {
  public prepare(): void {
    console.log("preparing ", this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSause();
    this.cheese = this.ingredientFactory.createChesse();
    this.veggies = this.ingredientFactory.createVeggies();
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}
