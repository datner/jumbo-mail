import React from "react";
import { withRouter } from "react-router-dom";
import { useLanguage } from "contexts/languageContext";

const LanguagePicker = withRouter(({ history }) => {
  const { getLanguages } = useLanguage();

  const handleChange = e => {
    history.push(`/${e.target.value}/`);
    window.location.reload(false);
  };

  return (
    <select
      className="languages"
      defaultValue="Languages"
      onChange={handleChange}
    >
      <option value="Languages" disabled>
        Languages
      </option>
      {getLanguages().map(lang => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
});

export default LanguagePicker;
