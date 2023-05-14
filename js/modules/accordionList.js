export default class AccordionList {
  constructor(accordionList, classe) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.onClick = this.onClick.bind(this);
    this.classe = classe;
  }

  onClick(event) {
    event.target.classList.toggle(this.classe);
    const dd = event.target.nextElementSibling;
    dd.classList.toggle(this.classe);
  }

  eventAccordion() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", this.onClick);
    });
  }

  init() {
    if (this.accordionList.length) {
      this.eventAccordion();
    }
  }
}
