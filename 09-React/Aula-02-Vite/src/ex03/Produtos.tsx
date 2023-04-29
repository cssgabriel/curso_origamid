import React from "react";
import Produto from "./Produto";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = (props: { color: string }) => {
  return (
    <main>
      <h1 style={{ color: props.color }}>Produtos</h1>
      {produtos.map((p) => (
        <Produto key={p.nome} nome={p.nome} propriedades={p.propriedades} />
      ))}
    </main>
  );
};

export default Produtos;
