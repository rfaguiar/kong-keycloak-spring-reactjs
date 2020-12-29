import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import {store, persistor} from "./redux";
import {PersistGate} from "redux-persist/integration/react";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {keycloakProviderInitConfig, keycloakConfig} from "./keycloak";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <ReactKeycloakProvider authClient={keycloakConfig} initOptions={keycloakProviderInitConfig}>
                <App />
              </ReactKeycloakProvider>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
