import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GitHubProvider } from "./context/GitHubContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GitHubProvider>
    <App />
  </GitHubProvider>
);
