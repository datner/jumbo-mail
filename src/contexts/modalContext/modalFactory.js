import { updater } from "utils/updater";
import { modalInitState } from "./modalContext";

/**
 * modal API factory.
 *
 */
export function modalFactory({ state, setState }) {
  // shorthand for setState(produce(draft => {...}))
  const updateState = updater(setState);

  /**
   * sets modal to be null, effectively closing it
   */
  const closeModal = () => updateState(draft => void (draft.modal = null));

  /**
   * sets a new modal, and allowing its preview
   * @param {function | Object} modal - React component or object containing a component, props, and container for the modal
   */
  const setModal = (modal = {}) =>
    updateState(draft => {
      if (typeof modal === "function") {
        draft.modal = modal;
        draft.container = modalInitState.container;
        draft.props = modalInitState.props;
      } else {
        const {
          component = null,
          container = modalInitState.container,
          props = modalInitState.props
        } = modal;
        draft.modal = component;
        draft.props = props;
        draft.container = container;
      }
    });

  /**
   * returns either null or a wrapped modal with inserted props
   */
  const getModal = () =>
    state.modal
      ? () => state.container({ children: state.modal(state.props) })
      : null;

  return { setModal, getModal, closeModal };
}

export default modalFactory;
