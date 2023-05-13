export default class AccordionList {
  constructor(accordionList) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.target.classList.toggle("ativo");
    const dd = event.target.nextElementSibling;
    dd.classList.toggle("ativo");
  }

  eventAccordion() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", this.onClick);
    });
  }

  init() {
    this.eventAccordion();
  }
}
