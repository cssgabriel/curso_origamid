const listaLi = document.querySelectorAll("li");

const listaCpfs = ([...listaLi]) => {
  return listaLi.map(cpf => cpf.innerText);
}

const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, "");
}

const formatarCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

const cpfCompleto = (cpfs) => {
  return cpfs.map(limparCpf).map(formatarCpf);
}



// listaLi.forEach((li) => {
//   const regexp = /(?:\d{3}[.-\s]?){3}[-.\s]?\d{2}/g
//   console.log(li.innerText.replace(regexp, "Deu Certo"));
// });



/* 

111.111.111-11
222222222-22
333-333-333-33
44444444444
555 555 555 55
666666.666-66
777.777.777.77

*/