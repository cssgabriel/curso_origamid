import {
  LineChart,
  Tooltip,
  Line,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { IVenda } from "../Context/DataContext";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((ac: { [key: string]: VendaDia }, venda) => {
    const dia = venda.data.split(" ")[0];
    if (!ac[dia]) {
      ac[dia] = {
        data: dia.substring(5).split("-").reverse().join("-"),
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    ac[dia][venda.status] += venda.preco;

    return ac;
  }, {});

  return Object.values(dias);
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis dataKey="pago" />
        <Tooltip />
        <Legend strokeWidth={3} />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
