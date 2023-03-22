function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

const nome = "       Gabriel CaRLoS DoS SanTOS SILVA    ";
console.log(normalizarTexto(nome));
