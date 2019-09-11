import React from "react";
import Header from "components/Header";
import LanguageDetector from "./LanguageDetector";
import ModalManager from "components/ModalManager";

import "./Page.scss";

/**
 * Page wrapper, everything here is on every page
 */
const Page = ({ children }) => {
  return (
    <div>
      <ModalManager />
      <LanguageDetector />
      <Header />
      <div className="layout">{children}</div>
    </div>
  );
};

export default Page;
