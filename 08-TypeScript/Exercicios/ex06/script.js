"use strict";
/*
1 - Selecione os elementos com a classe link.
2 - Crie uma função que deve ser executada para cada elemento.
3 - Modificar através da função o estilo da color e border.
*/
const links = document.querySelectorAll(".link");
links.forEach((link) => checkIntaceof(link));
function checkIntaceof(link) {
    if (link instanceof HTMLAnchorElement) {
        link.style.cssText = "border: 2px solid black; color: red";
    }
    else if (link instanceof HTMLButtonElement) {
        link.style.cssText = "border: 2px solid blue; color: green";
    }
}
/* SOLUÇAO ANDRE RAFAEL

function checkIntaceof(link: HTMLElement) {
  link.style.cssText = "border: 2px solid black; color: red";
}
*/
