export class SearchView {
  #input;
  #button;
  #toggleBtn;
  #dropdownItems;
  #days = 3;

  constructor(formEl, dropdownEl) {
    this.#input = formEl.querySelector("#search");
    this.#button = formEl.querySelector("#submit");
    this.#toggleBtn = dropdownEl.querySelector('[data-bs-toggle="dropdown"]');
    this.#dropdownItems = dropdownEl.querySelectorAll(".dropdown-item");
    this.#syncDropdown();
  }

  onSearch(callback) {
    this.#button.addEventListener("click", () => this.#emit(callback));
    this.#input.addEventListener("keyup", (e) => {
      if (e.code === "Enter") this.#emit(callback);
    });
    this.#dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.#days = Number(item.value);
        this.#syncDropdown();
        this.#emit(callback);
      });
    });
  }

  #syncDropdown() {
    this.#toggleBtn.textContent =
      this.#days === 1 ? "1 day" : `${this.#days} days`;
    this.#dropdownItems.forEach((item) => {
      const active = Number(item.value) === this.#days;
      item.classList.toggle("active", active);
      item.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  #emit(callback) {
    const city = this.#input.value.trim();
    if (!city) return;
    callback({ city, days: this.#days });
  }
}
