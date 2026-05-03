export class WeatherModel {
  #city;
  #days;
  #forecast = null;
  #apiService;
  #listeners = [];

  constructor(apiService, defaultCity, defaultDays) {
    this.#apiService = apiService;
    this.#city = defaultCity;
    this.#days = defaultDays;
  }

  async load(city, days) {
    this.#city = city ?? this.#city;
    this.#days = days ?? this.#days;
    this.#forecast = await this.#apiService.getForecast(this.#city, this.#days);
    this.#notify();
  }

  getState() {
    return { city: this.#city, days: this.#days, forecast: this.#forecast };
  }

  onChange(callback) {
    this.#listeners.push(callback);
  }

  #notify() {
    this.#listeners.forEach(fn => fn(this.getState()));
  }
}
