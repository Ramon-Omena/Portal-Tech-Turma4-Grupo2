/*TABELA MUDA DE COR LINHAS */
var tabela=document.getElementById("tabela")
    
for(var celula in tabela.getElementsByTagName("tr")){
tabela.getElementsByTagName("tr")[celula].onmouseover=function(){this.style.background="#C1EAD2"}
tabela.getElementsByTagName("tr")[celula].onmouseout=function(){this.style.background="#fefefe"}
}
/*---fim---TABELA MUDA DE COR LINHAS */    
    




///testando validacao de submit

/* let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
time: checked,
time2: checked
}
btnSubmit.addEventListener("click", (e)=>{if("input[name='time1']:checked"||"input[name='time2']:checked")
{
    e.preventDefault();
    console.log(inputsCorretos);
    alert("Mensagem enviada com sucesso!")
    } else {
    alert("Favor Selecione um Time!");
}
})
 */


$(function() {
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
 });