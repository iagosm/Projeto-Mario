let botao = document.querySelector(".botao-trailer");
let modal = document.querySelector(".modal");
let fechar = document.querySelector(".fechar-modal");
let video = document.querySelector("#video");
const linkDoVideo = video.src;
console.log(linkDoVideo);

function alterarModal(){
    modal.classList.toggle("aberto")
}

botao.addEventListener("click", () =>{
    alterarModal("aberto");
    video.setAttribute("src", linkDoVideo)
})

fechar.addEventListener("click", () =>{
    alterarModal("aberto");
    video.setAttribute("src", "")
})