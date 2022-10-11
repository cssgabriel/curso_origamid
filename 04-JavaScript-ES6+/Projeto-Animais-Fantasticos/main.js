const nome = document.querySelector(".header");

nome.addEventListener("click", function() {
    console.log("Função anônima executada!")
});

const firstSibling = nome.nextElementSibling;
