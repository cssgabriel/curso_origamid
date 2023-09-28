import React from "react";
import Ex02Button from "./Ex02Button";

function App() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Ex02Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
