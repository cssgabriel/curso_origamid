const button = document.querySelector("button");
const p = document.querySelector("p");

function open() {
    p.classList.toggle("open");
}

button.addEventListener("click", open)