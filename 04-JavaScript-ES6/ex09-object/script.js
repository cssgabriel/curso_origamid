// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

const section = document.querySelectorAll("section");

section.forEach((item, i) => {
  if(i % 2 === 0)
    item.dataset.anime = "show-down";
  else
    item.dataset.anime = "show-right";

  item.addEventListener("mouseover", handleMouse);
});

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

function handleMouse() {
  this.classList.add(this.dataset.anime);
}

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita



// Substitua todas as classes js- por data atributes.

