export function accordionList() {
  const accordionList = document.querySelectorAll(".perguntas-frequentes dt");

  function onClick(event) {
    event.target.classList.toggle("ativo");
    const dd = event.target.nextElementSibling;
    dd.classList.toggle("ativo");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", onClick);
  });


}
