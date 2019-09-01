import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import ModalProvider from "contexts/modalContext";

it("renders without crashing", () => {
  shallow(
    <ModalProvider>
      <Header />
    </ModalProvider>
  );
});
