import React from "react";

interface Dados {
  descricao: string;
  fotos: [{ titulo: string; src: string }];
  id: string;
  nome: string;
  preco: string;
  vendido: boolean;
  usuario_id: string;
  [key: string]: unknown;
}

interface Props {
  dados: Dados;
}

const Produto = ({ dados }: Props) => {
  return (
    <article>
      <h3>{dados.nome}</h3>
      <p>{dados.descricao}</p>
      <p>Preço: R$ {dados.preco}</p>
      <div>
        {dados.fotos.map((ft) => (
          <img key={ft.titulo} src={ft.src} alt={ft.titulo} />
        ))}
      </div>
      <p>Em estoque: {dados.vendido ? "Sim" : "Não"}</p>
    </article>
  );
};

export default Produto;
