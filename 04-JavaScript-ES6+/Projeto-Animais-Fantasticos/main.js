// const firstImg = document.querySelector("img");

// console.log(firstImg.offsetTop);
// console.log(firstImg.clientWidth);

// const allImgs = document.querySelectorAll("img");

// let sum = 0;

// allImgs.forEach((item) => {sum += item.clientWidth});

// console.log(sum);

const links = document.querySelectorAll("a");

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkHeight >= 48 && linkWidth >= 48) {
        console.log("Passou no teste");
    } else {
        console.log("Deu ruim", link)
    }
});