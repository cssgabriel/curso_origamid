// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipo(tipo) {
  return Object.prototype.toString.call(tipo);
}

console.log(verificaTipo("string"))
console.log(verificaTipo(25))
console.log(verificaTipo(verificaTipo))
console.log(verificaTipo([1]))
console.log(verificaTipo(true))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
    writable: false
  }
});

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);
console.log(Object.isFrozen(configuracao));

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const protString = Object.getOwnPropertyNames(String.prototype);
const protArray = Object.getOwnPropertyNames(Array.prototype);

console.log(protString)
console.log(protArray)

