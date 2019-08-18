import { createTestApi } from "utils/useApi";
import languageFactory from "./languageFactory";

/**
 * constant default value
 */
const defaultValue = {
  lang: "en"
};

/**
 * initialize the testApi in a non-react enviroment
 * Remember, we are only checking if it works, not if its in React
 */
const testLanguage = createTestApi(languageFactory, defaultValue);
let path = testLanguage.api.getPath;

describe("languageContext", () => {
  it("returns correct pathname", () => {
    expect(testLanguage.api.getLanguage()).toEqual("en");
  });

  it("sets new language as he", () => {
    testLanguage.api.setLanguage("he");
    // need to rehydrate reference value after shallow state change because I am totally defeatist
    path = testLanguage.api.getPath;

    expect(testLanguage.api.getLanguage()).toEqual("he");
  });

  it("returns correct pathname for given string", () => {
    const strPath = "/home";
    expect(path(strPath)).toEqual("/he/home");
  });

  it("returns correct pathname for given object", () => {
    const objPath = { pathname: "/home" };
    expect(path(objPath).pathname).toEqual("/he/home");
  });

  it("returns correct pathname for given function", () => {
    const location = { pathname: "/home" };
    const funcPath = location => ({ pathname: location.pathname + "/me" });
    expect(path(funcPath)(location).pathname).toEqual("/he/home/me");
  });
});
