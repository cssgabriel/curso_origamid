import { IVenda } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

const VendaItem = ({ venda }: { venda: IVenda } & { key: string }) => {
  return (
    <li>
      <NavLink to={`/vendas/${venda.id}`} className="venda box">
        <p style={{ fontFamily: "monospace" }}>{venda.id}</p>
        <p>{venda.nome}</p>
        <p>
          {venda.preco.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </p>
      </NavLink>
    </li>
  );
};

export default VendaItem;
