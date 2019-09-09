import React, { createContext, useContext } from "react";
import useApi from "./useApi";

/**
 * Takes an apiFactory and its initial state and builds a full react context
 * interface to use it.
 * @param {Function} apiFactory - an api factory you wish to animate 
 * @param {*} initialState - the stores initial state, could be anything
 * @returns the store provider and a hook to use the store, and a wrapper for testing in an array 
 */
export function useStore(apiFactory, initialState) {
  const StoreContext = createContext();

  const StoreProvider = ({ children }) => {
    const store = useApi(apiFactory, initialState);

    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

  // this is mostly for testing purposes, use useStore instead for actual applications
  const withStore = Component => props => (
    <StoreProvider>
      <Component {...props} />
    </StoreProvider>
  );

  const useStore = () => useContext(StoreContext);

  return [StoreProvider, useStore, withStore];
}
