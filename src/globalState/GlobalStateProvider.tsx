import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import GlobalStateInterface from '../interfaces/GlobalState'
import UrlParams from '../lib/UrlParams';

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
        const newState = {
            ...globalState,
            ...update
        };
        if(UrlParams().page !== newState.page) {
            window.history.pushState(null, '', `/${newState.page === "home" ? "" : `?page=${newState.page}`}`);
        }
        setState(newState);
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