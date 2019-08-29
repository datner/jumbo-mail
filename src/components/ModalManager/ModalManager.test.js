import React from "react";
import { shallow } from "enzyme";
import ModalManager from "./ModalManager";

it("renders without crashing", () => {
  shallow(<ModalManager />);
});
