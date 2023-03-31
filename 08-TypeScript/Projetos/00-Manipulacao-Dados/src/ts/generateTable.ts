interface Position {
  afterbegin: string;
  afterend: string;
  beforebegin: string;
  beforeend: string;
}

export default class GenerateTable {
  parentElement: HTMLElement | null;
  constructor(selectorParentElment: string) {
    this.parentElement =
      document.querySelector<HTMLElement>(selectorParentElment);
  }

  generateEmpityTable(position: keyof Position, parentElment?: HTMLElement) {
    if (!parentElment && this.parentElement instanceof HTMLElement) {
      parentElment = parentElment ? parentElment : this.parentElement;
    }
    if (!(parentElment instanceof HTMLElement)) return;
    parentElment.insertAdjacentElement(
      position,
      document.createElement("table")
    );
  }
  generateHead(...headers: string[]) {
    const markup = `
        <thead>
          <tr>
            ${headers.map((th) => `<th>${th}</th>`).join("")}
          </tr>
        </thead>
    `;
    return markup;
  }
}
