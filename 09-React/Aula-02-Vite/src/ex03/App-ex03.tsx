import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

declare global {
  interface Props {
    path: string;
    [key: string]: string;
  }
}

const App = (props: Props) => {
  let content;
  if (props.path.includes("produtos")) {
    content = <Produtos color="green" />;
  } else {
    content = <Home color="green" />;
  }
  return (
    <>
      <Header />
      {content}
    </>
  );
};

export default App;
