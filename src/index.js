import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./contexts/appContext";
import { UserProvider } from "./contexts/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

