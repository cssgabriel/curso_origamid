import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
