// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let sumTax = 0
let sumRec = 0
transacoes.forEach((item) => {

    if(item.descricao[0] === "T") {
        sumTax += +item.valor.replace("R$ ", "");
    } else {
        sumRec += +item.valor.replace("R$ ", "");
    }
});

console.log(sumTax, sumRec);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const newArray = transportes.split(";");

console.log(newArray)

// Substitua todos os span's por a's
const html = `
<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

const newHtml = html.split("span").join("a");

console.log(newHtml)


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1]);
// console.log(frase.slice(-1)); outra opção

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totTax = 0;
transacoes2.forEach((item) => {
    const strClear = item.toLowerCase().trim().includes("taxa")
    if(strClear) {
        totTax++
    }
});

console.log(totTax)