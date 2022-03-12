import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  StatisticsDisplay,
  WeatherData,
} from "./weather-station";

function main() {
  const weatherData: WeatherData = new WeatherData();
  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);
  const forecast = new ForecastDisplay(weatherData);

  weatherData.setMeasuerments(80, 65, 20);
  console.log("=======================");
  weatherData.setMeasuerments(30, 75, 90);
  console.log("=======================");
  weatherData.setMeasuerments(54, 67, 10);
}
main();
