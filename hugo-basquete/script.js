
//teste pra ver se esta funcionando script
//document.querySelector('button').style.backgroundColor = 'Black'

//document.getElementById('tabela').style.backgroundColor = '#f09635'

/*TABELA MUDA DE COR LINHAS */
var tabela=document.getElementById("tabela")
    
for(var celula in tabela.getElementsByTagName("tr")){
tabela.getElementsByTagName("tr")[celula].onmouseover=function(){this.style.background="#C1EAD2"}
tabela.getElementsByTagName("tr")[celula].onmouseout=function(){this.style.background="#fefefe"}
}
    
    