import { apiKey } from "./config.js";

import {
  displayWeather,
  getChoice,
  getWeather,
  header,
} from "./utils/index.js";

const weather = async () => {
  await header();
  const choice = await getChoice();
  const data = await getWeather(choice, apiKey);
  await displayWeather(data);
};

export default weather;
