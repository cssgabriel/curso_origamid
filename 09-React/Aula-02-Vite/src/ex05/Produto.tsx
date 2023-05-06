import React from "react";

interface Props {
  produto: string;
}
interface Produto {
  nome: string;
  preco: string;
}

const Produto = ({ produto }: Props) => {
  const [dados, setDados] = React.useState<Produto | null>(null);

  React.useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((res) => res.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (!dados) return null;
  return (
    <article>
      <h2>{dados.nome}</h2>
      <p>R$ {dados.preco}</p>
    </article>
  );
};

export default Produto;
