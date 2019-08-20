import { useStore } from "utils/useStore";
import languageFactory, { languages } from "./languageFactory";

/**
 * a function that creates an initial state for the app.
 * think refresh or first visit
 */
const initialState = () => {
  const lang = localStorage.getItem("lang");
  const state = {
    direction: lang === "he" ? "rtl" : "ltr",
    lang: languages.includes(lang) ? lang : languages[0]
  };
  return state;
};

const [LanguageProvider, useLanguage, withLanguage] = useStore(
  languageFactory,
  initialState
);

export const languageInitState = initialState();

export { useLanguage, LanguageProvider, withLanguage };

export default LanguageProvider;
