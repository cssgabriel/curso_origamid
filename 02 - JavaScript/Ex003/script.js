const botao = document.querySelector(".botao");
const div = document.querySelector("div");

function adicionar() {
    let currentValue = Number(div.textContent);
    if (currentValue < 10){
        div.textContent = currentValue + 1;
    } else {
        div.textContent = "Não é possível adicionar mais!";
        console.log("NÃO É POSSÍVEL SOMAR MAIS")
    }
}

if (botao) {
    botao.addEventListener("click", adicionar);
}