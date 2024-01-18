import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Componets from "./components/Componets";

function App() {
  let arr = [1, 2, 2, 3];
  return (
    <>
      <Componets btntext="idhrclick" list={arr} />
      <Componets btntext="visitme" />
    </>
  );
}

export default App;
