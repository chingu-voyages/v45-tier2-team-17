import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/index.scss";

import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
