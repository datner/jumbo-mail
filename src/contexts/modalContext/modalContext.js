import { useStore } from "utils/useStore";
import modalFactory from "./modalFactory";
import DefaultContainer from "components/ModalManager/DefaultContainer";

const initialState = () => ({
  modal: null,
  container: DefaultContainer,
  props: {}
});

const [ModalProvider, useModal, withModal] = useStore(
  modalFactory,
  initialState
);

export const modalInitState = initialState();

export { useModal, ModalProvider, withModal };

export default ModalProvider;
