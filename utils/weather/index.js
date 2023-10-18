import axios from "axios";
import chalk from "chalk";
import { createSpinner } from "nanospinner";

const getWeather = async (city, key) => {
  const text = chalk.yellowBright("Fetching weather...");
  const successText = chalk.greenBright.bold("Weather fetched successfully");
  const errorText = chalk.redBright.bold("Failed to fetch weather");
  const spinner = createSpinner(text).start();
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const res = await axios.get(url);
    spinner.success({ text: successText });
    return res.data;
  } catch (err) {
    spinner.error({ text: errorText });
    return err;
    // process.exit(1);
  }
};

const displayWeather = async (data) => {
  if (data) {
    console.log(
      "---------------------------------------------------------------------------------------------"
    );
    if (data.name) console.log("City: ", chalk.blue(data.name));
    if (data.sys && data.sys.country)
      console.log("Country: ", chalk.blue(data.sys.country));
    if (data.coord && data.coord.lon)
      console.log("Longitude: ", chalk.yellow(`${data.coord.lon} deg`));
    if (data.coord && data.coord.lat)
      console.log("Latitude: ", chalk.yellow(`${data.coord.lat} deg`));
    if (data.weather && data.weather[0] && data.weather[0].description)
      console.log("Weather: ", chalk.green(data.weather[0].description));
    if (data.main && data.main.temp)
      console.log("Temperature: ", chalk.green(`${data.main.temp} deg C`));
    if (data.main && data.main.temp_max)
      console.log("Max. Temp.: ", chalk.green(`${data.main.temp_max} deg C`));
    if (data.main && data.main.temp_min)
      console.log("Max. Temp.: ", chalk.green(`${data.main.temp_min} deg C`));
    if (data.main && data.main.feels_like)
      console.log("Feels like: ", chalk.green(`${data.main.feels_like} deg C`));
    if (data.wind && data.wind.speed)
      console.log("Wind speed: ", chalk.cyan(`${data.wind.speed} km/h`));
    if (data.clouds && data.clouds.all)
      console.log("Cloudiness: ", chalk.cyan(`${data.clouds.all} %`));
    if (data.main && data.main.humidity)
      console.log("Humidity: ", chalk.yellow(`${data.main.humidity} %`));
    if (data.main && data.main.pressure)
      console.log("Pressure: ", chalk.yellow(`${data.main.pressure} hPa`));
    console.log(
      "---------------------------------------------------------------------------------------------"
    );
  } else {
    console.log("No weather data available");
  }
};

export { getWeather, displayWeather };
