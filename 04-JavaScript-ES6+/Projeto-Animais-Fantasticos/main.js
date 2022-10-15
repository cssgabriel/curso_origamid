const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => item.classList.add("ativo"));

itensMenu.forEach((item, i) => {
    if(i !== 0) {
        item.classList.toggle("ativo");
    }
});

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
    console.log(item.hasAttribute("alt"));
});

const links = document.querySelector(".menu a\:not([href^='#'])");

links.setAttribute("href", "https://www.google.com")

console.log(links)
