import React from "react";
import { Link as L } from "react-router-dom";
import { useLanguage } from "contexts/languageContext/languageContext";

import "./Link.scss";

const Link = props => {
  const { getPath } = useLanguage();
  const to = getPath(props.to);
  console.log({to})
  return <L {...props} to={to} />;
};

export default Link;
