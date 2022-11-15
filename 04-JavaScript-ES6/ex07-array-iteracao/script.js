// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrCursos = Array.from(cursos);

const newArray = arrCursos.map((curso) => {
  const nomeCurso = curso.querySelector("h1");
  const descricao = curso.querySelector("p");
  const aulas = curso.querySelector(".aulas");
  const horas = curso.querySelector(".horas");

  const obj = {
    nomeCurso,
    descricao,
    aulas,
    horas
  }
  
  return obj;
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter(n => n > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const possuiBaixo = instrumentos.some((item) => item === "Baixo");

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

const totalCompras = compras.reduce((acc, item) => {
  const valorCompra = +item.preco.replace("R$ ", "").replace(",", ".");
  return acc + valorCompra;
}, 0);