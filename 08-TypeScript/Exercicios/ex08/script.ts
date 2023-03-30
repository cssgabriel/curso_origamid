/**

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.


 */

function arredonda(value: string): string;
function arredonda(value: number): number;
function arredonda(value: number | string): number | string {
  if (typeof value === "string") {
    return Math.ceil(+value).toString();
  } else {
    return Math.ceil(+value);
  }
}

arredonda(20.23);
arredonda("20.23");
