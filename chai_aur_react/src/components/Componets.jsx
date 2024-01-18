import React from "react";

export default function Componets({ btntext, list }) {
  return (
    <button className="m-5 w-24 h-12 bg-black text-white">
      {btntext},{list}
    </button>
  );
}
