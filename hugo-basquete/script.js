/*TABELA MUDA DE COR LINHAS */
var tabela = document.getElementById("tabela")
    
for(var celula in tabela.getElementsByTagName("tr")){
tabela.getElementsByTagName("tr")[celula].onmouseover=function(){this.style.background="#C1EAD2"}
tabela.getElementsByTagName("tr")[celula].onmouseout=function(){this.style.background="#fefefe"}
}
/*---fim---TABELA MUDA DE COR LINHAS */    
    

