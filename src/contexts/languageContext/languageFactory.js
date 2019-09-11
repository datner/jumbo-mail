import { updater } from "utils/updater";

// Available languages
// TODO: Fetch possible languages from the server
export const languages = ["en", "he", "ru", "it", "sp"];

/**
 * language API factory.
 * has the capabilities to get and set the language.
 *
 * @param {Object} obj - given to the function by the 'useApi' hook
 * @param {Object} obj.state - the state of a language context
 * @param {String} obj.state.lang - current language
 * @param {Function} obj.setState - a setting function
 */
export function languageFactory({ state, setState }) {
  // shorthand for setState(produce(draft => {...}))
  const updateState = updater(setState);

  /**
   * changes the current lang if its one of the supported langs
   * and sets the new lang in the localStorage
   * @param {String} lang - the language to change to, make sure it's supported
   */
  const setLanguage = lang => {
    if (lang === state.lang) return;
    if (languages.includes(lang))
      updateState(draft => {
        draft.direction = lang === "he" ? "rtl" : "ltr";
        draft.lang = lang;
        localStorage.setItem("lang", lang);
      });
    // if we reached here, someone gave this function a bad string
    else throw new Error(`${lang} is unrecognized!`);
  };

  /**
   * helper function for easier reading.
   * concat the current language to the pathname
   * @param {Object} obj
   */
  const concatPath = obj => ({
    ...obj,
    pathname: `/${state.lang}${obj.pathname}`
  });

  /**
   * @returns the current language
   */
  const getLanguage = () => state.lang;

  const getDirection = () => state.direction;

  /**
   * @returns the supported languages
   */
  const getLanguages = () => languages;

  /**
   * gets the path taking into account the current language
   * @param {(String|Object|Function)} [to = null] - if needed, the "to" prop to be given to a react-router Route
   * @returns {String} a concatenated path with the current language
   */
  const getPath = (to = null) => {
    if (to === null) return `/${state.lang}/`;

    // why would this happen?
    if (Array.isArray(to)) {
      console.warn(
        "languageFactory.getPath received an array, this should not happen"
      );
      return `/${state.lang}/`;
    }

    switch (typeof to) {
      case "object":
        return concatPath(to);
      case "function":
        return location => concatPath(to(location));
      default:
        // case "string"
        return `/${state.lang}${to}`;
    }
  };

  //finally, return the API
  return { setLanguage, getLanguage, getPath, getLanguages, getDirection };
}

export default languageFactory;
