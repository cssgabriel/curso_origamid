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
async function getData() {
    const dataPayments = await fetchData(URL_API);
    if (!dataPayments)
        return;
    const transactions = dataPayments.map(normalizeTransation);
    const generateTable = new GenerateTable("body");
    generateTable.generateEmpityTable("afterbegin", null, state.table.id);
    generateTable.generateHead("afterbegin", ...state.table.headers);
    if (checkTypeGuard(transactions, "nome", "email", "valor", "pagamento", "status")) {
        transactions.forEach((transaction) => {
            generateTable.generateRow("beforeend", transaction);
        });
    }
}
function checkTypeGuard(data, ...keys) {
    if (data && typeof data === "object" && keys.filter((key) => key in data)) {
        return true;
    }
    else {
        return false;
    }
}
getData();
