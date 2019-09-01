import { useState, useMemo } from "react";

/**
 * creates an api with initial state
 * @param {Function} apiFactory - a factory function that can recieve a state and a setState and return an API
 * @param {*} initialState - an initialState the store is expecting, if a function, its returned value will be used
 * @returns depends on supplied apiFactory
 */
export function useApi(apiFactory, initialState) {
  // hook the api to react state
  const [state, setState] = useState(findInitialState(initialState));
  return useMemo(() => apiFactory({ state, setState }), [
    state,
    setState,
    apiFactory
  ]);
}

/**
 * helper function to find initial state
 * @param {*} initialState - something that will yield the initial state
 */
function findInitialState(initialState) {
  if (typeof initialState === "function") return initialState();
  else return initialState;
}

/**
 * specifically for testing, creates an api inside a vacuum and returns a shallow copy of it
 * @param {Function} apiFactory - a factory function that can recieve a state and a setState and return an API
 * @param {*} defaultValue - an initialState the store is expecting, if a function, its returned value will be used
 * @returns {Object} a deep reference to the api. This is to prevent a need to rehydrate unless directly referenced
 */
export function createTestApi(apiFactory, defaultValue) {
  const state = findInitialState(defaultValue);

  /**
   * to yield new states without reacts state re-render
   * trigger we need to make our own way to update
   * the state. We use shallow copy and rehydrate the reference
   */
  const setState = updater => {
    const getNewState = () => {
      if (typeof updater === "function") return updater(state);
      else return updater;
    };
    ref.api = apiFactory({ state: getNewState(), setState });
    ref.state = getNewState();
  };

  const ref = { api: apiFactory({ state, setState }), state };

  return ref;
}

export default useApi;
