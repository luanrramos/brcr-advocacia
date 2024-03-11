const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding-bottom: 20rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>! Em breve entraremos em contato.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding-bottom: 20rem; border-radius: 4px; background: #f7f7f7;'><span 'style=  color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato.brcadvogados@gmail.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const campos = formulario.querySelectorAll("[name]");
  const data = new FormData();

  campos.forEach((campo) => {
    const name = campo.getAttribute("name");
    const value = campo.value;
    data.append(name, value);
  });

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
