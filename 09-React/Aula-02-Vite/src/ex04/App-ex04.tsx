import React, { ReactEventHandler } from "react";
import Produto from "./Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [load, setLoad] = React.useState(false);

  const URL_BASE = "https://ranekapi.origamid.dev/json/api/produto/";

  const fetchProduto = async function (
    e: React.PointerEvent<HTMLButtonElement>
  ) {
    setLoad(true);
    console.log(e);
    const res = await fetch(`${URL_BASE}${e.target.innerText}`);
    const json = await res.json();
    setLoad(false);
    setDados(json);
  };
  return (
    <div>
      <button onClick={fetchProduto}>notebook</button>
      <button onClick={fetchProduto}>tablet</button>
      <button onClick={fetchProduto}>smartphone</button>
      {load && <p>Carregando...</p>}
      {!load && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
