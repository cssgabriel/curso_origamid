const item = document.querySelectorAll(".item");

function open(item) {
    item.classList.toggle("open");
}

function addEvent(item) {
    item.addEventListener("click", open);
}

item.forEach(addEvent);