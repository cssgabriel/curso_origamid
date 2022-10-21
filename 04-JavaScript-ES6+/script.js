// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");
const totCaracteres = Array.prototype.reduce.call(paragrafos, (acc,p) => {
    const caracteres = p.innerText.length;
    return acc + caracteres;
}, 0);

console.log(totCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createEl(tag,cls,content) {
    const element = document.createElement(tag);
    element.classList.add(cls);
    element.innerHTML = content;
    return element;
}

console.log(createEl("h1", "bg-1","Esse é um título"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1 = createEl.bind(null, "h1","titulo");
