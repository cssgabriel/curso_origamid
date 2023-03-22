/* Corrija o código abaixo

const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);


*/

const input = document.querySelector("input");
const p = document.querySelector("p");

const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(+input.value);
  input.addEventListener("keyup", totalMudou);
}

function calcularGanho(value: number) {
  if (p) p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}
