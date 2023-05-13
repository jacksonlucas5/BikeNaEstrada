export function iniGaleria() {
  const imagens = document.querySelectorAll(".imagens-bicicletas-interna img");
  const galeriaContainer = document.querySelector(
    ".imagens-bicicletas-interna"
  );

  // Define a função para trocar as imagens
  function trocarImagem(evento) {
    const imagemClicada = evento.currentTarget;
    const mediaQuery = window.matchMedia("(min-width:330px)");

    // Move a imagem para o início da galeria apenas em telas grandes
    if (mediaQuery.matches) {
      galeriaContainer.prepend(imagemClicada);
    }
  }

  // Define a função para adicionar os eventos às imagens
  function adicionarEventos(imagem) {
    imagem.addEventListener("click", trocarImagem);
  }

  // Adiciona os eventos a todas as imagens
  imagens.forEach(adicionarEventos);
}
