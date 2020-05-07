import React from "react";

export const Card = ({ src, name, index }) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        height: "80px",
        margin: "1rem",
      }}
    >
      <span style={{ margin: "1rem" }}>{index}번</span>
      <img src={src} style={{ height: "80px", margin: "1rem" }}></img>
      <span style={{ margin: "1rem" }}>{name}</span>
    </section>
  );
};
