/*
Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado).
Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
 */

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

interface Course {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

function mostrarCursos(cursos: Course[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else {
      color = "red";
    }
    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tipo: ${curso.tags.join(", ")}</p>
        <p>Tipo: ${curso.idAulas.join(" | ")}</p>
      </div>
    `;
  });
}
