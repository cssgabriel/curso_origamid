// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const listLi = document.querySelectorAll("li");
for(const li of listLi) {
  li.classList.add("ativo");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const w in window) {
  console.log(window[w], w);
}