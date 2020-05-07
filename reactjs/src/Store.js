import React, { useReducer } from "react";

export const shoeses = React.createContext();
export const shoesesDispatch = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return [action.payload, ...state];
  }
};

export const ShoesesProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, []);
  return (
    <shoesesDispatch.Provider value={dispatch}>
      <shoeses.Provider value={value}>{children}</shoeses.Provider>
    </shoesesDispatch.Provider>
  );
};
