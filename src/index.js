import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import setupMockCommerceServer from "./api/mock.commerce.server";

import App from "./App";
import { CommerceContextProvider } from "./context/commerce-context";

setupMockCommerceServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <CommerceContextProvider>
        <App />
      </CommerceContextProvider>
    </Router>
  </StrictMode>,
  rootElement
);
