import React from "react";
import Produto from "./Produto";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState<string | null>(null);

  function handleClick({ target }: any) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    const produtoAtual = window.localStorage.getItem("produto");
    if (produtoAtual) setProduto(produtoAtual);
  }, []);

  React.useEffect(() => {
    if (produto) {
      window.localStorage.setItem("produto", produto);
    }
  }, [produto]);

  return (
    <>
      <h2>Preferência: {produto}</h2>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick} style={{ marginLeft: "1rem" }}>
        smartphone
      </button>
      {produto && <Produto produto={produto} />}
    </>
  );
};

export default App;
