// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");

const arrayCursos = Array.from(cursos);

const retornoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});


console.log(retornoCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const higher100 = numeros.filter((value) => value > 100);
console.log(higher100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const contemBaixo = instrumentos.some((instrumento) => instrumento == "Baixo");
const contemBaixo2 = instrumentos.includes("Baixo");

console.log(contemBaixo, contemBaixo2)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const sumValue = compras.reduce((acc, value) => {
  const formatValue = +value.preco.replace("R$", "").trim().replace(",", ".");
  return acc + formatValue;
}, 0);

console.log(sumValue);