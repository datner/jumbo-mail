import React from "react";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "contexts/languageContext";
import ModalProvider from "contexts/modalContext";
import Router from "components/Router";
import Page from "components/Page";

import "./App.scss";

/*
 1. React - import React from 'react'
 2. node default import package - import Something from 'react-something'
 3. node destructed package - import {Part} from 'react-parts'
 4. local default components - import MyComponent from 'components/MyComponent'
 5. local destructed components - import {SubComponent} from 'components/OtherComponent'
 6. local default utils - import useHook from 'utils/useHook'
 7. local destructed utils - import {hookHelper} from 'utils/useHook'
 8. styles - import "./Component.scss"

*/

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
