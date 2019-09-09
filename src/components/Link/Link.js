import React from "react";
import classNames from "classnames";
import { Link as L, NavLink as NL } from "react-router-dom";
import { useLanguage } from "contexts/languageContext";

import "./Link.scss";

const makeLink = Component => props => {
  const { getPath } = useLanguage();
  const className = classNames(["jm-link", props.className]);
  const to = getPath(props.to);
  return <Component {...{ ...props, to, className }} />;
};

const Link = makeLink(L);
export const NavLink = makeLink(NL);

export default Link;
