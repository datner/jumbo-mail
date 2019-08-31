import { updater } from "utils/updater";
import DefaultContainer from "components/ModalManager/DefaultContainer";

/**
 * modal API factory.
 *
 */
export function modalFactory({ state, setState }) {
  // shorthand for setState(produce(draft => {...}))
  const updateState = updater(setState);

  const closeModal = () => updateState(draft => void (draft.modal = null));

  const setModal = (modal = {}) =>
    updateState(draft => {
      if (typeof modal === "function") {
        draft.modal = modal;
      } else {
        const { component = null, container = DefaultContainer, props = {} } = modal;
        draft.modal = component;
        draft.props = props;
        draft.container = container;
      }
    });

  const getModal = () =>
    state.modal
      ? () => state.container({ children: state.modal(state.props) })
      : null;

  return { setModal, getModal, closeModal };
}

export default modalFactory;
