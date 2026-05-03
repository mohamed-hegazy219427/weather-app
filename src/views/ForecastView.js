export class ForecastView {
  #container;

  constructor(containerEl) {
    this.#container = containerEl;
  }

  render(displayDays) {
    this.#container.innerHTML = displayDays
      .map((d, i) => {
        const tempKey = this.#tempKey(d.tempC);
        return `
        <div class="forecast-card fade-in" data-temp="${tempKey}" style="animation-delay:${i * 0.08}s">
          <div class="forecast-card__header">
            <span class="forecast-card__weekday">${d.weekday}</span>
            <span class="forecast-card__date">${d.date}</span>
          </div>
          <div class="forecast-card__location">${d.location}</div>
          <div class="forecast-card__temp-row">
            <span class="forecast-card__temp temp--${tempKey}">${d.tempC}<sup>°C</sup></span>
            <img class="forecast-card__icon" src="${d.icon}" alt="${d.condition}" />
          </div>
          <div class="forecast-card__condition">${d.condition}</div>
          <div class="forecast-card__stats">
            <span><i class="fa fa-umbrella" aria-hidden="true"></i> ${d.humidity}%</span>
            <span><i class="fa-solid fa-wind"></i> ${d.windKph} km/h</span>
            <span><i class="fa-solid fa-compass"></i> ${d.windDir}</span>
          </div>
        </div>`;
      })
      .join("");
  }

  showLoading() {
    this.#container.innerHTML = Array(3)
      .fill(
        `
        <div class="forecast-card forecast-card--skeleton">
          <div class="skel skel--line skel--w40"></div>
          <div class="skel skel--line skel--w60"></div>
          <div class="skel__row">
            <div class="skel skel--temp"></div>
            <div class="skel skel--icon"></div>
          </div>
          <div class="skel skel--line skel--w50"></div>
          <div class="skel skel--line skel--w80"></div>
        </div>`,
      )
      .join("");
  }

  showError(message) {
    this.#container.innerHTML = `
      <div class="forecast-error">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>${message}</p>
      </div>`;
  }

  #tempKey(temp) {
    if (temp > 35) return "hot";
    if (temp > 25) return "warm";
    if (temp > 15) return "mild";
    if (temp > 5) return "cool";
    return "cold";
  }
}
