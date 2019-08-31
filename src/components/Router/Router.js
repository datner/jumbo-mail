import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { useLanguage } from "contexts/languageContext";

const Router = () => {
  const {getPath, getLanguages} = useLanguage();
  const langs = `:lang(${getLanguages().join("|")})`
  return(
  <Switch>
    <Route exact path={`/${langs}/`} component={home} />
    <Route exact path={`/${langs}/why-go-pro`} component={about} />
    <Redirect from="*" to={getPath()} />
  </Switch>
)};

const home = () => <div>home</div>;
const about = () => <div>about</div>;

export default Router;
