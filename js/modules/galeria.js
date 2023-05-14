export default class Galeria {
  constructor(imagens, galeriaContainer) {
    this.imagens = document.querySelectorAll(imagens);
    this.galeriaContainer = document.querySelector(galeriaContainer);
    this.adicionarEventos = this.adicionarEventos.bind(this);
    this.trocarImagem = this.trocarImagem.bind(this);
  }

  // Define a função para trocar as imagens
  trocarImagem(evento) {
    const imagemClicada = evento.currentTarget;
    const mediaQuery = window.matchMedia("(min-width:330px)");

    // Move a imagem para o início da galeria apenas em telas grandes
    if (mediaQuery.matches) {
      this.galeriaContainer.prepend(imagemClicada);
    }
  }

  // Define a função para adicionar os eventos às imagens
  adicionarEventos(imagem) {
    imagem.addEventListener("click", this.trocarImagem);
  }

  // Adiciona os eventos a todas as imagens
  eventoImagens() {
    this.imagens.forEach((items) => {
      this.adicionarEventos(items);
    });
  }
  init() {
    this.eventoImagens();
  }
}
