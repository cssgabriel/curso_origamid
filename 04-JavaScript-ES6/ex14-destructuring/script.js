// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btn.style;
console.log(backgroundColor, color, margin)


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

// Forma errada => const {bobCor: cor} = cachorro;

const {cor: bobCor} = cachorro;
