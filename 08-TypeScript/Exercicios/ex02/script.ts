// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (Number(value)) return Number(value);
  else throw "value deve ser um número ou uma string";
}

console.log(toNumber("gabriel"));
console.log(toNumber(28));
console.log(toNumber("10"));
