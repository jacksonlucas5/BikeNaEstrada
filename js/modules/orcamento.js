export default function initOrcamento() {
  // Ativar Itens do Orçamento
  const parametros = new URLSearchParams(location.search);

  function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
      elemento.checked = true;
    }
  }

  parametros.forEach(ativarProduto);
}
