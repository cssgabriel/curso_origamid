import React from "react";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
  const [cores, setCores] = React.useState<string[]>([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor: string) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => {
        return (
          <label key={cor}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor[0].toUpperCase() + cor.slice(1)}
          </label>
        );
      })}
    </form>
  );
};

export default App;
