import React, { useContext } from "react";
import { shoeses } from "./Store";

export const Header = ({ title }) => {
  const shoes = useContext(shoeses);
  return (
    <header
      style={{
        display: "flex",
        width: "500px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      <span>cart:{shoes.length}</span>
    </header>
  );
};
