import VendaItem from "../Components/VendaItem";
import { useData } from "../Context/DataContext";

export const Vendas = () => {
  const { data } = useData();
  if (!data) return null;

  return (
    <ul>
      {data.map((venda) => (
        <VendaItem venda={venda} key={venda.id} />
      ))}
    </ul>
  );
};
