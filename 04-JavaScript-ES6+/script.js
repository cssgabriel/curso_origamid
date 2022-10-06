const item = document.querySelector(".item");

function open() {
    item.classList.toggle("open");
}

item.addEventListener("click",open)