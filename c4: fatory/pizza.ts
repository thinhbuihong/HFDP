import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  PizzaIngredientFactory,
  Sauce,
  Veggies,
} from "./pizzaIngredientFactory";

export default abstract class Pizza {
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

  public toString(): string {
    // code to display pizza name and ingredients
    let display = `---- ${this.name} ----\n ${this.dough} \n ${this.sauce}\n`;

    this.veggies.forEach((veggie) => {
      display += `${veggie} \n`;
    });

    return display.toString();
  }
}
