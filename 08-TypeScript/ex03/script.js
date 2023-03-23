"use strict";
function mostraPessoa(obj) {
    return `${obj.nome} ${obj.sobrenome}`;
}
function idadeSal(obj) {
    return obj.idade / obj.salario;
}
const person = {
    nome: "Gabriel",
    sobrenome: "Carlos",
    idade: 25,
    salario: 3000,
};
console.log(mostraPessoa(person));
console.log(idadeSal(person));
