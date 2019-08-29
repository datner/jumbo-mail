
import { useStore } from "utils/useStore";
import modalFactory from "./modalFactory";

const initialState = () => ({
    modal: null
});

const [ModalProvider, useModal, withModal] = useStore(
  modalFactory,
  initialState
);

export const modalInitState = initialState();

export { useModal, ModalProvider, withModal };

export default ModalProvider;
