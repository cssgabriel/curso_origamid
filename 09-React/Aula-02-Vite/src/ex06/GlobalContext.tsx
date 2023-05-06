import React from "react";

export const GlobalContext = React.createContext(() => {
  const produto = [];
  fetch("https://ranekapi.origamid.dev/json/api/produto/")
    .then((res) => res.json())
    .then((json) => produto.push(json));
  return produto;
});
