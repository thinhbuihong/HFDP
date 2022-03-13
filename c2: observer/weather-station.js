"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastDisplay = exports.StatisticsDisplay = exports.CurrentConditionsDisplay = exports.Display = exports.WeatherData = void 0;
class WeatherData {
    constructor(observers = [], temperature = 0, humidity = 0, pressure = 0) {
        this.observers = observers;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        const i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }
    notifyObservers() {
        this.observers.forEach((o) => {
            o.update(this.temperature, this.humidity, this.pressure);
        });
    }
    // getTemperature(){}
    // getHumidity(){}
    // getPressure(){}
    setMeasuerments(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementChanged();
    }
    measurementChanged() {
        this.notifyObservers();
    }
}
exports.WeatherData = WeatherData;
class Display {
    constructor(weatherData, temperate = 0, humidity = 0, pressure = 0) {
        this.weatherData = weatherData;
        this.temperate = temperate;
        this.humidity = humidity;
        this.pressure = pressure;
        weatherData.registerObserver(this);
    }
}
exports.Display = Display;
class CurrentConditionsDisplay extends Display {
    update(temp, humidity, _pressure) {
        this.temperate = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`current condition: ${this.temperate}-${this.humidity}`);
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
class StatisticsDisplay extends Display {
    update(_temp, humidity, pressure) {
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
    display() {
        console.log(`statistics : ${this.humidity}-${this.pressure}`);
    }
}
exports.StatisticsDisplay = StatisticsDisplay;
class ForecastDisplay extends Display {
    update(_temp, _humidity, pressure) {
        this.pressure = pressure;
        this.display();
    }
    display() {
        console.log(`forecast : ${this.pressure}`);
    }
}
exports.ForecastDisplay = ForecastDisplay;
class ThirdPartyDisplay {
    update(temp, humidity, pressure) {
        throw new Error("Method not implemented.");
    }
    display() {
        throw new Error("Method not implemented.");
    }
}
