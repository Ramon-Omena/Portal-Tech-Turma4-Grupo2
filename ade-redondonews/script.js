function leiaMais(){
  var pontos = document.getElementById("pontos");
  var maisTexto = document.getElementById("mais");
  var btnLeiaMais = document.getElementById("btnLeiaMais");

  if(pontos.style.display === "inline"){
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnLeiaMais.innerHTML = "Leia Menos";
  }
  else {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnLeiaMais.innerHTML = "Leia Mais";
  }
  function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
    label.classList.add("required-popup");
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");

    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");

    input.classList.add("error");
    input.classList.remove("correct");
}

// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel);

// Validar valor do input
nomeInput.addEventListener("change", (e)=> {
    let valor = e.target.value

    if(valor.length < 4){
      // Adicionar estilos dinâmicos se o valor tiver menos de 4 caracteres
    nomeHelper.innerText = "Seu nome precisa ter 4 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper)
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nomeInput, nomeHelper);
    inputsCorretos.nome = true;
    }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    }
})

// ---------- VALIDAÇÃO MENSAGEM ---------- //
let msgInput = document.getElementById("mensagem");
let msgLabel = document.querySelector('label[for="mensagem"]');
let msgHelper = document.getElementById("msg-helper");

togglePopup(msgInput, msgLabel);

// Validar valor da textarea
msgInput.addEventListener("change", (e)=> {
    let valor = e.target.value

    if(valor.length < 8){
      // Adicionar estilos dinâmicos se o valor tiver menos de 8 caracteres
    msgHelper.innerText = "Sua mensagem precisa ter 8 ou mais caracteres";
    estilizarInputIncorreto(msgInput, msgHelper)
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(msgInput, msgHelper);
    inputsCorretos.msg = true;
    }
})

let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
nome: false,
email: false,
msg: false
}
btnSubmit.addEventListener("click", (e)=>{
if(inputsCorretos.nome == false ||
    inputsCorretos.email == false ||
    inputsCorretos.msg == false) {
    e.preventDefault();
    console.log(inputsCorretos);
    alert("É necessário preencher todos os campos corretamente!")
    } else {
    alert("Mensagem enviada com sucesso!");
    }
})
}

