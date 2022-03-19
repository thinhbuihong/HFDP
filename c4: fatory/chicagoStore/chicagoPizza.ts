import Pizza from "../pizza";

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super(
      "Chicago Style Deep Dish Cheese Pizza",
      "Extra Thick Crust Dough",
      "Plum Tomato Sauce",
      ["Shredded Mozzarella Cheese"]
    );
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}

export class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super(
      "Chicago Style Clam Pizza",
      "Extra Thick Crust Dough",
      "Plum Tomato Sauce",
      ["Shredded Mozzarella Cheese", "Frozen Clams from Chesapeake Bay"]
    );
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}

export class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super(
      "Chicago Style Pepperoni Pizza",
      "Extra Thick Crust Dough",
      "Plum Tomato Sauce",
      [
        "Shredded Mozzarella Cheese",
        "Black Olives",
        "Spinach",
        "Eggplant",
        "Sliced Pepperoni",
      ]
    );
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}

export class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super(
      "Chicago Deep Dish Veggie Pizza",
      "Extra Thick Crust Dough",
      "Plum Tomato Sauce",
      ["Shredded Mozzarella Cheese", "Black Olives", "Spinach", "Eggplant"]
    );
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}
