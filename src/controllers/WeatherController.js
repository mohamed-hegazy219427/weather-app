import { ForecastModel } from '../models/ForecastModel.js';

export class WeatherController {
  #model;
  #forecastView;
  #searchView;
  #alertView;

  constructor(model, forecastView, searchView, alertView) {
    this.#model = model;
    this.#forecastView = forecastView;
    this.#searchView = searchView;
    this.#alertView = alertView;
  }

  async init() {
    this.#searchView.onSearch(({ city, days }) => this.#handleSearch(city, days));
    this.#model.onChange(state => this.#handleModelUpdate(state));
    await this.#load();
  }

  async #handleSearch(city, days) {
    if (!city) {
      this.#alertView.show('Please enter a location.');
      return;
    }
    await this.#load(city, days);
  }

  async #load(city, days) {
    this.#alertView.clear();
    this.#forecastView.showLoading();
    try {
      await this.#model.load(city, days);
    } catch (err) {
      if (err.name === 'AbortError') return;
      this.#forecastView.showError('Could not load weather data. Please try again.');
      this.#alertView.show(err.message);
    }
  }

  #handleModelUpdate(state) {
    if (!state.forecast) return;
    const displayDays = ForecastModel.toDisplayDays(state.forecast);
    this.#forecastView.render(displayDays);
  }
}
