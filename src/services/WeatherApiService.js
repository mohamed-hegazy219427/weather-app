import { API_KEY, BASE_URL } from '../config.js';

export class WeatherApiService {
  #controller = null;

  async getForecast(city, days) {
    this.#controller?.abort();
    this.#controller = new AbortController();

    const params = new URLSearchParams({ key: API_KEY, q: city, aqi: 'yes', days });
    const response = await fetch(`${BASE_URL}/forecast.json?${params}`, {
      signal: this.#controller.signal,
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `Request failed (${response.status})`);
    }

    return response.json();
  }
}
