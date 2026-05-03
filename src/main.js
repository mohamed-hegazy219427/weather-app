import "./styles/style.css";
import { WeatherApiService } from "./services/WeatherApiService.js";
import { WeatherModel } from "./models/WeatherModel.js";
import { ForecastView } from "./views/ForecastView.js";
import { SearchView } from "./views/SearchView.js";
import { AlertView } from "./views/AlertView.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { DEFAULT_CITY, DEFAULT_DAYS } from "./config.js";
import { qs } from "./utils/domHelpers.js";

// Theme toggle
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("weather-theme", theme);
  document.getElementById("theme-icon").className =
    theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}
applyTheme(document.documentElement.dataset.theme ?? "dark");
document.getElementById("theme-toggle").addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  );
});

const apiService = new WeatherApiService();
const model = new WeatherModel(apiService, DEFAULT_CITY, DEFAULT_DAYS);

const forecastView = new ForecastView(qs("#forecast-cards"));
const searchView = new SearchView(qs(".find-location"), qs(".dropdown"));
const alertView = new AlertView(qs(".hero .container"));

const controller = new WeatherController(
  model,
  forecastView,
  searchView,
  alertView,
);
controller.init();
