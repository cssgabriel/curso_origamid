function verificaDado(dado){
  return Object.prototype.toString.call(dado);
}


const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
      value: 4,
      enumerable: true,
  }
});