import produce from "immer";

/**
 * returns a setState with immer produce integrated
 * @param {Function} setState - the setState function you receive from useState
 */
export function updater(setState) {
    return (func) => setState(produce(func))
}
