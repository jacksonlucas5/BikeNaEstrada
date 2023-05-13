export default class Scroll {
  constructor(selector) {
    this.selector = document.querySelectorAll(selector);
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: 1.0,
      }
    );
  }

  handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      }
    });
  }

  eventoObserve() {
    Array.from(this.selector).forEach((item) => {
      const delay = parseInt(item.dataset.tempo);
      setTimeout(() => {
        this.observer.observe(item);
      }, delay);
    });
  }

  init() {
    this.eventoObserve();
  }
}

