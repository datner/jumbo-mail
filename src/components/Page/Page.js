import React from "react";
import Header from "components/Header";
import LanguageDetector from "./LanguageDetector";

/**
 * Page wrapper, everything here is on every page
 */
const Page = ({ children }) => {
  return (
    <div>
      <LanguageDetector />
      <Header />
      {children}
    </div>
  );
};

export default Page;
