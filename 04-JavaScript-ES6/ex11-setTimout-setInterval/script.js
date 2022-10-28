// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector("body");
// const loop = setInterval(() => {
//   body.classList.toggle("blue");
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const display = document.querySelector(".display");
const btnIniciar = document.querySelector(".btnIniciar");
const btnPausar = document.querySelector(".btnPausar");

display.innerText = 0;


btnIniciar.addEventListener("click", iniciar);
  
function iniciar() {
  if(!btnIniciar.classList.contains("ativo")){
    btnIniciar.classList.add("ativo");
    const iniciarContagem = setInterval(() => {
      display.innerText = +display.innerText + 1;
    }, 1000);
  
    btnPausar.addEventListener("click", pausar);
    btnPausar.addEventListener("dblclick", resetar);

    function pausar() {
      clearInterval(iniciarContagem);
    }

    function resetar() {
      clearInterval(iniciarContagem);
      display.innerText = 0;
      btnIniciar.classList.remove("ativo")
    }
  }
}

