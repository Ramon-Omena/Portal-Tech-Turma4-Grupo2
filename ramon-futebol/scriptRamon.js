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