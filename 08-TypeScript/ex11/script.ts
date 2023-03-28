/*
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

*/

// [
//   "Tablet",
//   1500,
//   "2030-07-24 15:30:10",
//   {
//     "marca": "Apple",
//     "cor": "azul"
//   }
// ],

type Product = [string, number, string, { marca: string; cor: string }];

async function getData2(url: string) {
  const response = await fetch(url);
  const data = await await response.json();
  return data;
}

async function renderScreen() {
  const data = await getData2(`https://api.origamid.dev/json/vendas.json`);
  data.forEach((item: Product) => {
    document.body.innerHTML += `
      <div>
        <h2>${item[0].toUpperCase()}</h2>
        <p>R$ ${item[1]},00</p>
      </div>
    `;
  });
  const total = data.reduce((acc: number, [_, value]: Product) => {
    return (acc += value);
  }, 0);
  console.log(total);
  document.body.innerHTML += `
    <div style="color: red; font-size: 1.8rem">
      <h2>R$ ${total},00</h2>
    </div>
  `;
}

renderScreen();
