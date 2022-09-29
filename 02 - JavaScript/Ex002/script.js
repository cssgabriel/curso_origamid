const circulo = document.querySelector(".div");

function sticky(event) {    
    circulo.style = `top: ${event.y}px; left: ${event.x}px`;
}

window.addEventListener("mousemove", sticky);
