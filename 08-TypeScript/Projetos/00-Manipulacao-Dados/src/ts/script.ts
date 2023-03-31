import { URL_API } from "./config.js";
import GenerateTable from "./generateTable.js";
import fetchData from "./fetchData.js";
import normalizeTransation from "./normalizeTransation.js";

interface State {
  payments: Transaction[];
  table: {
    headers: string[];
  };
}

const state = {
  payments: [],
  table: {
    headers: ["Nome", "Email", "Compra", "Pagamento", "Status"],
  },
};

// function checkTypeGuard<T>(data: unknown): data is Payments {}

async function getData() {
  const dataPayments = await fetchData<TransactionAPI[]>(URL_API);
  if (!dataPayments) return;
  const transactions = dataPayments.map(normalizeTransation);
  console.log(transactions);

  const generateTable = new GenerateTable("body");
  generateTable.generateEmpityTable("afterbegin");
  generateTable.generateHead(...state.table.headers);

  // document.body.insertAdjacentHTML("afterbegin", markupHeader);
  // const keys = Object.keys(dataPayments[0]);
  // const keysLowerCase = keys.map((item) => {
  //   let newWordCamelCase;
  //   const words = item.split(" ");
  //   newWordCamelCase = words[0].toLowerCase();
  //   newWordCamelCase += words.
  // });

  // console.log(keysLowerCase);
  // // console.log(jsonNormalize(dataPayments));
}

getData();
