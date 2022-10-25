function mudarCor() {
  const body = document.querySelector("body");
  const attribute = body.hasAttribute("data-blue");

  for(let i = 0; i < 20 ;i++) {
      if(attribute) {
          body.setAttribute("data-blue","");
          body.style.background = "blue";
      } else {
          body.setAttribute("data-red","");
          body.style.background = "red";
      }
      setTimeout(1000);
  }
}

mudarCor();