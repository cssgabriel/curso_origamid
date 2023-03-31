import { URL_API } from "./config.js";
import GenerateTable from "./generateTable.js";
import fetchData from "./fetchData.js";
import normalizeTransation from "./normalizeTransation.js";
import Statistics from "./Statistics.js";

const state = {
  transactions: [],
  table: {
    id: "transactions",
    headers: ["Nome", "Email", "Compra", "Pagamento", "Status"],
  },
};

async function getData() {
  const dataPayments = await fetchData<TransactionAPI[]>(URL_API);
  if (!dataPayments) return;
  const transactions = dataPayments.map(normalizeTransation);

  const generateTable = new GenerateTable("body");
  generateTable.generateEmpityTable("beforeend", null, state.table.id);
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
  renderStatistics(transactions);
}
getData();

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

function renderStatistics(transactions: Transaction[]): void {
  const statistics = new Statistics(transactions);
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (!totalElement) return;
  totalElement.innerText = statistics.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
