import React, { useState, useEffect, useCallback, useContext } from "react";
import { Component } from "./Component";
import { Header } from "./Header";
import kokasin from "./ko-ka-sin.jpeg";
import { List } from "./List";
import { shoesesDispatch } from "./Store";
function App() {
  const dispatch = useContext(shoesesDispatch);
  return (
    <div>
      <Header title="Shoes"></Header>
      <Component src={kokasin}></Component>
      <button
        style={{
          display: "block",
          width: "80px",
          height: "45px",
          backgroundColor: "blue",
          color: "white",
          border: "1px solid grey",
        }}
        onClick={() =>
          dispatch({
            type: "increase",
            payload: { src: kokasin, name: "shoes" },
          })
        }
      >
        담기
      </button>
      <List></List>
    </div>
  );
}

export default App;
