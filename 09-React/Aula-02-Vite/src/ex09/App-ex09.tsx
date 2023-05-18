import React from "react";
import Question from "./Question";

declare global {
  interface Perguntas {
    pergunta: string;
    options: string[];
    resposta: string;
    id: string;
  }
}

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const resultado = (
    <>
      <h2>Você acertou X questões!</h2>
      <p>voce é fera</p>
    </>
  );
  const [result, setResult] = React.useState([]);
  const [indexQuestion, setIndexQuestion] = React.useState(0);
  const [end, setEnd] = React.useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (perguntas[indexQuestion + 1]) {
      setIndexQuestion(indexQuestion + 1);
    } else {
      setEnd(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {end ? (
        resultado
      ) : (
        <Question
          indexQuestion={indexQuestion}
          questions={perguntas}
          value={result}
          setResult={setResult}
        />
      )}
      <button style={{ marginTop: "1rem" }}>Próxima</button>
    </form>
  );
};

export default App;
