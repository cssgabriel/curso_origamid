/*
1 - Selecione o link utilizando o método getElementById.

2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
 */

const link = document.getElementById("origamid");

if (link) {
  const url = link.getAttribute("href");
  link.setAttribute("href", `${url?.replace("http", "https")}`);
  console.log(link);
}

/* SOLUÇAO ANDRÉ RAFAEL
const link = document.getElementById('origamid');

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}

*/
