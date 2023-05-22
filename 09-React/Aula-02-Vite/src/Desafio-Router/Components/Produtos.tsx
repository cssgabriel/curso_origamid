import React from "react";
import styles from "./Produtos.module.css";
import fetchData from "../fetchData";
import { Link } from "react-router-dom";
import Head from "./Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetchData(`https://ranekapi.origamid.dev/json/api/produto`).then((json) =>
      setProdutos(json)
    );
  }, []);

  if (!produtos) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Descrição do site Ranek" />
      {produtos.map((prod) => (
        <Link to={`produto/${prod.id}`} key={prod.id}>
          <img src={prod.fotos[0].src} alt={prod.fotos[0].titulo} />
          <h1>{prod.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
