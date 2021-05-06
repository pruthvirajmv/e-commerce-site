import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthContextProvider } from "./context/auth-context/AuthProvider";
import { CommerceContextProvider } from "./context/commerce-context";


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
