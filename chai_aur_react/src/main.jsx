import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Tarun from "./tarun.jsx";
import { Mahima } from "./tarun.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Mahima />
      <Tarun />
      <App />
    </>
  </React.StrictMode>
);
