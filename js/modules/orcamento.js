export default class Orcamento {
  constructor() {
    this.parametros = new URLSearchParams(location.search);
  }

  // Ativar Itens do Orçamento
  ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
      elemento.checked = true;
    }
  }

  eventoParametro() {
    this.parametros.forEach((parametro) => {
      this.ativarProduto(parametro);
    });
  }

  init() {
    if (this.parametros) {
      this.eventoParametro();
    }
    return this;
  }
}
