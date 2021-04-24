import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import setupMockCommerceServer from "./api/mock.commerce.server";

import App from "./App";
import { AuthContextProvider } from "./context/auth-context/AuthProvider";
import { CommerceContextProvider } from "./context/commerce-context";
// import { AuthContextProvider } from "."

// setupMockCommerceServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <Router>
        <CommerceContextProvider>
          <App />
        </CommerceContextProvider>
      </Router>
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
