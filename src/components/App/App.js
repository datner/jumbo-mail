import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import LanguageProvider from "contexts/languageContext";
import Router from "components/Router";
import Page from "components/Page";

/**
 * Place all your app wrappers here, make sure the order is correct
 */
function App() {
  
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Page>
          <Router />
        </Page>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
