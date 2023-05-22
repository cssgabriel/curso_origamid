import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <main className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>gabriel@gmail.com</li>
          <li>9999-9999</li>
          <li>Rua Ali Perto, 0101</li>
        </ul>
      </div>
    </main>
  );
};

export default Contato;
