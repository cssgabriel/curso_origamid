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
    const dataPayments = await fetchData(URL_API);
    if (!dataPayments)
        return;
    const transactions = dataPayments.map(normalizeTransation);
    const generateTable = new GenerateTable("body");
    generateTable.generateEmpityTable("beforeend", null, state.table.id);
    generateTable.generateHead("afterbegin", ...state.table.headers);
    if (checkTypeGuard(transactions, "nome", "email", "valor", "pagamento", "status")) {
        transactions.forEach((transaction) => {
            generateTable.generateRow("beforeend", transaction);
        });
    }
    renderStatistics(transactions);
}
getData();
function checkTypeGuard(data, ...keys) {
    if (data && typeof data === "object" && keys.filter((key) => key in data)) {
        return true;
    }
    else {
        return false;
    }
}
function renderList(list, containerId) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement)
        return;
    Object.keys(list).forEach((key) => {
        containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
    });
}
function renderStatistics(transactions) {
    const statistics = new Statistics(transactions);
    renderList(statistics.payment, "pagamento");
    renderList(statistics.status, "status");
    const totalElement = document.querySelector("#total span");
    if (!totalElement)
        return;
    totalElement.innerText = statistics.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    const dayElement = document.querySelector("#dia span");
    if (dayElement) {
        dayElement.innerText = statistics.bestDay[0];
    }
}
