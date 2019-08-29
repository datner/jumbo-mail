import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import LanguageProvider from "contexts/languageContext";
import Router from "components/Router";
import Page from "components/Page";
import ModalProvider from "contexts/modalContext";

/**
 * Place all your app wrappers here, make sure the order is correct
 */
function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ModalProvider>
          <Page>
            <Router />
          </Page>
        </ModalProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
