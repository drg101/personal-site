import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import GlobalStateInterface from '../interfaces/GlobalState'

const GlobalStateContext = createContext({
    globalState: {} as GlobalStateInterface,
    setGlobalState: {} as (update: Partial<GlobalStateInterface>) => void
});

const GlobalStateProvider = ({
    children,
    value = {} as GlobalStateInterface,
}: {
    children: React.ReactNode;
    value?: GlobalStateInterface;
}) => {
    const [ globalState, setState ] = useState(value);
    const setGlobalState = (update: Partial<GlobalStateInterface>) => {
        setState({
          ...globalState,
          ...update
        });
    }
    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
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