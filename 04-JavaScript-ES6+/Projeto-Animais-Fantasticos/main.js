const imagens = document.querySelectorAll("img");

console.log(imagens)

const imgs = document.querySelectorAll("img[src^='img/imagem']");

console.log(imgs)

const links = document.querySelectorAll("a[href^='#']");

console.log(links);

const firstH2 = document.querySelector(".animais-descricao h2");

console.log(firstH2);

const lastP = document.querySelectorAll("p");

console.log(lastP[lastP.length - 1]);


imagens.forEach((item, i) => {
    console.log(item, i);
});