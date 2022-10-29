// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const form = document.forms[0];
const btn = document.querySelector("button");

btn.addEventListener("click", searchCep);

function searchCep(event) {
  event.preventDefault();
  const cep = form.cep.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((resolucao) => resolucao.text())
  .then((arquivo) => {
    const div = document.createElement("div");
    div.innerText = arquivo;
    document.body.appendChild(div)
  })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const pegaValor = setInterval(() => {
  fetch("https://blockchain.info/ticker")
  .then((resolucao) => resolucao.json())
  .then((json) => {
    console.log(`Valor atualizado do Bitcoin: R$ ${json.BRL.buy}`);
  })
},10000000);


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
