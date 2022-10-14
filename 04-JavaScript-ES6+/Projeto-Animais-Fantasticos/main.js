const p = document.querySelectorAll("p");

p.forEach((item, i) => console.log(item, i));

const pHTML = document.getElementsByTagName("p");

const pNewHTML = Array.from(pHTML);

console.log(pNewHTML);