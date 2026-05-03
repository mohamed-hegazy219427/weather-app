export class AlertView {
  #el;

  constructor(containerEl) {
    this.#el = document.createElement('div');
    this.#el.className = 'alert-container mt-2';
    containerEl.prepend(this.#el);
  }

  show(message, type = 'danger') {
    this.#el.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
  }

  clear() {
    this.#el.innerHTML = '';
  }
}
