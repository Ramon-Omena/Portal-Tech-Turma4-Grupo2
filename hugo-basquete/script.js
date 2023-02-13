/*TABELA MUDA DE COR LINHAS */
var tabela = document.getElementById("tabela")
    
for(var celula in tabela.getElementsByTagName("tr")){
tabela.getElementsByTagName("tr")[celula].onmouseover=function(){this.style.background="#C1EAD2"}
tabela.getElementsByTagName("tr")[celula].onmouseout=function(){this.style.background="#fefefe"}
}
/*---fim---TABELA MUDA DE COR LINHAS */    
    




///testando validacao de submit
/* let btnSubmit = document.querySelector('button[type="submit"]');

btnSubmit.addEventListener("click", (e)=>{
    if (document.getElementById("r1") || document.getElementById("r2").checked) {
    e.preventDefault();
    
    alert("Selecione um time!!!")
    } else {
    alert("Mensagem enviada com sucesso!");
    }
}) */

////teste tres falhou///
/* $(function() {
    $("#btn_enviar").click(function() {
       $(".caixa").css("background-color", "white");
 
       /// validação 
       if(!$("input[name='time']:checked").length){
       alert("Marque um TIME");
       return false;
       }
 
       alert("Formulário validado!");
       return true;
    });
 }); */



 /* testando submit  */


/*  document.getElementById("btn_enviar").onclick = function() {
    var times = document.getElementsByName("time");
    for (var i = 0; i < times.length; i++) {
        if (times[i].checked) {
            alert("Msg Enviada");
        }
        else{
            alert("Escolha um TIME!")
        }
    }
};  */

let btnSubmit = document.querySelector('button[type="submit"]');

btnSubmit.addEventListener("click", (e)=>{
if (document.getElementsByName("time") == true ){
    alert("É necessário preencher todos os campos corretamente!")
    } 
else {
    alert("Mensagem enviada com sucesso!");
    }
})