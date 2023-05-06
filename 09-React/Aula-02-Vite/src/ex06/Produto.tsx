import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  if (!global.dados) return null;
  return (
    <ul>
      {global.dados.map((d) => (
        <li key={d.id}>{d.nome}</li>
      ))}
    </ul>
  );
};

export default Produto;
