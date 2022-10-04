const links = document.querySelectorAll("nav a");


function verifica(link) {
    const href = link.href;
    const url = document.location.href;
    if (href === url) {
        link.style = "color: white; background-color: black;"
    }
}

links.forEach(verifica)
