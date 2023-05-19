import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./security/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
