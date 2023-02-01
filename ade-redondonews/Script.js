function leiaMais(){
  var pontos=document.getElementById("pontos");
  var maisTexto=document.getElementById("mais");
  var btnLeiaMais=document.getElementById("btnLeiaMais");

  if(pontos.style.display === "nome"){
    pontos.style.display="inline";
    maisTexto.style.display="nome";
    btnLeiaMais.innerHTML="Leia Mais";
  }else{ 
    pontos.style.display="none";
    maisTexto.style.display="inline";
    btnLeiaMais.innerHTML="Leia Menos";
  }
}