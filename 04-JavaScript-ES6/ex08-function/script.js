// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");
const somaCaracteres = Array.prototype.reduce.call(paragrafos,(acc, p) => {
  const caracteresP = +p.innerText.length;
  return caracteresP + acc
}, 0);

console.log(somaCaracteres);
  
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerText = conteudo;
  return element;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const createH1 = criarElemento.bind(null ,"h1" , "titulo");

console.log(createH1("Curso de JavaScript"));