import React, { useContext } from "react";
import kokasin from "./ko-ka-sin.jpeg";
import { Card } from "./Card";
import { shoeses } from "./Store";
export const List = () => {
  const card = useContext(shoeses);
  let key = 1;
  return (
    <section style={{ margin: "1rem" }}>
      {card.map((value) => (
        <Card src={value.src} name={value.name} key={key} index={key++}></Card>
      ))}
    </section>
  );
};
