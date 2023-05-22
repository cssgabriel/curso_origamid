import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import fetchData from "../fetchData";
import styles from "./Produto.module.css";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`
        );
        setProduto(data);
      } catch (err) {
        setError("Um erro ocorreu.");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>sou eu mesmo</p>;
  if (!produto) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
