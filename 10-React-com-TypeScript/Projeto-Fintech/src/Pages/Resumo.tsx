import GraficoVendas from "../Components/GraficoVendas";
import { useData } from "../Context/DataContext";

const Resumo = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((ac, item) => ac + item.preco, 0)
              .toLocaleString("pt-BR", { currency: "BRL", style: "currency" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((ac, item) => ac + item.preco, 0)
              .toLocaleString("pt-BR", { currency: "BRL", style: "currency" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((ac, item) => ac + item.preco, 0)
              .toLocaleString("pt-BR", { currency: "BRL", style: "currency" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

export default Resumo;
