import Pizza from "../pizza";

export enum NYPizzaTypes {
  cheese = "cheese",
  veggie = "veggie",
  clam = "clam",
  pepperoni = "pepperoni",
}

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super(
      "NY Style Sauce and Cheese Pizza",
      "Thin Crust Dough",
      "Marinara Sauce",
      ["Grated Reggiano Cheese"]
    );
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export class NYStyleClamPizza extends Pizza {
  constructor() {
    super("NY Style Clam Pizza", "Thin Crust Dough", "Marinara Sauce", [
      "Grated Reggiano Cheese",
      "Fresh Clams from Long Island Sound",
    ]);
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super("NY Style Pepperoni Pizza", "Thin Crust Dough", "Plum Tomato Sauce", [
      "Shredded Mozzarella Cheese",
      "Black Olives",
      "Spinach",
      "Eggplant",
      "Sliced Pepperoni",
    ]);
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super(
      "NY Veggie Pizza",
      "Thin Crust Dough",
      "Plum Tomato Sauce",

      ["Shredded Mozzarella Cheese", "Black Olives", "Spinach", "Eggplant"]
    );
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}
