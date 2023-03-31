import { URL_API } from "./config.js";
import GenerateTable from "./generateTable.js";
import fetchData from "./fetchData.js";
import normalizeTransation from "./normalizeTransation.js";
const state = {
    payments: [],
    table: {
        headers: ["Nome", "Email", "Compra", "Pagamento", "Status"],
    },
};
async function getData() {
    const dataPayments = await fetchData(URL_API);
    if (!dataPayments)
        return;
    const transactions = dataPayments.map(normalizeTransation);
    console.log(transactions);
    const generateTable = new GenerateTable("body");
    generateTable.generateEmpityTable("afterbegin");
    generateTable.generateHead(...state.table.headers);
}
getData();
