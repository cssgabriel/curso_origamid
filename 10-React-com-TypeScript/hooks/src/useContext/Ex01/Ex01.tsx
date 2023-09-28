/*
Utilize a API: https://data.origamid.dev/usuarios/1

1 - Crie um UserContext
2 - Use o useFetch dentro do UserContext para esportar data, loading e error
3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx

*/

import React from "react";
import useFetch from "../../useFetch";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface User {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
}

const ContextEx01 = React.createContext<FetchState<User> | null>(null);

export const useContextEx01 = () => {
  const context = React.useContext(ContextEx01);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const ContextPorviderEx01 = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <ContextEx01.Provider value={{ data, loading, error }}>
      {children}
    </ContextEx01.Provider>
  );
};
