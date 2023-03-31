export default class GenerateTable {
    parentElement;
    constructor(selectorParentElment) {
        this.parentElement =
            document.querySelector(selectorParentElment);
    }
    generateEmpityTable(position, parentElment) {
        if (!parentElment && this.parentElement instanceof HTMLElement) {
            parentElment = parentElment ? parentElment : this.parentElement;
        }
        if (!(parentElment instanceof HTMLElement))
            return;
        parentElment.insertAdjacentElement(position, document.createElement("table"));
    }
    generateHead(...headers) {
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
