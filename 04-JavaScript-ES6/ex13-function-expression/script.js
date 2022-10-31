// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  const priceNumber = "Tenho escopo de bloco."
  console.log(priceNumber);
})()

// Como podemos utilizar
// a função abaixo.

const active = callback => callback();
// esse código faz a ativação de do argumento passado(nesse caso o argumento deve ser uma função)
