import React from "react";

interface Produto {
  nome: string;
  propriedades: string[];
}

const Produto = (props: Produto) => {
  return (
    <article style={{ border: "1px solid black", padding: "1rem" }}>
      <h3>{props.nome}</h3>
      <ul>
        {props.propriedades.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
};

export default Produto;
