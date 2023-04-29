// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ex03/App-ex03";

if (window.location.pathname.includes("produtos")) {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App path="produtos" />
  );
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App color="green" path="home" />
  );
}
