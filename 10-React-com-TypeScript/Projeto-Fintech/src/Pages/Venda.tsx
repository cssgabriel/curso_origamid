import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../Components/Loading";
import { NavLink } from "react-router-dom";

type VendaSemData = Omit<IVenda, "data">;

export const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <>
      <div className="flex rastro">
        <NavLink to="/vendas">Vendas</NavLink>
        <span>{">"}</span>
        <span>{data.id}</span>
      </div>
      <div className="box mb">
        <p className="mb">
          <strong>ID:</strong> {data.id}
        </p>
        <p className="mb">
          <strong>Nome:</strong> {data.nome}
        </p>
        <p className="mb">
          <strong>Preço:</strong>{" "}
          {data.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p className="mb">
          <strong>Status:</strong> {data.status}
        </p>
        <p className="mb">
          <strong>Pagamento:</strong> {data.pagamento}
        </p>
      </div>
    </>
  );
};
