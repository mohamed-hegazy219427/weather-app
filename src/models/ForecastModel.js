import { WEEKDAYS } from "../config.js";

export class ForecastModel {
  static toDisplayDays(data) {
    const baseDay = new Date().getDay();
    return data.forecast.forecastday.map((day, i) => ({
      weekday: WEEKDAYS[(baseDay + i) % 7],
      date: day.date,
      location: data.location.name,
      tempC: day.day.avgtemp_c,
      condition: day.day.condition.text,
      icon: `https://cdn.weatherapi.com${day.day.condition.icon.replace(/^.*\/weather/, "/weather")}`,
      humidity: day.day.avghumidity,
      windKph: day.day.maxwind_kph,
      windDir: day.hour[0].wind_dir,
    }));
  }
}
