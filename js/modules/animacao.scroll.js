export function initScroll() {
  // Use const em vez de let para variáveis que não são reatribuídas

  const items = document.querySelectorAll(".item");

  // Extraia a função de callback do IntersectionObserver
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      }
    });
  }

  // Crie o IntersectionObserver em uma constante
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 1.0,
  });

  // Use Array.from() para converter o NodeList retornado por querySelectorAll em um array
  // e use o método forEach() do array em vez do loop for
  Array.from(items).forEach((item) => {
    const delay = parseInt(item.dataset.tempo);
    setTimeout(() => {
      observer.observe(item);
    }, delay);
  });
}
