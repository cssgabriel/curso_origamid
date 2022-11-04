// Retorne um número aleatório
// entre 1050 e 2000

const randomNumber = Math.floor((Math.random() * (2000 - 1050 + 1)) + 1050);
console.log(randomNumber);

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(", ");
console.log(Math.max(...numeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos =
[
  'R$ 59,99',
  ' R$ 100,222',
  'R$ 230  ',
  'r$  200'
];

function limparPrecos(arr) {
  let sum = 0;
  arr.forEach((item) => {
    const precoLimpo = +item.toUpperCase().replace("R$ ", "").trim().replace(",", ".");
    sum += +precoLimpo.toFixed(2);
  })
  return sum;
}

console.log(limparPrecos(listaPrecos));
