/**

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

 */

async function getData(url: string) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

interface Cursos {
  nome: string;
  horas: number;
  tags: string[];
}

function isFormatValid(value: unknown): value is Cursos {
  if (value && typeof value === "object") {
    if ("nome" in value && "horas" in value && "tags" in value) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

async function run() {
  const json = await getData("https://api.origamid.dev/json/cursos.json");
  if (Array.isArray(json)) {
    json.filter(isFormatValid).forEach((item) => {
      document.body.innerHTML += `
        <h1>Cursos</h1>
        <h2>Nome: ${item.nome}</h2>
        <p>Horas: ${item.horas}</p>
        <p>Tags: ${item.tags.join(", ")}</p>
      `;
    });
  }
}

run();

/* SOLUÇÃO ANDRE RAFAEL

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

function isCurso(curso: unknown): curso is Curso {
  if (
    curso &&
    typeof curso === 'object' &&
    'nome' in curso &&
    'horas' in curso &&
    'tags' in curso
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(', ')}</p>
        </div>
      `;
    });
  }
}


*/
