"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_station_1 = require("./weather-station");
function main() {
    const weatherData = new weather_station_1.WeatherData();
    const currentDisplay = new weather_station_1.CurrentConditionsDisplay(weatherData);
    const statisticsDisplay = new weather_station_1.StatisticsDisplay(weatherData);
    const forecast = new weather_station_1.ForecastDisplay(weatherData);
    weatherData.setMeasuerments(80, 65, 20);
    console.log("=======================");
    weatherData.setMeasuerments(30, 75, 90);
    console.log("=======================");
    weatherData.setMeasuerments(54, 67, 10);
}
main();
