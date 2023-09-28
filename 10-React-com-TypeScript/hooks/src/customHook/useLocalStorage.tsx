import React from "react";

const useLocalStorage = (key: string, initial: string) => {
  const [state, useState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, useState] as const;
};

export default useLocalStorage;
