import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useLanguage } from "contexts/languageContext";

/**
 * a mock-react component to check sync between the language in the url
 * and the language we have in our state
 */
const LanguageDetector = ({ history }) => {
  const { setLanguage, getLanguages, getPath } = useLanguage();
  const langs = new RegExp(`^\\/(${getLanguages().join("|")})`);

  // helper function to find lang in the url, or localstorage
  function extractLang(history) {
    const groups = history.location.pathname.match(langs);
    if (groups) return groups[1];
    else return localStorage.getItem("lang");
  }
  const lang = extractLang(history);
  try {
    setLanguage(lang);
    return null;
  } catch (e) {
    console.warn(e);
    return <Redirect to={getPath()} />;
  }
};

export default withRouter(LanguageDetector);
