const link = document.querySelectorAll(".header-menu a");

function clickLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativar");
  }
}

link.forEach(clickLink);

const parametros = new URLSearchParams(window.location.search);

function ativarProduto(produto) {
  const elemento = document.getElementById(produto);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

/* Perguntas */

const perguntas = document.querySelectorAll(".perguntas-frequentes button");

function eventoPerguntas(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function clickPerguntas(pergunta) {
  pergunta.addEventListener("click", eventoPerguntas);
}

perguntas.forEach(clickPerguntas);

// Galeria Bicicletas //

const bicicletas = document.querySelectorAll(".imagens-bicicletas-interna img");
const galeriaImagem = document.querySelector(".imagens-bicicletas-interna");

function mudouBicicleta(img) {
  const bicicleta = img.currentTarget;

  const media = matchMedia("(min-width:560px)").matches;
  if (media) {
    galeriaImagem.prepend(bicicleta);
  }
}

function eventoBicicleta(img) {
  img.addEventListener("click", mudouBicicleta);
}

bicicletas.forEach(eventoBicicleta);

// Animação //
if (window.SimpleAnime) {
  new SimpleAnime();
}
