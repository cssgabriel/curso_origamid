import { URL_API } from "./config.js";
import GenerateTable from "./generateTable.js";
import fetchData from "./fetchData.js";
import normalizeTransation from "./normalizeTransation.js";

const state = {
  payments: [],
  table: {
    id: "transactions",
    headers: ["Nome", "Email", "Compra", "Pagamento", "Status"],
  },
};

// function checkTypeGuard<T>(data: unknown): data is Payments {}

async function getData() {
  const dataPayments = await fetchData<TransactionAPI[]>(URL_API);
  if (!dataPayments) return;
  const transactions = dataPayments.map(normalizeTransation);

  const generateTable = new GenerateTable("body");
  generateTable.generateEmpityTable("afterbegin", null, state.table.id);
  generateTable.generateHead("afterbegin", ...state.table.headers);

  if (
    checkTypeGuard<Transaction>(
      transactions,
      "nome",
      "email",
      "valor",
      "pagamento",
      "status"
    )
  ) {
    transactions.forEach((transaction) => {
      generateTable.generateRow("beforeend", transaction);
    });
  }

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

function checkTypeGuard<T>(
  data: unknown[],
  ...keys: Array<keyof T>
): data is T[] {
  if (data && typeof data === "object" && keys.filter((key) => key in data)) {
    return true;
  } else {
    return false;
  }
}

getData();
