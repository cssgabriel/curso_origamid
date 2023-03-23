async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Notebook {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string | number;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Notebook) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
