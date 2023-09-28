import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  // const increment: React.MouseEventHandler = (event) => {
  //   setTotal((t) => t + 1);
  //   console.log(event.pageX);
  // }
  const increment = (event: React.MouseEvent) => {
    setTotal((t) => t + 1);
    console.log(event.pageX);
  };
  return (
    <div>
      <p>
        Total: <strong>{total}</strong>
      </p>
      <Button className="btn" onClick={increment} tamanho="1.25rem">
        Incrementar
      </Button>
    </div>
  );
}

export default App;
