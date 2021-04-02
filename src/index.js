import { StrictMode } from "react";
import ReactDOM from "react-dom";

import setupMockCommerceServer from "./api/mock.commerce.server";

import App from "./App";
import { CommerceContextProvider } from "./Components/commerce-context/commerce-context";

setupMockCommerceServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CommerceContextProvider>
      <App />
    </CommerceContextProvider>
  </StrictMode>,
  rootElement
);
