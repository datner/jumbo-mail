import React from "react";
import { shallow } from "enzyme";
import { createTestApi } from "utils/useApi";
import modalFactory from "./modalFactory";
import { modalInitState } from "./modalContext";

/**
 * constant default value
 */
const defaultValue = modalInitState;

const testModal = createTestApi(modalFactory, defaultValue);
afterEach(() => testModal.api.setModal(defaultValue));

/**
 * initialize the testApi in a non-react enviroment
 * Remember, we are only checking if it works, not if its in React
 */
describe("modalContext", () => {
  it("returns null when theres no Modal", () => {
    expect(testModal.api.getModal()).toEqual(defaultValue.modal);
  });

  it("can set a Modal directly", () => {
    const NewModal = () => <div>I passed the test</div>;

    testModal.api.setModal(NewModal);
    const Modal = testModal.state.modal;
    // expect(shallow(<Modal />).text()).toEqual("I passed the test");
  });
});
