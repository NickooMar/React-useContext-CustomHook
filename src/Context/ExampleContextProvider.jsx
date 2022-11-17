
import React, { useContext, useState } from "react";

import { ExampleContext } from "./ExampleContext";

import TasksExample from "../Api/Tasks.json";


export const useContextExample = () => {
  const context = useContext(ExampleContext);

  if (!context) {
    throw new Error("Lo siento, no hay contexto para mostrar");
  }

  return context;
};

const useActive = (initialState) => {
  const [active, setActive] = useState(initialState);

  const handleToggle = () => setActive(!active);
  const handleTrue = () => setActive(true);
  const handleFalse = () => setActive(false);

  return [active, { handleToggle, handleTrue, handleFalse }];
};

export const ExampleContextProvider = ({ children }) => {
  return (
    <ExampleContext.Provider value={{ useActive, TasksExample }}>
      {children}
    </ExampleContext.Provider>
  );
};
