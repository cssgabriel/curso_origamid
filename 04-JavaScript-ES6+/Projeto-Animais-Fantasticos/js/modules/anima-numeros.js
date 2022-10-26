export default function initAnimaNumeros() {
    
}

const numeros = document.querySelectorAll("[data-numero]");

numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = total;
        if(start > total) {
            clearInterval(timer);
        }
    }, 25 * Math.random());
});