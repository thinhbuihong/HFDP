export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  //method called to notify all observers when the subject'state has changed
  notifyObservers(): void;
}

export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

export interface DisplayElement {
  display(): void;
}

export class WeatherData implements Subject {
  constructor(
    private observers: Array<Observer> = [],
    private temperature: number = 0,
    private humidity: number = 0,
    private pressure: number = 0
  ) {}

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }
  notifyObservers(): void {
    this.observers.forEach((o) => {
      o.update(this.temperature, this.humidity, this.pressure);
    });
  }

  // getTemperature(){}
  // getHumidity(){}
  // getPressure(){}

  setMeasuerments(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementChanged();
  }

  measurementChanged() {
    this.notifyObservers();
  }
}

export abstract class Display implements DisplayElement, Observer {
  constructor(
    protected weatherData: Subject,
    protected temperate: number = 0,
    protected humidity: number = 0,
    protected pressure: number = 0
  ) {
    weatherData.registerObserver(this);
  }
  abstract update(temp: number, humidity: number, pressure: number): void;
  abstract display(): void;
}

export class CurrentConditionsDisplay extends Display {
  update(temp: number, humidity: number, _pressure: number): void {
    this.temperate = temp;
    this.humidity = humidity;
    this.display();
  }
  display(): void {
    console.log(`current condition: ${this.temperate}-${this.humidity}`);
  }
}

export class StatisticsDisplay extends Display {
  update(_temp: number, humidity: number, pressure: number): void {
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`statistics : ${this.humidity}-${this.pressure}`);
  }
}
export class ForecastDisplay extends Display {
  update(_temp: number, _humidity: number, pressure: number): void {
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`forecast : ${this.pressure}`);
  }
}
class ThirdPartyDisplay implements DisplayElement, Observer {
  update(temp: number, humidity: number, pressure: number): void {
    throw new Error("Method not implemented.");
  }
  display(): void {
    throw new Error("Method not implemented.");
  }
}
