const imagens = document.querySelectorAll("#galeria li img");

function trocar(event) {
    const principal = document.querySelector("#principal")
    const clicada = event.currentTarget;
    principal.src = clicada.src
    principal.alt = clicada.alt
}

function clique(img) {
    img.addEventListener("click", trocar)
}

imagens.forEach(clique);