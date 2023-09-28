/*
Interface da API: https://data.origamid.dev/vendas/
<!-- Essa API possui dados de hoje até 90 dias atrás -->

1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
4 - Crie 3 estados reativos em App.tsx: data, inicio, final
5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar.
    Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

*/

import React from "react";
import Form from "./Form";
import Result from "./Result";

declare global {
  interface DataAPI {
    id: string;
    nome: string;
    preco: number;
    status: string;
    pagamento: string;
    parcelas: null | number;
    data: string;
  }
}

function App() {
  const [data, setData] = React.useState<DataAPI[] | null>(null);
  const [error, setError] = React.useState(false);

  return (
    <>
      <Form setData={setData} setError={setError} />
      {error ? <div>DEU ERRADO</div> : <Result data={data} />}
    </>
  );
}

export default App;
