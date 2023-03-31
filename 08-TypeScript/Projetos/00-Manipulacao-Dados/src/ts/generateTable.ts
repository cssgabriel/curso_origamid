interface Position {
  afterbegin: string;
  afterend: string;
  beforebegin: string;
  beforeend: string;
}

export default class GenerateTable {
  parentElement: HTMLElement | null;
  table: HTMLTableElement;
  constructor(selectorParentElment: string) {
    this.parentElement =
      document.querySelector<HTMLElement>(selectorParentElment);
    this.table = document.createElement("table");
  }

  generateEmpityTable(
    position: keyof Position,
    parentElment?: HTMLElement | null,
    id?: string | null
  ) {
    if (!parentElment && this.parentElement instanceof HTMLElement) {
      parentElment = parentElment ? parentElment : this.parentElement;
    }
    if (!(parentElment instanceof HTMLElement)) return;
    if (id) this.table.id = id;
    parentElment.insertAdjacentElement(position, this.table);
  }

  generateHead(position: keyof Position, ...headers: string[]) {
    const markup = `
        <thead>
          <tr>
            ${headers.map((th) => `<th>${th}</th>`).join("")}
          </tr>
        </thead>
    `;
    this.table?.insertAdjacentHTML(position ? position : "afterend", markup);
  }

  generateRow(position: keyof Position, transaction: Transaction) {
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
