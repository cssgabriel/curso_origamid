export default class GenerateTable {
    parentElement;
    table;
    constructor(selectorParentElment) {
        this.parentElement =
            document.querySelector(selectorParentElment);
        this.table = document.createElement("table");
    }
    generateEmpityTable(position, parentElment, id) {
        if (!parentElment && this.parentElement instanceof HTMLElement) {
            parentElment = parentElment ? parentElment : this.parentElement;
        }
        if (!(parentElment instanceof HTMLElement))
            return;
        if (id)
            this.table.id = id;
        parentElment.insertAdjacentElement(position, this.table);
    }
    generateHead(position, ...headers) {
        const markup = `
        <thead>
          <tr>
            ${headers.map((th) => `<th>${th}</th>`).join("")}
          </tr>
        </thead>
    `;
        this.table?.insertAdjacentHTML(position ? position : "afterend", markup);
    }
    generateRow(position, transaction) {
        const tbody = this.table?.querySelector("tbody");
        if (!tbody) {
            this.table.appendChild(document.createElement("tbody"));
        }
        const markup = `
          <tr>
            <td>${transaction.nome}</td>
            <td>${transaction.email}</td>
            <td>${transaction.valor}</td>
            <td>${transaction.pagamento}</td>
            <td>${transaction.status}</td>
          </tr>
    `;
        tbody?.insertAdjacentHTML(position, markup);
    }
}
