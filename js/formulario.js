const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; border-radius:4px; padding:1rem;background: #f7f7f7;'><span style='color:#317a00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente reposdemos em 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; border-radius:4px; padding:1rem;background: #f7f7f7;'><span style='color:#E00000'>Erro no envio</span>, Você pode enviar para o email bikcraft@contato.org</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";
  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

