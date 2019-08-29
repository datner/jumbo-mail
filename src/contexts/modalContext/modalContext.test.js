import { createTestApi } from "utils/useApi";
import modalFactory from "./modalFactory";

/**
 * constant default value
 */
const defaultValue = {
    value: 1
};

/**
 * initialize the testApi in a non-react enviroment
 * Remember, we are only checking if it works, not if its in React
 */
const testModal = createTestApi(modalFactory, defaultValue);
describe("modalContext", () => {
  it("returns initial value", () => {
    expect(testModal.api.getValue()).toEqual(defaultValue.value);
  });

  it("can change value", () => {
    testModal.api.setValue(2);  
    expect(testModal.api.getValue()).toEqual(2);
  });

});
