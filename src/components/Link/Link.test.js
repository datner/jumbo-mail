import React from "react";
import { shallow } from "enzyme";
import { default as L } from "./Link";
import { withLanguage } from "contexts/languageContext";

// Link depends on the Language context to exist to plug it in for testing
const Link = withLanguage(L);

describe("<Link />", () => {
  it("renders without crashing", () => {
    shallow(<Link />);
  });
});
