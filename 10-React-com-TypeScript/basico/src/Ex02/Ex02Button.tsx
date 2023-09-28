import React from "react";

interface HandlersButton {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const Button = ({ total, setTotal }: HandlersButton) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button;
