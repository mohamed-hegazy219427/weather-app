export class SearchView {
  #input;
  #button;
  #dropdownItems;
  #days = 3;

  constructor(formEl, dropdownEl) {
    this.#input = formEl.querySelector('#search');
    this.#button = formEl.querySelector('#submit');
    this.#dropdownItems = dropdownEl.querySelectorAll('.dropdown-item');
  }

  onSearch(callback) {
    this.#button.addEventListener('click', () => this.#emit(callback));
    this.#input.addEventListener('keyup', e => {
      if (e.code === 'Enter') this.#emit(callback);
    });
    this.#dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        this.#days = Number(item.value);
        this.#emit(callback);
      });
    });
  }

  #emit(callback) {
    const city = this.#input.value.trim();
    if (!city) return;
    callback({ city, days: this.#days });
  }
}
