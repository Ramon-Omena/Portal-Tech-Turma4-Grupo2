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
}

