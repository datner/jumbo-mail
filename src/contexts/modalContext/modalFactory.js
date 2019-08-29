import { updater } from "utils/updater";

/**
 * modal API factory.
 *
 */
export function modalFactory({ state, setState }) {
  // shorthand for setState(produce(draft => {...}))
  const updateState = updater(setState);

  const closeModal = () => updateState(draft => void (draft.modal = null));

  const setModal = modal => updateState(draft => void (draft.modal = modal));

  const getModal = () => state.modal;

  return { setModal, getModal, closeModal };
}

export default modalFactory;
