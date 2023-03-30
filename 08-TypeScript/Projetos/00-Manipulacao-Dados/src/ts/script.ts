import { URL_API } from "./config.js";
import fetchData from "./model.js";
import jsonNormalize from "./textNormalize.js";

interface State {
  payments: Payments[];
}

const state = {
  payments: [],
};

interface Payments {
  status: string;
  id: number;
  data: string;
  nome: string;
  formaDePagamento: string;
  email: string;
  valor: string;
  clienteNovo: number;
}

// function checkTypeGuard<T>(data: unknown): data is Payments {}

async function getData() {
  const dataPayments = await fetchData<Payments[]>(URL_API);
  const ent = Object.keys(dataPayments[0]);

  // console.log(jsonNormalize(dataPayments));
}

getData();
