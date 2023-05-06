import React from "react";
import { GlobalContext } from "./GlobalContext";

export const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar</button>;
};
