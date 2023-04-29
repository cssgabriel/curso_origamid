import React from "react";

const Home = (props: { color: string }) => {
  return (
    <main>
      <h1 style={{ color: props.color }}>Home</h1>
      <p>Essa é a home do site.</p>
    </main>
  );
};

export default Home;
