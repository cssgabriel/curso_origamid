// Ativar links menu

const links = document.querySelectorAll(".header-menu a");

function acionado(link) {
    const href = link.href;
    const url = location.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(acionado);

// Checked

const parametros = new URLSearchParams(location.search);

function ativarProduto(param) {
    const elemento = document.getElementById(param);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);


// Perguntas frequentes (acordeon)

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controle = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controle);

    resposta.classList.toggle("ativo");
    const ativo = resposta.classList.contains("ativo");
    pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    galeriaContainer.prepend(img)
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animações

if (window.SimpleAnime) {
    new SimpleAnime;
}