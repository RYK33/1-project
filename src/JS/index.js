console.log('MOSTRA DOCUMENTO',document);

document.querySelector(".botao-trailer");

const botaoTrailer = document.querySelector('.botao-trailer');

botaoTrailer.addEventListener("click", () => {
    modal.classList.add('aberto');
    video.setAttribute("src", linkDoVideo)
});

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "" )
});

const video = document.getElementById("video");

const linkDoVideo = video.src;