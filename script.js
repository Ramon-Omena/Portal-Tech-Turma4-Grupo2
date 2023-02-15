/* carrossel */
let tempo = 5000, bannerIndex = 0;
let img = document.querySelectorAll(".banner-rotativo img");
let maximo = img.length;

function roda() {
    setInterval(()=>{
        img[bannerIndex].classList.remove("selected");
        
        bannerIndex++;

        if (bannerIndex >= maximo) {
            bannerIndex = 0;
        }

        img[bannerIndex].classList.add("selected");

    }, tempo);
}

window.addEventListener("load", roda);
/* carrossel */

function criarBlocoNoticia(href, srcImg, tituloBloco, textoBloco, dataHora) {

    let article = document.createElement("article");
    article.classList.add("noticias");

    let link = document.createElement("a");
    link.href = href;

    let image = document.createElement("img");
    image.src = srcImg;
    // image.alt = "noticia 1";

    link.appendChild(image);
    article.appendChild(link);

    let textArea = document.createElement("div");
    textArea.classList.add("area-texto");

    let strong = document.createElement("strong");
    strong.innerText = tituloBloco;

    let p1 = document.createElement("p");
    p1.appendChild(strong);

    let p2 = document.createElement("p");
    p2.innerText = textoBloco;

    let p3 = document.createElement("p");
    p3.innerText = dataHora;

    textArea.appendChild(p1);
    textArea.appendChild(p2);
    textArea.appendChild(p3);
    article.appendChild(textArea);

    let blocoNoticia = document.querySelector('.bloco-noticias');

    blocoNoticia.appendChild(article);
}

criarBlocoNoticia("/hugo-basquete/hugo-basquete.html",
"/hugo-basquete/img/noticia1.jpeg",
"FLABASQUETE TEM GRANDE ATUAÇÃO, VENCE PRIMEIRA E SE RECUPERA NA CHAMPIONS LEAGUE AMERICAS",
"Na noite desta quarta-feira (14), o FlaBasquete foi em busca da sua primeira vitória na Champions League Americas, contra o Peñarol, e não decepcionou. Com atuação sólida do início ao fim, o Mais Querido controlou o jogo, venceu por 94 a 67 em Montevidéu e se recuperou na competição.",
"14/12/2022 23h43");

criarBlocoNoticia("/ramon-futebol/ramon-futebol.html",
"/ramon-futebol/img/img-noticias/dorival-junior-do-flamengo.jpeg",
"DORIVAL JÚNIOR DEIXA O COMANDO TÉCNICO DO FLAMENGO",
"Horas depois de vazar que o clube sondou o português Vitor Pereira, ex-Corinthians, Dorival comunicou que não vai mais seguir à frente do time carioca.",
"19/12/2022 20h30");

criarBlocoNoticia("/rodrigo-volei/rodrigo-volei.html",
"/rodrigo-volei/IMG/suzano.webp",
"SÃO JOSÉ É PUNIDO COM A PERDA DE CINCO PONTOS POR ESCALAÇÃO IRREGULAR NA SUPERLIGA",
"Decisão unânime aponta que time escalou irregularmente o oposto Sanchez e o ponteiro Taht na partida contra o Campinas; equipe contesta decisão e diz que atletas estavam aptos para o jogo.",
"17/12/2022 17:17h");

criarBlocoNoticia("/ade-redondonews/ade-redondonews.html",
"/ade-redondonews/img/img-noticias/aboladavez.png",
"Testosterona e futebol!",
"No esporte, o hormônio e seus derivados encabeçam a enorme lista de substâncias consideradas doping.",
"17/12/2022 17:17h");