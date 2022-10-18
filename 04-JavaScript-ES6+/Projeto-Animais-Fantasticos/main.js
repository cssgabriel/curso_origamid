const linksInternos = document.querySelectorAll("a[href^='#']");

function clicou(event) {
    console.log(event.currentTarget);
}

linksInternos.forEach((link) => {
    link.addEventListener("click", clicou);
});