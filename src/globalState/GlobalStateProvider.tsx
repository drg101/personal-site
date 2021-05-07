import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import GlobalStateInterface from '../interfaces/GlobalState'

const GlobalStateContext = createContext({
  state: {} as GlobalStateInterface,
  setPartialState: {} as (update: Partial<GlobalStateInterface>) => void
});

const GlobalStateProvider = ({
  children,
  value = {} as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: GlobalStateInterface;
}) => {
  const [ state, setState ] = useState(value);
  const setPartialState = (update: Partial<GlobalStateInterface>) => {
    setState({
      ...state,
      ...update
    });
  }
  return (
    <GlobalStateContext.Provider value={{ state, setPartialState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };