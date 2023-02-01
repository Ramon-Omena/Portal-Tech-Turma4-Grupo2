
//teste pra ver se esta funcionando script
//document.querySelector('button').style.backgroundColor = 'Black'

//document.getElementById('tabela').style.backgroundColor = '#f09635'


    var tabela=document.getElementById("tabela")
    
    for(var celula in tabela.getElementsByTagName("tr")){
    tabela.getElementsByTagName("tr")[celula].onmouseover=function(){this.style.background="#f09635"}
    tabela.getElementsByTagName("tr")[celula].onmouseout=function(){this.style.background="#ffffff"}
    }
    
    