import { useStore } from "utils/useStore";
import languageFactory, { languages } from "./languageFactory";

/**
 * a function that creates an initial state for the app.
 * think refresh or first visit
 */
const initialState = () => {
  const lang = localStorage.getItem("lang");
  if (languages.includes(lang)) return { lang };
  return { lang: languages[0] };
};

const [LanguageProvider, useLanguage, withLanguage] = useStore(languageFactory, initialState);

export const languageInitState = initialState();

export {
  useLanguage,
  LanguageProvider,
  withLanguage,
};

export default LanguageProvider;
